import { Text, TouchableOpacity, TouchableOpacityProps} from 'react-native'
import styles from './styles.ts';
import { Pressable, PressableProps } from 'react-native-gesture-handler';

type Props = PressableProps & {
  title: string
}

export function Button({ title, ...rest } : Props) {
  return (
    <Pressable {...rest}  style={({pressed}) => [styles.button, { backgroundColor: pressed ? '#58c3a5c5' : '#58c3a5' }]}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}