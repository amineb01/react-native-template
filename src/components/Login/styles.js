import { StyleSheet } from 'react-native';
import Colors from 'helpers/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  formContainer: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: Colors.gray,
    marginHorizontal: 40,
    padding: 20,
  },
  btnContainer: {
    alignSelf: 'stretch',
    alignItems: 'center',
    alignContent: 'space-between',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
  backgroundColor: Colors.gray,
  width: '40%',
  height: 40
  }
});

export default styles;
