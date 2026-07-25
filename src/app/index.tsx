import { View, Text } from 'react-native';

const App = () => {
  return (
    <View className="flex items-center justify-center">
      <Text className="font-montserrat-black text-primary text-3xl">Hello Friend...</Text>
      <Text className="font-montserrat-medium text-secondary-default text-2xl">
        Hello Friend...
      </Text>
      <Text className="font-montserrat-light text-secondary-200 text-xl ">Hello Friend...</Text>
      <Text className="font-montserrat-light text-secondary-100 text-lg">Hello Friend...</Text>
      <Text className="font-montserrat-light text-tertiary text-base">Hello Friend...</Text>
    </View>
  );
};

export default App;
