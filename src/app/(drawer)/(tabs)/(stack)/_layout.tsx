import { Ionicons } from '@expo/vector-icons';
import { router, Stack, useNavigation } from 'expo-router';
import { DrawerActions /* StackActions  */ } from 'expo-router/build/react-navigation';

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    if (canGoBack) {
      // navigation.dispatch(StackActions.pop());
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: 'white',
        },
        headerTitleStyle: {
          fontFamily: 'Montserrat-Black',
        },

        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? 'arrow-back-outline' : 'grid-outline'}
            className="mr-2"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack)}
          />
        ),
      }}>
      <Stack.Screen
        name="home/index"
        options={{
          title: 'Stack Home',
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products Screen',
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Profile Screen',
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: 'Settings Screen',
        }}
      />

      <Stack.Screen
        name="products/[id]/index"
        options={{
          title: 'Product Detail',
        }}
      />
    </Stack>
  );
};

export default StackLayout;
