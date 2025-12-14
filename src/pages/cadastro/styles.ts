import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  welcomeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
  },
  loginArea: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },
  input: {
    color: 'white',
    borderWidth: 1,
    borderColor: '#58c3a5',
    borderRadius: 25,
    width: '70%',
    height: 50,
    paddingHorizontal: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
  cadastreSe: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastreSeText: {
    color: '#58c3a5',
  },
});

export default styles;