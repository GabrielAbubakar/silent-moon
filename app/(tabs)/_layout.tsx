import { BaseText } from "@/components";
import { Colors, tabs } from "@/constants";
import { useAppContext } from "@/context/AppContext";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function TabsLayout() {
  const { hasSeenSleepWelcome } = useAppContext();

  return (
    <>
      <StatusBar style="dark" />
      <Tabs
        screenOptions={{
          headerShown: false,
          animation: "shift",
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ color, size, focused }) => {
                const Icon = tab.icon;
                return (
                  <View
                    style={{
                      backgroundColor: focused
                        ? Colors.light.primary
                        : "transparent",
                      borderRadius: 15,
                      paddingVertical: 17,
                      paddingHorizontal: 15,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      color={focused ? "white" : color}
                      width={21}
                      height={21}
                    />
                  </View>
                );
              },
              tabBarLabel: ({ color }: any) => {
                return (
                  <BaseText
                    style={{
                      color,
                      fontSize: 14,
                      marginTop: 10, // Creates a solid gap between the icon block and text
                    }}
                  >
                    {tab.title}
                  </BaseText>
                );
              },
              tabBarActiveTintColor:
                hasSeenSleepWelcome && tab.name === "sleep"
                  ? "#E6E7F2"
                  : Colors.light.primary,
              tabBarStyle: {
                display: tab.name === "music" ? "none" : "flex",
                borderTopColor: "transparent",
                height: 100,
                paddingBottom: 40,
                paddingTop: 15,
                paddingHorizontal: 15,
                backgroundColor:
                  hasSeenSleepWelcome && tab.name === "sleep"
                    ? Colors.dark.background
                    : "#fff",
              },
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
