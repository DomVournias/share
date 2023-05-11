import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { AirbnbRating } from "react-native-ratings";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { format } from "date-fns";
import { FontAwesome } from "@expo/vector-icons";

const Reviews = ({ reviews }) => {
  function reviewTripDate(value) {
    const date = new Date(value * 1000);
    const formattedReviewTripDate = format(date, "d MMM, yyyy");
    return formattedReviewTripDate;
  }

  return (
    <Container>
      <Title>{`Reviews (${reviews.length})`}</Title>
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
                  <DriverInfo>
                    <NameAndType>
                      <UserName>{review.firstName}</UserName>
                      <Divider>
                        <MaterialIcons name="circle" size={4} color="black" />
                      </Divider>
                      <UserType>{review.userType} review</UserType>
                    </NameAndType>
                    <Rating>
                      <RatingCount>{review.rating.overall}</RatingCount>
                      <FontAwesome name="star" size={8} color="#fff" />
                    </Rating>
                  </DriverInfo>
                  <Row>
                    <TripInfo>
                      {`${review.trip.start} to ${
                        review.trip.finish
                      } on ${reviewTripDate(review.trip.date.seconds)}`}
                    </TripInfo>
                  </Row>

                  {/* <RatingBlock>
                    <AirbnbRating
                      count={5}
                      reviews={["Terrible", "Bad", "OK", "Good", "Amazing"]}
                      defaultRating={review.rating.overall}
                      size={13}
                      showRating={false}
                      isDisabled={true}
                    />
                    <RatingCount>{review.rating.overall}</RatingCount>
                  </RatingBlock> */}
                  {/* <Row> */}
                  <Comment>{review.comment}</Comment>
                  {/* </Row> */}
                </Block>
              </Details>
              {/* <DateAdded>1 day ago</DateAdded> */}
            </CommenterDetails>
          </Review>
        ))}
      </ReviewsList>
    </Container>
  );
};

export default Reviews;

const Container = styled(View)`
  flex: 1;
  padding: 20px 30px;
  gap: 20px;
  background-color: white;
`;

const Row = styled(View)`
  flex-direction: row;
  align-items: center;
`;

const DriverInfo = styled(Row)`
  width: 100%;
  justify-content: space-between;
`;

const NameAndType = styled(Row)`
  gap: 5px;
`;

const Title = styled(Text)`
  font-weight: 600;
  font-size: 14.5px;
`;

const ReviewsList = styled(View)`
  gap: 25px;
`;

const Review = styled(View)`
  gap: 5px;
`;

const CommenterDetails = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Details = styled(View)`
  flex-direction: row;
  align-items: center;
  gap: 7px;
`;

const Block = styled(View)`
  flex: 1;
  align-items: flex-start;
`;

const UserImage = styled(View)`
  align-self: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  overflow: hidden;
  position: relative;
`;

const Divider = styled(View)`
  opacity: 0.4;
`;

const Rating = styled(Row)`
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 8px;
  padding: 1px 5px;
  gap: 3px;
`;

// Texts

const UserName = styled(Text)`
  font-weight: 600;
  font-size: 16px;
`;

const UserType = styled(Text)`
  opacity: 0.7;
  text-transform: capitalize;
  font-size: 13px;
`;

const RatingCount = styled(Text)`
  font-size: 12px;
  font-weight: 500;
  color: #fff;
`;

const TripInfo = styled(Text)`
  gap: 5px;
  opacity: 0.9;
  font-size: 14px;
`;

const Comment = styled(Text)`
  font-size: 14px;
  opacity: 0.6;
  line-height: 20px;
`;
