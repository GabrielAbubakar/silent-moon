import { Tabs } from "expo-router";

export default function TabsLayout() {
  const tabs = [
    {
      name: "home",
      icon: "home",
    },
    {
      name: "meditate",
      icon: "meditate",
    },
    {
      name: "music",
      icon: "music",
    },
    {
      name: "profile",
      icon: "profile",
    },
    {
      name: "sleep",
      icon: "sleep",
    },
  ];

  return (
    <Tabs>
      {tabs.map((tab) => (
        <Tabs.Screen key={tab.name} name={tab.name} />
      ))}
    </Tabs>
  );
}
