import React from 'react';
import { StyleSheet,Image } from 'react-native';
import ImageOverlay from './ImageOverlay';

export default class Banner extends React.Component {
  render() {
    return (
      <Image source ={require('../img/fitdenim.jpg')}
          style={styles.banner} >

          <ImageOverlay 
            header ='-React Native -'
            paragraph='-e-commerce'/>


          </Image>
 
      
     
    );
  }
}

const styles = StyleSheet.create({
   banner:{
    width:'100%',
    alignItems: 'center',
    justifyContent:'center'
   }

});

