/*
Name: Jony Roy
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
import {styles} from './styles/styles';

export class abc extends Component {
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
    /*
      Reading Document about bind
      http://egorsmirnov.me/2015/08/16/react-and-es6-part3.html
    */
  }



startStopButton(){
  //this also valid statement
  //this.startPress = this.handleStartPress.bind(this);
  return(
  //  const style = this.state.running ? styles.runningWatch : styles.stopWatch;
    <View style={styles.buttonWrapper}>
    <TouchableHighlight underlayColor='red' onPress={this.startPress} >
       <Text>
         {this.state.running? 'STOP': 'START'}
       </Text>
    </TouchableHighlight>
    <TouchableHighlight  underlayColor='red' onPress={this.resetPress.bind(this)} style={styles.button}>
      <Text style={{fontSize:20}}>RESET</Text>
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
    //this.setState({timer:this.state.timer + this.state.timeElapsed});
    clearInterval(this.interval);
    this.setState({timer:this.state.timer2});

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
     },100);
  }

  appsTitle(){
    return(
      <View style={styles.header}>
         <Text style={styles.title}>Stopwatch</Text>
      </View>
    );
  }

  render(){
    return (
      <View style={styles.container}>
          <View style={styles.top}>
              {this.appsTitle()}
          </View>
          <View style={styles.timerWrapper}>
             <Text style={styles.timer}>
                {FormatTime(this.state.timer2)}{'\n'}
                {this.state.totalElapsedTime+this.state.timeElapsed}
             </Text>
          </View>
          <View style={styles.bottom}>
              {this.startStopButton()}
          </View>

      </View>
    );
  }
}

AppRegistry.registerComponent('abc', () => abc);
