import * as React from 'react';
import { Text, View, Button } from 'react-native';


class SoundButton extends React.Component {
   playSound = async () => {
  }

  render() {
    return (
      <Button title="Sound Button" color="red" onPress={this.playSound} />
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:200}}>
        <SoundButton />
      </View>
    );
  }
}


