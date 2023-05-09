import * as Updates from "expo-updates";
import { PhoneAuthProvider, signOut } from "firebase/auth/react-native";
import { auth, db } from "../../lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { setAuthPhoneNumber, setAuthVerificationId } from "./AuthActions";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { resetCurrentUserProfile } from "../user/UserActions";
import { setLoading } from "../loading/LoadingActions";
import { setMessage } from "../message/MessageActions";
import { signInWithCredential } from "firebase/auth";
import { AppState } from "react-native";
import { useEffect } from "react";

export const signInCurrentUser = async (authDispatch) => {
  try {
    authDispatch({
      type: "SIGN_IN",
      payload: true,
    });
    await AsyncStorage.setItem("signedIn", "true");
  } catch (error) {
    console.log("Error at Sign in", error.message);
  }
};

export const signOutCurrentUser = async (
  currentUserProfileDispatch,
  authDispatch,
  navigation
) => {
  try {
    await signOut(auth);

    authDispatch({
      type: "SIGN_IN",
      payload: false,
    });

    await AsyncStorage.setItem("signedIn", "false");

    resetCurrentUserProfile(currentUserProfileDispatch);

    // navigation.navigate("PhoneNumberScreen");
  } catch (error) {
    console.log("Error at signOutUser", error.message);
  }
};

export const sendVerificationCode = async (
  authDispatch,
  loadingDispatch,
  messageDispatch,
  { countryCode, phoneNumberValue, recaptchaVerifier },
  navigation
) => {
  try {
    setLoading(loadingDispatch, true);

    const formattedPhone = `+${countryCode}` + phoneNumberValue;

    const phoneProvider = new PhoneAuthProvider(auth);
    const verifiedId = await phoneProvider.verifyPhoneNumber(
      formattedPhone,
      recaptchaVerifier.current
    );

    setAuthPhoneNumber(authDispatch, formattedPhone);

    setAuthVerificationId(authDispatch, verifiedId);

    setMessage(
      messageDispatch,
      "Verification code has been sent to your phone."
    );

    setLoading(loadingDispatch, false);
    navigation.navigate("OTPVerification");
  } catch (error) {
    console.error("sendVerificationCode", error.message);
  }
};

export const confirmVerificationCode = async (
  loadingDispatch,
  messageDispatch,
  { authData },
  navigation
) => {
  try {
    setLoading(loadingDispatch, true);

    const verificationId = authData.data.verificationId;
    const verificationCode = authData.data.verificationCode;

    const credential = PhoneAuthProvider.credential(
      verificationId,
      verificationCode
    );

    await signInWithCredential(auth, credential);

    setLoading(loadingDispatch, false);

    if (auth.currentUser) {
      setLoading(loadingDispatch, true);
      const userRef = doc(db, "users", auth.currentUser.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        // setAuthData((prevAuthData) => ({
        //   ...prevAuthData,
        //   signedIn: true,
        //   message: "User already exists 👍",
        // }));
        setMessage(messageDispatch, "User already exists 👍");

        // Signed in value assigned to local storage
        await AsyncStorage.setItem("signedIn", "true");
        setLoading(loadingDispatch, false);
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1500);
      } else {
        setMessage(messageDispatch, "User doesn't exist 👍");
        setLoading(loadingDispatch, false);
        setTimeout(() => {
          navigation.navigate("EmailRegistration");
        }, 1500);
      }
    }
  } catch (error) {
    console.log("ConfirmVerificationCode", error.message);
  }
};
