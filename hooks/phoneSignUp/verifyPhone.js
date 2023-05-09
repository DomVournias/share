const handleSendVerificationCode = async () => {
  try {
    const confirmation = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber);
    setVerificationCode(confirmation);
    Alert.alert("Verification code sent to your phone.");
  } catch (error) {
    Alert.alert("Error sending verification code:", error.message);
  }
};

const handleVerifyCode = async () => {
  try {
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationCode.verificationId,
      verificationCode.code
    );
    await firebase.auth().signInWithCredential(credential);
    const user = firebase.auth().currentUser;
    await user.updateProfile({
      displayName: name,
    });
    await firebase.firestore().collection("users").doc(user.uid).set({
      name: name,
      email: email,
    });
    Alert.alert("Registration successful!");
  } catch (error) {
    Alert.alert("Error verifying code:", error.message);
  }
};
