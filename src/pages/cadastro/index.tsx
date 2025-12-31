import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { Button } from '../../components/Button';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');

  const validarPassword = (senha: string) => {
    setConfirmPassword(senha);
    if (password !== confirmPassword) {
      Alert.alert("As senhas não coincidem!");
      return false;
    }
    return true;
  }

  function validateAndProceed () {
    
  }

  const RenderFirstPage = () => {
    return (
      <View style={styles.welcome}>
        <Image
          source={require('../../assets/images/logo_white.png')}
          style={styles.logo}
        />
        <Text style={styles.cadastroTitle}>Faça seu cadastro para acessar app!</Text>
        <Text style={styles.cadastroSubTitle}>Preencha os campos abaixo com seus dados:</Text>
        <View style={styles.loginArea}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}

          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
          />
          <Button title={'Prosseguir'} activeOpacity={0.5} onPress={validateAndProceed}/>

        </View>
      </View>
    );
  }

  const RenderSecondPage = () => {
    return (
      <View style={styles.welcome}>
        <Image
          source={require('../../assets/images/logo_white.png')}
          style={styles.logo}
        />
        <Text style={styles.cadastroTitle}>Agora, para finalizarmos, crie sua senha!</Text>
        <View style={styles.loginArea}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={(txt) => validarPassword(txt)}

          />
          <TextInput
            style={styles.input}
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}

          />
          <Button title={'Concluir Cadastro'} activeOpacity={0.5} />

        </View>
      </View>
    );
  }

  const RenderPersonalData = () => {
    return (
      <View>

      </View>
    );
  }


  return (
    <View style={styles.container}>

        
      </View>
      <View style={styles.cadastreSe}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.cadastreSeText}>Clique aqui e faça o Login!</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}
