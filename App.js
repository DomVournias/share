import "react-native-reanimated";
import "react-native-gesture-handler";

import AppNavigationContainer from "navigation/AppNavigationContainer";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import ContextProviders from "context/Providers";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <ContextProviders>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <AppNavigationContainer />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ContextProviders>
  );
}
