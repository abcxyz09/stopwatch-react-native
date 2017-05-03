/*
AppsName: Stopwatch
Author: Jony Roy
Email: jonyroyice@gmail.com
github: github.com/abcxyz09
*/
import React, { Component } from 'react';
import { AppRegistry,
         StyleSheet,
         Text,
         View,
         Image,
         TextInput,
         TouchableHighlight,
         ListView,
        } from 'react-native';
import FormatTime from 'minutes-seconds-milliseconds';

export class stopwatch extends Component {
  constructor(props){
    super(props);
    this.state={
        timeElapsed: null,
        startTime: null,
        running: false,
        flag: false,
        timer: null,
        timer2: null,
        totalElapsedTime:null,
      };
    this.startPress = this.handleStartPress.bind(this);
    this.resetPress=this.resetPress.bind(this);
  }



startStopButton(){
  return(
    <View style={{flexDirection: 'row',justifyContent: 'space-around',paddingTop: 0,paddingBottom: 0,}}>
      <TouchableHighlight underlayColor='red' onPress={this.startPress} style={styles.button}>
        <View>
          <Text style={{fontSize:20,textAlign:'center'}}>
            {this.state.running? 'STOP': 'START'}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight  underlayColor='red' onPress={this.resetPress} style={styles.button}>
        <View>
          <Text style={{fontSize:20}}>RESET</Text>
        </View>
      </TouchableHighlight>
  </View>
  );
}

resetPress() {
  clearInterval(this.interval);
  this.setState({timeElapsed:null,running:false,flag:false,timer:null,timer2:null});
}


handleStartPress() {
  if(this.state.running) {
    this.setState({timer:this.state.timer2});
    clearInterval(this.interval);


    this.setState({running: false,flag:true});
    return;
}

  this.setState({startTime: new Date(),
    totalElapsedTime:this.state.totalElapsedTime + this.state.timeElapsed});
  this.setState({flag: true});
  this.interval = setInterval(() => {
          this.setState({
          timeElapsed: new Date() - this.state.startTime,
          timer2: this.state.timer + this.state.timeElapsed,
          running: true });
     },80);
  }

  appsTitle(){
    return(
      <View style={{borderBottomWidth: 0.5,paddingTop: 10,paddingBottom: 0,backgroundColor: '#F9F9F9'}}>
         <Text style={{alignSelf: 'center',fontWeight: '600',fontSize: 25,}}>Stopwatch</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={{flex:1,justifyContent:'space-between'}}>
          <View style={{flex:1}}>
              {this.appsTitle()}
          </View>
          <View style={{flex: 1,backgroundColor: '#FFFFFF',justifyContent: 'center',alignItems:'flex-end'}}>
             <Text style={{fontSize: 70,alignSelf:'center'}}>
                {FormatTime(this.state.timer2)}{'\n'}
             </Text>
          </View>
          <View style={{flex:1}} >
              {this.startStopButton()}
          </View>
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  button: {
    height: 100,
    width: 100,
    paddingRight:10,
    borderWidth: 2,
    flexDirection: 'row',
    borderRadius: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
AppRegistry.registerComponent('stopwatch', () => stopwatch);
