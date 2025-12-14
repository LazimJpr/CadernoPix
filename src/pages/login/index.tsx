import { View, Text, TextInput} from 'react-native';
import { useState } from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <View>
      <TextInput
      placeholder='E-mail'
      value={email}
      onChangeText={setEmail}
      />
    </View>
  )
}