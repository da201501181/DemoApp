import { createStackNavigator } from "react-navigation";

import IntroScreen from "../src/screen/introScreen/IntroScreen";
import PersonalInfoScreen from "../src/screen/personalInfoScreen//PersonalInfoScreen";

// Routing details
const RootStack = createStackNavigator(
  {
    intro: {
      screen: IntroScreen
    },
    personalInfo: {
      screen: PersonalInfoScreen
    }
  },
  {
    headerMode: "none"
  }
);

export default RootStack;
