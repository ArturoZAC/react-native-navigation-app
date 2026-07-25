import CustomButton from '@/src/shared/components/CustomButton';
import { Link, router } from 'expo-router';
import { View /* Text */ } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10">
        {/* <Text className="font-montserrat-black text-3xl">HomeScreen</Text>

        <Link className="mb-2" href="/products">
          Productos
        </Link> */}

        <Link href={'/products'} asChild>
          <CustomButton color="primary">Productos</CustomButton>
        </Link>

        <CustomButton className="mt-2" color="primary" onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        <CustomButton className="mt-2" variant="text-only" onPress={() => router.push('/products')}>
          Productos
        </CustomButton>

        {/* <CustomButton color="primary" onPress={() => router.push('/products')}>
          Productos
        </CustomButton> */}
        {/* <Link className="mb-2" href="/profile">
          Perfiles
        </Link>
        <Link className="mb-2" href="/settings">
          Configuración
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
