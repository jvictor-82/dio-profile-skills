import { NavigationContainer } from "@react-navigation/native";
import { TabNavigatorRoutes } from "./tab-navigation.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabNavigatorRoutes />
    </NavigationContainer>
  );
}
