import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "../screen/ProfileScreen";
import SkillsScreen from "../screen/SkillsScreen";

import { MaterialIcons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

export function TabNavigatorRoutes() {
  return (
    <Navigator>
      <Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="skills"
        component={SkillsScreen}
        options={{
          title: "Habilidades",
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
