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
    this.state = { date : 0 }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick(e){
    console.log(e.target)
    this.setState({
      date: this.state.date + 1
    })
  }
  render() {
    return (
      <View>
        <Pano 
          source={asset('360.png')}
        />
        <Text
          style={{
            backgroundColor: 'red',
            borderRadius: 50,
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
          {this.state.date}
        </Text>
        <View style={{ margin: 0.1, height: 30, backgroundColor: 'blue'}}>
          <Text style={{ fontSize: 2, textAlign: 'center'}}>Press Me!</Text>
        </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('MyVReact', () => MyVReact);
