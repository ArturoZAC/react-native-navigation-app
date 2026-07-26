import CustomButton from '@/src/shared/components/CustomButton';
import { Link, router, useNavigation } from 'expo-router';
import { DrawerActions } from 'expo-router/build/react-navigation';
import { View /* Text */ } from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(() => DrawerActions.toggleDrawer());
  };

  return (
    // <View>
    <View className="p-10">
      <CustomButton color="primary" onPress={() => router.push('/products')}>
        Productos
      </CustomButton>

      <CustomButton className="mt-2" color="secondary" onPress={() => router.push('/profile')}>
        Profile
      </CustomButton>

      <CustomButton className="mt-2" color="tertiary" onPress={() => router.push('/settings')}>
        Settings
      </CustomButton>

      <Link href={'/products'} className="mt-2" asChild>
        <CustomButton color="primary" variant="text-only">
          Productos
        </CustomButton>
      </Link>

      <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>
    </View>
    // </View>
  );
};

export default HomeScreen;
