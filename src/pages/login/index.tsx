import { View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { Button } from '../../components/Button';

export default function Login(navigation: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.welcome}>
        <Image
          source={require('../../assets/images/logo_white.png')}
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>Seja Bem - Vindo (a)</Text>
        <Text style={styles.welcomeText}>ao Caderno Pix!</Text>
      </View>

      <View style={styles.loginArea}>
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}

        />
        <Button title={'Entrar'} activeOpacity={0.5} />
      </View>
      <View style={styles.cadastreSe}>
        <Text style={styles.text}>Não tem uma conta?</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.cadastreSeText}>Clique aqui e cadastre-se!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
