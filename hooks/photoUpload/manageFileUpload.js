import { auth, db } from "../../lib/firebase";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import {
  refetchCurrentUserProfile,
  updateCurrentUserProfileImage,
} from "../../context/user/UserActions";

import getBlobFromUri from "./getBlobFromUri";
import { setMessage } from "../../context/message/MessageActions";
import uuid from "react-native-uuid";

const uploadProfileImage = async (
  messageDispatch,
  currentUserProfileDispatch,
  { imgURI }
) => {
  try {
    updateCurrentUserProfileImage(currentUserProfileDispatch, {
      isUploading: true,
    });

    const imageId = uuid.v4();
    const imgName = `users/${auth.currentUser.uid}/profileImages/${imageId}`;
    const storage = getStorage();

    const storageRef = ref(storage, imgName);
    const blob = await getBlobFromUri(imgURI);

    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        updateCurrentUserProfileImage(currentUserProfileDispatch, {
          isUploading: true,
          progress: Math.fround(progress).toFixed(2),
        });
      },
      (error) => {
        updateCurrentUserProfileImage(currentUserProfileDispatch, {
          error: error,
          isUploading: false,
        });
      },
      async () => {
        const downloadURL = await getDownloadURL(storageRef);

        const userRef = doc(db, "users", auth.currentUser.uid);

        const data = { profileImage: downloadURL };

        await updateDoc(userRef, data)
          .then((userRef) => {
            updateCurrentUserProfileImage(currentUserProfileDispatch, {
              remoteURL: downloadURL,
              isUploading: false,
              isSaved: true,
              progress: "",
            });

            setMessage(
              messageDispatch,
              "Profile picture has been updated successfully!"
            );

            refetchCurrentUserProfile(currentUserProfileDispatch, true); // Refetch user data from auth
          })
          .catch((error) => {
            updateCurrentUserProfileImage(currentUserProfileDispatch, {
              error: error.message,
              isUploading: false,
            });

            setMessage(messageDispatch, "Profile picture update failed.");
          });
      }
    );
  } catch (error) {
    updateCurrentUserProfileImage(currentUserProfileDispatch, {
      error: error.message,
      isUploading: false,
    });
  }
};

export default uploadProfileImage;
