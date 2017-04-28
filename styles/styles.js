import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    borderBottomWidth: 0.5,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#F9F9F9'
  },
  title:{
    alignSelf: 'center',
    fontWeight: '600',
    fontSize: 25,
  },
  timer: {
    fontSize: 70,
    alignSelf:'center'
  },
  timerWrapper:{
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    flex: 1,
    alignItems:'flex-end'
  },
  top:{
    flex: 0,
  },
  bottom: {
    flex: 2,
    backgroundColor: '#F0EFF5',
    //justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center'
  },
  buttonWrapper: {
    flex:1,
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    //paddingTop: 30,
    //paddingBottom: 30,
    alignSelf: 'flex-start',
  },
  button: {
    flex:2,
    height: 70,
    width: 100,
    borderWidth: 5,
    flexDirection: 'column',
    //borderRadius: 90,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  runningWatch: {
    height: 40,
    width: 90,
    borderWidth: 3,
    borderRadius: 90,
    backgroundColor: 'red',
    //justifyContent: 'space-around',
    //alignItems: 'center',
    fontSize:20,
    //textAlign: 'center'
    alignSelf:'flex-start',
  },
  stopWatch: {
    height: 40,
    width: 90,
    borderWidth: 3,
    borderRadius: 90,
    backgroundColor: 'white',
    //justifyContent: 'space-around',
    //alignItems: 'center',
    fontSize:20,
    //textAlign: 'center'
    alignSelf:'flex-end',
  },
});
