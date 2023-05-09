import React, { forwardRef } from "react";
import { View, Button, Text } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

const SettingsModal = forwardRef((props, ref) => {
  const closeBottomSheet = () => {
    props.onClose();
  };

  return (
    // <BottomSheetModal ref={ref} snapPoints={[300, 200, 0]} index={0}>
    <View style={{ padding: 16 }}>
      <Text>Hello from bottom sheet modal!</Text>
      <Button title="Close" onPress={closeBottomSheet} />
    </View>
    // </BottomSheetModal>
  );
});

export default SettingsModal;
