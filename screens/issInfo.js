import * as React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, ImageBackground, Image, Alert, Platform, SafeAreaView} from 'react-native'
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios'

export default class ISSInfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            location:{}
        }
    }
    getISSLocation = () => {
        axios
        .get("https://api.wheretheiss.at/v1/satellites/25544.")
        .then(response => {
            this.setState({
                location:response.data
            })
        })
        .catch(error => {
            Alert.alert(error.message)
        })
    }
    componentDidMount(){
        this.getISSLocation()
        try{
            setInterval(async() => {
                this.getISSLocation()
            },5000)}
            catch(e){
                console.log(e);
            }
    }

    render(){
        if(Object.keys(this.state.location).length===0){
            return(
            <View style= {{flex:1,justifyContent:"center"        }}>
                <Text>Location</Text>
            </View>
        )
    }
    else{
        return(
            <View style={styles.infoContainer}>
            <Text style={styles.infoText}> Latitude: {this.state.location.latitude} </Text>
            <Text style={styles.infoText}> Longitude: {this.state.location.longitude} </Text>
            <Text style={styles.infoText}> Altitude (KM): {this.state.location.altitude} </Text>
            <Text style={styles.infoText}> Velocity (KM/H): {this.state.location.velocity} </Text>
        </View>
        )
    }
}
}