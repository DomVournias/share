import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

const GREEN = "#4aa54a";
const LEAF = "#a5d631";
const YELLOW = "#f8e94b";
const ORANGE = "#f7a521";
const RED = "#ef3a10";

const RatingLines = ({ ratings }) => {
  const titles = Object.keys(ratings[0]).filter((title) => title !== "overall");
  const averages = titles.reduce((acc, title) => {
    const sum = ratings.reduce((total, obj) => total + obj[title], 0);
    const avg = sum / ratings.length;
    return { ...acc, [title]: avg };
  }, {});

  const values = Object.values(averages);

  const getColor = (value) => {
    if (value <= 1.5) {
      return RED;
    } else if (value <= 2.5) {
      return ORANGE;
    } else if (value <= 3.5) {
      return YELLOW;
    } else if (value <= 4) {
      return LEAF;
    } else {
      return GREEN;
    }
  };

  // console.log("RATING LINES", averages);
  return (
    <Container>
      <Titles>
        {titles.map((title) => (
          <Title key={title}>{title}</Title>
        ))}
      </Titles>
      <Lines>
        {values.map((value, index) => (
          <Line key={index}>
            <Front percent={`${value * 20}%`} color={getColor(value)}></Front>
          </Line>
        ))}
      </Lines>
    </Container>
  );
};

export default RatingLines;

const Container = styled(View)`
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Titles = styled(View)`
  gap: 2px;
  width: 30%;
`;

const Title = styled(Text)`
  text-transform: capitalize;
  opacity: 0.6;
  font-size: 13.3px;
`;

const Lines = styled(View)`
  flex-direction: column;
  justify-content: space-evenly;
  gap: 10px;
  width: 70%;
  /* background-color: pink; */
`;

const Line = styled(View)`
  position: relative;
  height: 5px;
  background-color: rgba(189, 195, 199, 0.5);
  border-radius: 10px;
`;

const Front = styled(View)`
  height: 5px;
  border-radius: 10px;
  width: ${(props) => props.percent};
  background-color: ${(props) => props.color};
`;

const Back = styled(View)``;
