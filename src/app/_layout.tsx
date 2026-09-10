import { AuthProvider } from '@/context/PageContext';
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack screenOptions={{headerShown: false}}>
          {/* <Stack.Screen name="index" /> */}
          <Stack.Screen name="onboard" />
          <Stack.Screen name="detail" />
          {/* <Stack.Screen name="explore" /> */}
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
