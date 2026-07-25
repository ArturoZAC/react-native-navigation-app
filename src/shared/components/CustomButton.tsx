import { Text, PressableProps, Pressable } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color: 'primary' | 'secondary' | 'tertiary';
}

const CustomButton = ({ children, color = 'primary', onPress, onLongPress }: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  return (
    <Pressable
      className={`rounded-md p-3 ${btnColor} active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text className="text-center text-white">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
