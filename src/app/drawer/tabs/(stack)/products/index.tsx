import { products } from '@/src/modules/products/store/products.store';
import { Link } from 'expo-router';
import { View, Text, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProductsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1 px-4">
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: insets.bottom }}
        renderItem={({ item }) => (
          <View className="mb-4 rounded-md bg-gray-100 p-4">
            <Text className="font-montserrat-black text-2xl">{item.title}</Text>
            <Text>{item.description}</Text>

            <View className="mt-2 flex flex-row items-center justify-between">
              <Text className="font-montserrat-black text-lg">${item.price}</Text>
              <Link
                href={`/drawer/tabs/(stack)/products/${item.id}`}
                // <Link href={`/products/${item.id}`}
                className="font-montserrat-medium text-blue-500">
                Ver detalles
              </Link>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;
