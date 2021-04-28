import React from "react";
import { StyleSheet, Text, View,TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {TextInput} from 'react-native-gesture-handler'
import {Header} from 'react-native-elements'
import db from '..config'
import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      author : '',
      title : '',
      story : '',
    }

    submitStory = async()=>{
      db.collection("stories").add({
        'author' : this.state.author,
        'title' : this.state.title,
        'story' : this.state.story
      })
      
      ToastAndroid.show("Story Submitted",ToastAndroid.SHORT)}
    }

    render(){
        return(
            <View>
                <Header
                backgroundColor={'#00edb1'}
                centerComponent={{
                    text: 'Story Hub',
                    style: { color:'#4a3135',
                fontsize:20 },
                }} />   

            <View style={styles.inputView}>
            <KeyboardAvoidingView behaviour="padding" enabled> 
                <TextInput
                onChangeText={text => this.state.author(text)}
                style={styles.inputBox}
                placeholder="Author"
                 />
                 </KeyboardAvoidingView>
            </View>

            <View style={styles.inputView}>
                <TextInput
                onChangeText={text => this.state.title(text)}
                style={styles.inputBox}
                placeholder="Title"
                 />
            </View>

            <View style={styles.inputView}>
                 <TextInput
                 onChangeText={text => this.state.story(text)}
                style={styles.inputStoryBox}
                multiline={true}
                placeholder="Write your story"
                 />
            </View>

            <View>     
                 <TouchableOpacity 
                 style={styles.submitButton}
                 onPress={this.submitStory}>
                     <Text style={styles.buttonText}>Submit</Text>
                 </TouchableOpacity>
            </View>     
            </View>
        )
    }
}

const styles = StyleSheet.create({
      buttonText: {
        fontSize: 20,
      },
      inputView: {
        flexDirection: 'row',
        margin: 20
      },
      inputBox: {
        width: 200,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20
      },
      inputStoryBox: {
        width: 300,
        height: 500,
        borderWidth: 1.5,
        borderRightWidth: 1.5,
        fontSize: 20
      },
      submitButton: {
        backgroundColor: '#66BB6A',
        width: 100,
        borderWidth: 1.5,
        borderLeftWidth: 1.5,
        alignSelf: 'center',
        textAlign: 'center',
      }    
})