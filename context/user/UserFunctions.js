import { doc, getDoc, setDoc } from "firebase/firestore";
import { setAuthLoading, setLoading } from "context/loading/LoadingActions";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { avatar } from "assets/imageLinks";
import { db } from "lib/firebase";
import { setCurrentUserProfile } from "context/user/UserActions";
import { setMessage } from "context/message/MessageActions";
import { setRegistrationStep } from "context/auth/AuthActions";
import { signInCurrentUser } from "context/auth/AuthFunctions";
import { updateProfile } from "firebase/auth";

export const fetchCurrentUserProfile = async (
  messageDispatch,
  loadingDispatch,
  currentUserProfileDispatch,
  authDispatch,
  { auth }
) => {
  try {
    const userId = auth.currentUser.uid;
    const userRef = doc(db, "users", userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      setCurrentUserProfile(currentUserProfileDispatch, { userData });
      signInCurrentUser(authDispatch);
      setMessage(messageDispatch, "User set successfully!");
      setLoading(loadingDispatch, false);
    } else {
      // setUser(null);
      setMessage(messageDispatch, "User not found.");
      setLoading(loadingDispatch, false);
    }
  } catch (error) {
    console.log("Error at fetchUserData", error.message);
    setLoading(loadingDispatch, false);
  }
};

export const currentUserExistsInDB = () => {};

export const createNewUser = async (
  authDispatch,
  loadingDispatch,
  messageDispatch,
  { auth, authData },
  navigation
) => {
  try {
    setAuthLoading(loadingDispatch, true);

    const today = new Date();

    const authUser = auth.currentUser;
    const contextUser = authData.data;

    const data = {
      email: authUser.email,
      phoneNumber: authUser.phoneNumber,
      firstName: contextUser.firstName,
      lastName: contextUser.lastName,
      profileImage: authUser.photoURL,
      gender: contextUser.gender,
      dateOfBirth: contextUser.dateOfBirth,
      bio: "",
      stats: {
        drives: 240,
        rides: 25,
        miles: 1200,
        responseRate: 0,
        responseTime: 0,
      },
      verifications: {
        acceptedTerms: contextUser.acceptsTerms,
        phone: true,
        email: false,
        paymentVerification: false,
        governmentId: false,
      },
      documents: {
        governmentId: "",
      },
      reviews: [
        {
          uid: "",
          userType: "driver",
          profileImage: avatar,
          firstName: "Alex",
          lastName: "Pahatouridhs",
          comment: "The passenger was awsome, he was on time.",
          trip: {
            start: "Thessaloniki",
            finish: "Athens",
            date: today,
          },
          rating: {
            overall: 4.5,
            safety: 5,
            communication: 4.5,
            timeliness: 5,
          },
        },
        {
          uid: "",
          userType: "rider",
          profileImage: avatar,
          firstName: "Ioanna",
          lastName: "Anastasiou",
          comment:
            "Very dirty vehicle, the driver was good but we couldn't stand the smell!",
          trip: {
            start: "Xanthi",
            finish: "Thessaloniki",
            date: today,
          },
          rating: {
            overall: 3.5,
            safety: 2,
            communication: 3.5,
            timeliness: 3,
          },
        },
      ],
      vehicle: {
        hasVehicle: contextUser.vehicle.hasVehicle,
        brand: contextUser.vehicle.brand,
        year: contextUser.vehicle.year,
        color: contextUser.vehicle.color,
        photo: "",
      },
      joined: today,
    };

    await updateProfile(auth.currentUser, {
      photoURL: avatar,
    });

    await setDoc(doc(db, "users", auth.currentUser.uid), data);

    setMessage(messageDispatch, "Successful registration👍");

    setRegistrationStep(authDispatch, { terms: true });

    // Signed in value assigned to local storage
    await signInCurrentUser(authDispatch);

    setAuthLoading(loadingDispatch, false);
    // setTimeout(() => {
    //   navigation.navigate("Home");
    // }, 1500);
  } catch (error) {
    console.log(`createNewUser error: ${error.message}`);
  }
};
