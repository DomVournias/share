import { View, Text, Image } from "react-native";
import React from "react";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { CardStyleInterpolators } from "@react-navigation/stack";
import styled from "styled-components/native";
import { CurrentUserProfileContext } from "../context/user/UserReducer";
import { avatar } from "../assets/imageLinks";
import { Rating, AirbnbRating } from "react-native-ratings";
import RatingLines from "../components/Rating/RatingLines";

const Reviews = ({ route }) => {
  const navigation = useNavigation();

  const { firstName, reviews, averageRating } = route.params;

  const ratings = reviews.map((review) => review.rating);

  // console.log("❤️⭐Reviews", ratings);

  return (
    <Container>
      <Header>
        <Heading>{firstName}'s Reviews</Heading>
      </Header>

      <RatingStats>
        <AverageRatingNumber>{averageRating}</AverageRatingNumber>
        <AverageRatingStars>
          <AirbnbRating
            count={5}
            reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
            defaultRating={averageRating}
            size={18}
            showRating={false}
            isDisabled={true}
          />
        </AverageRatingStars>
        <AverageRatingDescription>
          based on {reviews.length} reviews
        </AverageRatingDescription>

        <RatingLines ratings={ratings} />
      </RatingStats>
      <ReviewsList>
        {reviews.map((review, index) => (
          <Review key={index}>
            <CommenterDetails>
              <Details>
                <UserImage>
                  <Image
                    source={{ uri: review.profileImage }}
                    width={40}
                    height={40}
                  />
                </UserImage>
                <Block>
                  <UserName>
                    {review.firstName} {review.lastName}
                  </UserName>
                  <RatingBlock>
                    <AirbnbRating
                      count={5}
                      reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
                      defaultRating={review.rating.overall}
                      size={13}
                      showRating={false}
                      isDisabled={true}
                    />
                    <RatingCount>{review.rating.overall}</RatingCount>
                  </RatingBlock>
                </Block>
              </Details>

              <DateAdded>1 day ago</DateAdded>
            </CommenterDetails>
            <Comment>{review.comment}</Comment>
          </Review>
        ))}
      </ReviewsList>
    </Container>
  );
};

export default Reviews;

const Container = styled.View`
  padding: 20px;
  gap: 20px;
  /* border-bottom-left-radius: 55px;
  border-top-right-radius: 55px; */
`;

const Header = styled.View`
  text-align: center;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.Text`
  font-weight: 600;
  font-size: 15px;
`;

const ReviewsList = styled.View`
  gap: 25px;
`;

const Review = styled.View`
  gap: 5px;
`;

const CommenterDetails = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled.View`
  flex-direction: row;
  align-items: center;

  gap: 10px;
`;

const Block = styled.View`
  align-items: flex-start;
`;

const UserImage = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
`;

const UserName = styled.Text`
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 14.5px;
`;

const RatingBlock = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const RatingCount = styled.Text`
  font-size: 13px;
  font-weight: 500;
`;

const DateAdded = styled.Text`
  font-size: 12px;
  opacity: 0.7;
`;

const Comment = styled.Text`
  font-size: 13px;
  opacity: 0.7;
  line-height: 20px;
`;

const RatingStats = styled.View`
  justify-content: center;
  align-items: center;
`;
const AverageRatingNumber = styled.Text`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 5px;
`;
const AverageRatingStars = styled.View`
  margin-bottom: 5px;
`;
const AverageRatingDescription = styled.Text`
  font-size: 14.5px;
  opacity: 0.6;
`;

const Stats = styled.View``;
const StatsExpressions = styled.View``;
const StatsLines = styled.View``;
