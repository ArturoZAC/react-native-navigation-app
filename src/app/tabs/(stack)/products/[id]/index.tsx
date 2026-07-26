// import { useLocalSearchParams } from 'expo-router';
import { products } from '@/src/modules/products/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

const ProductScreen = () => {
  // const { id } = useLocalSearchParams<{ id: string }>();

  const { id } = useLocalSearchParams();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <Redirect href={'/'} />;
  }

  return (
    <View className="mt-2 px-5">
      <Text className="font-montserrat-black text-2xl">{product.title}</Text>
      <Text className="">{product.description}</Text>
      <Text className="font-montserrat-black">{product.price}</Text>
    </View>
  );
};

export default ProductScreen;
