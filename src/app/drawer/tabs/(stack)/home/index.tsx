import CustomButton from '@/src/shared/components/CustomButton';
import { Link, router } from 'expo-router';
import { View /* Text */ } from 'react-native';

const HomeScreen = () => {
  return (
    // <View>
    <View className="p-10">
      <CustomButton color="primary" onPress={() => router.push('/drawer/tabs/(stack)/products')}>
        Productos
      </CustomButton>

      <CustomButton
        className="mt-2"
        color="secondary"
        onPress={() => router.push('/drawer/tabs/(stack)/profile')}>
        Profile
      </CustomButton>

      <CustomButton
        className="mt-2"
        color="tertiary"
        onPress={() => router.push('/drawer/tabs/(stack)/settings')}>
        Settings
      </CustomButton>

      <Link href={'/drawer/tabs/(stack)/products'} className="mt-2" asChild>
        <CustomButton color="primary" variant="text-only">
          Productos
        </CustomButton>
      </Link>
    </View>
    // </View>
  );
};

export default HomeScreen;
