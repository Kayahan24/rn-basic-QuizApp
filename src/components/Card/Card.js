import { Text, View,TouchableOpacity, Alert } from 'react-native'
import React, { Component } from 'react'
import styles from './Card.style'

const Card = (props) => {
    return (
      <View style={styles.container}>
        <Text style ={styles.title}> {props.title} </Text>
        <Text style = {styles.comment}>{props.comment}</Text>
        <TouchableOpacity style = {styles.button} onPress={()=>Alert.alert('This is alert')}>
           <Text style={styles.button_text}>I Liked </Text>
        </TouchableOpacity>
      </View>
    )
}
export default Card;
