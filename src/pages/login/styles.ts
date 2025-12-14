import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  welcome: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 25,
    width: '60%',
    height: 50,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#01a8af',
  },
});

export default styles;