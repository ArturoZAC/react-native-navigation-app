import { Stack } from 'expo-router';

const StackLayout = () => {
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
