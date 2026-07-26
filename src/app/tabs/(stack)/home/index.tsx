import CustomButton from '@/src/shared/components/CustomButton';
import { Link, router } from 'expo-router';
import { View /* Text */ } from 'react-native';

const HomeScreen = () => {
  return (
    // <View>
    <View className="px-10">
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
    </View>
    // </View>
  );
};

export default HomeScreen;
