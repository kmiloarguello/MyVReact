import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class MyVReact extends React.Component {
  constructor(props){
    super(props)
    this._handleClick = this._handleClick.bind(this)
  }
  _handleClick(){
    console.log("hola")
  }
  render() {
    return (
      <View>
        <Pano 
          source={asset('chess-world.jpg')}
        />
        <Text
          style={{
            backgroundColor: 'red',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 0, -3]}],
          }}
          onEnter={this._handleClick}
          >
          Camilo
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('MyVReact', () => MyVReact);
