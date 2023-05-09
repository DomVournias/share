import { avatar } from "../../assets/imageLinks";
import useAuth from "../../context/useAuth";

export const userData = () => {
  const { userAuth } = useAuth();
  const data = {
    userId: userAuth.userId,
    email: userAuth.email,
    phone: userAuth.phoneNumber,
    firstName: userAuth.firstName,
    lastName: userAuth.lastName,
    acceptedTerms: userAuth.acceptsTerms,
    profileImage: avatar,

    rider: {
      stats: {
        miles: 0,
        rides: 0,
        drives: 0,
        rating: 0,
      },
      reviews: {},
      verification: {
        isVerified: false,
        verificationPhoto: "",
        dateOfBirth: "",
      },
    },

    driver: {
      stats: {
        miles: 0,
        rides: 0,
        drives: 0,
        rating: 0,
      },
      reviews: {},
      verification: {
        isVerified: false,
        verificationPhoto: "",
        dateOfBirth: "",
        governmentId: "",
        vehicleLicense: "",
        vehicleInsuranceDoc: "",
      },
    },

    review: {
      firstName: "",
      lastName: "",
      comment: "",
      rating: 0,
    },
  };

  return data;
};
