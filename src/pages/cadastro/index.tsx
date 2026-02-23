import { View, Text, TextInput, Image, TouchableOpacity, Alert, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import styles from './styles';
import { Button } from '../../components/Button';
import { Icon } from 'react-native-elements';
import React from 'react';


export default function Cadastro(navigation: any) {
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [etapa, setEtapa] = useState(2);
  const [campoObrigatorio, setCampoObrigatorio] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  useEffect(() => {
  }, [etapa, email, telefone, name, cpf]);

  const validarPassword = (senha: string): boolean => {
    setConfirmPassword(senha);
    if (password !== confirmPassword) {
      setCampoObrigatorio('confirmPassword');
      return false;
    } else {
      setCampoObrigatorio('');
    }
    return true;
  }

  function validateAndProceed() {

  }

  const renderFirstPage = () => {
    return (
      <View style={styles.formContainer}>
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
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
          />

        </View>
        <Button title={'Prosseguir'} onPress={validateAndProceed} style={{ marginTop: 30 }} />

      </View>
    );
  }

  const renderSecondPage = () => {
    return (
      <View style={styles.loginArea}>
        <Text style={styles.cadastroTitle}>Agora, para finalizarmos, crie sua senha!</Text>
        <View style={styles.formContainer}>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputFull}
              placeholder="Senha"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <Pressable
              style={styles.iconContainer}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon
                name={showPassword ? 'eye-off' : 'eye'}
                type='feather'
                color='#58c3a5'
                size={20}
              />
            </Pressable>
            {campoObrigatorio === 'password' && (
              <Text style={styles.errorText}>É obrigatório preencher a senha!</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.inputFull}
              placeholder="Confirmar Senha"
              secureTextEntry={showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
            <Pressable
              style={styles.iconContainer}
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              <Icon
                name={showConfirmPassword ? 'eye-off' : 'eye'}
                type='feather'
                color='#58c3a5'
                size={20}
              />
            </Pressable>
            {campoObrigatorio === 'confirmPassword' && (
              <Text style={styles.errorText}>As senhas não coincidem!</Text>
            )}
          </View>

        </View>
        <Button title={'Finalizar Cadastro'} onPress={() => {
          if (validarPassword(confirmPassword)) {
            setEtapa(3);
          }
        }} />
      </View>
    );
  }

  const renderPage = () => {
    return (
      <>
        {etapa === 1 ? renderFirstPage() : renderSecondPage()}
      </>
    );
  }


  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo_white.png')}
        style={styles.logo}
      />

      {renderPage()}

      <View style={styles.footer}>
        <Text style={styles.text}>Já tem uma conta?</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <Text style={styles.cadastreSeText}>Clique aqui e faça o Login!</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
}
