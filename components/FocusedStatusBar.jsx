import { StatusBar } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { COLORS } from "../constants";

const FocusedStatusBar = () => {
   const isFocused = useIsFocused()

   return isFocused ? <StatusBar animated={true} backgroundColor={COLORS.blue} /> : null
};

export default FocusedStatusBar;