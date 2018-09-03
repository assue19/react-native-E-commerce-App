import React from 'react';
import { StyleSheet,Image,View,Text } from 'react-native';
import CustomImage from  './CustomImage';

export default class ContentContainer extends React.Component {
  render() {
    return (
      
         <View style={styles.ContentContainer} >

           <View style={styles.col2} >
            <CustomImage Imagesource ={require('../img/men.jpg')}
               header ='shirts'
             />
               

         </View>
          <View style={styles.col1} >
            <CustomImage Imagesource ={require('../img/shoes.jpg')}
               header ='shoes'

             />


          </View>
           <View style={styles.ContentBanner} >
            <CustomImage Imagesource ={require('../img/suit.jpg')} 
               header ='men suit'

            />



           </View>


      </View>
 
      
     
    );
  }
}

const styles = StyleSheet.create({
   ContentContainer:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    padding:5,
    

   },
   col2:{
    flex:2,
    padding:5,
   },
    col1:{
    flex:1,
    padding:5,
   },
   ContentBanner:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
   }


});

