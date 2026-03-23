import House from "@/assets/icons/house-icon.svg";
import Meditate from "@/assets/icons/meditate-icon.svg";
import Sleep from "@/assets/icons/moon-icon.svg";
import Music from "@/assets/icons/music-icon.svg";
import Profile from "@/assets/icons/profile-icon.svg";
import { BaseText } from "@/components";
import { Colors } from "@/constants";
import { Tabs } from "expo-router";
import { View } from "react-native";

export default function TabsLayout() {
  const tabs = [
    {
      name: "home",
      title: "Home",
      icon: House,
    },
    {
      name: "sleep",
      title: "Sleep",
      icon: Sleep,
    },
    {
      name: "meditate",
      title: "Meditate",
      icon: Meditate,
    },
    {
      name: "music",
      title: "Music",
      icon: Music,
    },
    {
      name: "profile",
      title: "Profile",
      icon: Profile,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.primary,
        tabBarStyle: {
          height: 110,
          paddingBottom: 40,
          paddingTop: 15,
          paddingHorizontal: 15,
        },
        animation: "shift",
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            ...(tab.name === "music"
              ? { tabBarStyle: { display: "none" } }
              : {}),
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
          }}
        />
      ))}
    </Tabs>
  );
}
