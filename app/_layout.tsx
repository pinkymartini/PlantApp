// app/_layout.tsx
import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { loadOnboardedStatus, loadProPlanStatus } from '@/store/sessionSlice';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

function AppContent() {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();
  const { hasProPlan, hasOnboarded, isLoading } = useAppSelector((state) => state.session);
  
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    'Rubik-Regular': require('@/assets/fonts/Rubik-Regular.ttf'),
    'Rubik-Bold': require('@/assets/fonts/Rubik-Bold.ttf'),
    'Rubik-Medium': require('@/assets/fonts/Rubik-Medium.ttf'),
    'Rubik-Italic': require('@/assets/fonts/Rubik-Italic.ttf'),
  });

  //const [isOnboarded, setIsOnboarded] = useState<boolean | null>(null);

  useEffect(() => {
   
    //AsyncStorage.getItem('hasCompletedOnboarding').then(v => setIsOnboarded(v === 'true'));

    dispatch(loadProPlanStatus());
    
   
    dispatch(loadOnboardedStatus());
  }, [dispatch]);

  if (!loaded || isLoading) return null;

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false,}}>
        {hasOnboarded ? (
          <Stack.Screen name="(tabs)" />
        ) : (
          <Stack.Screen name="(onboarding)" />
        )}
      </Stack>
    </ThemeProvider>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}