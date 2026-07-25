import { /* Link, */ Redirect } from 'expo-router';
// import { View, Text } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return <Redirect href="/home" />;
  // return <Redirect href={'/products'} />;

  // return (
  //   <SafeAreaView>
  //     <View className="flex items-center justify-center">
  //       <Text className="font-montserrat-black text-primary text-3xl">Hello Friend...</Text>
  //       <Text className="font-montserrat-medium text-secondary-default text-2xl">
  //         Hello Friend...
  //       </Text>
  //       <Text className="font-montserrat-light text-secondary-200 text-xl ">Hello Friend...</Text>
  //       <Text className="font-montserrat-light text-secondary-100 text-lg">Hello Friend...</Text>
  //       <Text className="font-montserrat-light text-tertiary text-base">Hello Friend...</Text>

  //       <Link href="/products"> Ir a Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
