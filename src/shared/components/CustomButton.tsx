import { Text, PressableProps, Pressable } from 'react-native';

interface Props extends PressableProps {
  children: string;
  color?: 'primary' | 'secondary' | 'tertiary';
  variant?: 'contained' | 'text-only';
  className?: string;
}

const CustomButton = ({
  children,
  color = 'primary',
  onPress,
  onLongPress,
  variant = 'contained',
  className,
}: Props) => {
  const btnColor = {
    primary: 'bg-primary',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
  }[color];

  const textColor = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    tertiary: 'text-tertiary',
  }[color];

  if (variant === 'text-only') {
    return (
      <Pressable className={`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress}>
        <Text className={`text-center ${textColor} font-montserrat-black`}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`rounded-md p-3 ${btnColor} active:opacity-90 ${className}`}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text className="font-montserrat-black text-center text-white">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
