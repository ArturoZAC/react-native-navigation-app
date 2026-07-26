import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer>
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User Screen',
          title: 'User Screen',
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule Screen',
          title: 'Schedule Screen',
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
