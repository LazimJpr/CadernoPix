import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  cadastroTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  cadastroSubTitle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  },
  loginArea: {
    width: '100%',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%', 
    alignItems: 'center',
    marginVertical: 30,
    gap: 20,
  },
  inputWrapper: {
    width: '100%',
    justifyContent: 'center',
    position: 'relative'
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  inputFull: {
    color: 'white',
    borderWidth: 0.7,
    borderColor: '#58c3a5',
    borderRadius: 25,
    width: '100%',
    height: 50,
    paddingHorizontal: 20,
  },
  errorText: {
    color: '#ff5b5b',
    fontSize: 12,
    marginLeft: 15,
    marginTop: 4,
  },
  input: {
    color: 'white',
    borderWidth: 0.7,
    borderColor: '#58c3a5',
    borderRadius: 25,
    width: '70%',
    height: 50,
    paddingHorizontal: 20,
  },
  logo: {
    resizeMode: 'contain',
    width: 120,
    height: 120,
    marginVertical: 15,
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
  footer: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;