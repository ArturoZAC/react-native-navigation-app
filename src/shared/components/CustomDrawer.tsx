import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from 'expo-router/drawer';
import { View, Text } from 'react-native';

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView scrollEnabled={false}>
      <View className="mx-3 mb-10 flex h-[150px] items-center justify-center rounded-xl bg-primary p-10">
        <View className="flex h-24 w-24 items-center justify-center rounded-full bg-white">
          <Text className="font-montserrat-black text-3xl text-primary">AZ</Text>
        </View>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
