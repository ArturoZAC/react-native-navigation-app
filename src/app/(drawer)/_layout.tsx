import CustomDrawer from '@/src/shared/components/CustomDrawer';
import { Ionicons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        overlayColor: 'rgba(0,0,0,0.4)',
        drawerActiveTintColor: 'purple',
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Tabs + Stack',
          title: 'Tabs + Stack',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="user/index"
        options={{
          drawerLabel: 'User Screen',
          title: 'User Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index"
        options={{
          drawerLabel: 'Schedule Screen',
          title: 'Schedule Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" color={color} size={size} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
