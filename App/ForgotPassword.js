import React ,{Component} from 'react';
import {Text,StyleSheet,View,TextInput,TouchableOpacity,Button,ToastAndroid} from 'react-native';


class ForgotPassword extends Component{
 static navigationOptions ={
        title:'Forgot Password?',
       
    }
 onPressButton(){
     ToastAndroid.show('Check your Mail to Reset your Password', ToastAndroid.SHORT);
     this.props.navigation.navigate("LoginScreen");
 }
	render(){
		return (
			 <View style={{flex:1,padding:10}}>
            <Text style={{margin:20}}>Please Provide Your Registered Email</Text>
                <TextInput 
            underlineColorAndroid='transparent'
            style={{height: 40,width: "100%", borderColor: '#3498DB', 
                    borderWidth: 1,color:"black",backgroundColor:"white",
                    borderRadius:10,marginBottom:20,padding:5
                    }} 
            placeholder = " Email"
            />
             <TextInput 
            underlineColorAndroid='transparent'
            style={{height: 40,width: "100%", borderColor: '#3498DB', 
                    borderWidth: 1,color:"black",backgroundColor:"white",
                    borderRadius:10,padding:5,marginBottom:40
                    }} 
            placeholder = " Mobile Number"
            keyboardType="numeric"
            maxLength={10}
            />
            <TouchableOpacity style={{marginBottom:10}}>
        
                    <Button 
                title="Send Me A Link" 
                style={{activeOpacity:0.2}}
                onPress={()=>{
                    this.onPressButton();
                    }}
                color = "#3498DB" />
        </TouchableOpacity>
            </View>

			);

	}

}
export default ForgotPassword;