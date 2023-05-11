import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import vehiclePhoto from "../../assets/vehiclePhoto.jpg";
import { AntDesign } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Vehicle = ({ vehicle }) => {
  const [modalVisible, setModalVisible] = React.useState(false);

  let deviceWidth = Dimensions.get("window").width;

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  // console.log(deviceWidth);
  return (
    <Container>
      <VehiclePhoto activeOpacity={0.8} onPress={handleOpenModal}>
        {vehicle.photo === "" ? (
          <Illustration>
            <MaterialCommunityIcons
              name="car-hatchback"
              size={45}
              color="#d3d3d3"
            />
          </Illustration>
        ) : (
          <Photo source={require("../../assets/vehiclePhoto.jpg")} />
        )}
      </VehiclePhoto>

      <VehicleDetails>
        <Text>Brand:</Text>
        <Brand>{vehicle.brand}</Brand>
        <Text>Year:</Text>
        <Year>{vehicle.year}</Year>
        <Text>Color:</Text>
        <Color>{vehicle.color}</Color>
      </VehicleDetails>

      <Modal visible={modalVisible} transparent>
        <ModalContainer>
          <CloseModalButton activeOpacity={0.8} onPress={handleCloseModal}>
            <AntDesign name="close" size={30} color="white" />
          </CloseModalButton>
          <ModalImageWrapper>
            <ModalImage
              source={require("../../assets/vehiclePhoto.jpg")}
              w={`${deviceWidth}px`}
            />
          </ModalImageWrapper>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default Vehicle;

const Container = styled(View)`
  flex-direction: row;
  padding: 15px 30px;
  margin-top: 3px;
  background-color: white;
  gap: 15px;
`;

const VehiclePhoto = styled(TouchableOpacity)`
  position: relative;
`;

const Photo = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 8px;
`;

const Illustration = styled(View)`
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  border-color: #d3d3d3;
  border-width: 5px;
  border-style: dashed;
`;

const VehicleDetails = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  gap: 5px;
  align-self: center;
  align-items: center;
`;

const Font = styled(Text)`
  font-size: 16px;
  padding: 2px 10px;
  border-radius: 8px;

  background-color: #f4f4f4;
`;

const Brand = styled(Font)``;
const Year = styled(Font)``;
const Color = styled(Font)``;

const ModalContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.9);
`;

const CloseModalButton = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
`;

const ModalImageWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ModalImage = styled(Image)`
  width: ${(props) => props.w};
  height: 50%;
  /* height: ${`${(props) => props.w}px`}; */
`;
