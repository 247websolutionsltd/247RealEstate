import {
  Dimensions,
  Pressable,
  View
} from "react-native";

import { useTheme } from "@/hooks/use-theme";
import { useStyles } from "@/styles/styles";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

type IconName = keyof typeof Ionicons.glyphMap;
const TAB_META: Record<string, { label: string; icon: IconName; iconActive: IconName }> = {
  home: { label: "Home", icon: "home-outline", iconActive: "home" },
  categories: { label: "Categories", icon: "apps-outline", iconActive: "apps" },
  search: { label: "Search", icon: "search-outline", iconActive: "search" },
  saved: { label: "Saved", icon: "bookmark-outline", iconActive: "bookmark" },
  profile: { label: "Profile", icon: "person-outline", iconActive: "person" },
};

interface TabBarRoute {
  key: string;
  name: string;
}

interface TabBarProps {
  state: { index: number; routes: TabBarRoute[] };
  navigation: { navigate: (name: string) => void };
}

function CustomTabBar({ state, navigation }: TabBarProps) {
    const styles = useStyles();
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const routes = state.routes;

  function renderTab(route: TabBarRoute) {
    const meta = TAB_META[route.name];
    if (!meta) return null;
    const isFocused = state.routes[state.index]?.key === route.key;

    return (
      <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
            accessibilityRole="button"
            accessibilityLabel={meta.label}
            accessibilityState={{ selected: isFocused }}
        >
            {/* Active purple circle */}
            {isFocused && (
            <View style={styles.activeIndicator} />
            )}

            <Ionicons
                name={isFocused ? meta.iconActive : meta.icon}
                size={24}
                color="#FFFFFF"
            />
        </Pressable>
    );
  }

  return (
    <SafeAreaView style={styles.tabBarContainer}>
      <View style={styles.navBar}>
      {routes.map(renderTab)}
      </View>
    </SafeAreaView>
  );
}

export default function TabsLayout() {
  return (
    <Tabs tabBar={(props) => <CustomTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="search" options={{ title: "Search" }} />
      <Tabs.Screen name="categories" options={{ title: "Categories" }} />
      <Tabs.Screen name="saved" options={{ title: "Saved" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}