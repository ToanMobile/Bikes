import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  Dimensions
} from 'react-native';
import { Container } from 'native-base';
const { width, height } = Dimensions.get('window');
import top from '../../../assets/images/guide3_top.png'
import bottom from '../../../assets/images/guide3_bottom.png'
export default class Guide1 extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: 'white', alignItems:'center' }}>
        <Image
          resizeMode='contain'
          style={{ marginTop : height/7,  width, height: height/4 }}
          source={top} />
        <Text style={{ textAlign: 'center', marginRight: 30, marginLeft: 30,color: 'black', fontSize: 14}}>
        Scan QR code trên ổ khóa để mở khóa và di chuyển</Text>
        <Image 
        resizeMode='stretch'
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: height/2 , width}}
          source={bottom} />
      </Container>
    );
  }
}