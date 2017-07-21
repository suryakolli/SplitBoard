import React ,{Component} from 'react';
import {Text,StyleSheet,View,TextInput,TouchableOpacity,Button,Image,KeyboardAvoidingView} from 'react-native';


class Register extends Component{
    state ={
            name: "Respond",
            counter: 1,
            email: "",
            password: ""
    }
    static navigationOptions ={
        title:'Sign Up'
    }
    
     componentDidMount(){
        
    }
    
    onPressLogin() {
    const {email, password} = this.state;
          
    this.setState({name: 'loading...'});
    fetch(`http://gamabetaalpha.com/ssim/register.php`,{
      method: "POST",
      body: JSON.stringify({
        email, 
          password
      })
    }).then(response => {
        return response.json();
    })
    .then(response => {
         if(response.status){
             this.setState({name:""});
             this.props.navigation.navigate('HomeScreen');
         }else{
                  this.setState({name: response.message});
         }
   
        
    }).catch((error)=>{this.setState({name: error.message})})
  }
    
	render(){
		return (
			<View style={{flex:1,padding:10}}>
                <View style={{flex:4,padding:10,justifyContent:'center'}}>
                    <TextInput 
                        underlineColorAndroid = 'transparent'
                        style={{padding:5,height: 40,width: "100%", borderColor: '#3498DB',
                                borderWidth: 1,color:"black",backgroundColor:"white",borderRadius:10,marginBottom:10}}
                        placeholder = "Full Name"
                        />
                    <TextInput
                        underlineColorAndroid='transparent'
                        style={{height: 40,width: "100%", borderColor: '#3498DB', 
                                borderWidth: 1,color:"black",backgroundColor:"white",
                                borderRadius:10,marginBottom:10,padding:5
                                }} 
                        placeholder = "Email"
                        value={this.state.email}
                                onChangeText={(value) => {
                                this.setState({email: value});
                                }}      
                        />

                    <TextInput 
                        underlineColorAndroid = 'transparent'
                        style={{padding:5,height: 40,width: "100%", borderColor: '#3498DB',
                                borderWidth: 1,color:"black",backgroundColor:"white",borderRadius:10,marginBottom:10}}
                        placeholder = "Password"
                        secureTextEntry={true}
                        value={this.state.password}
                                onChangeText={(value) => {
                                this.setState({password: value});
                                }}
                        />
            
                     <TextInput 
                        underlineColorAndroid = 'transparent'
                        style={{padding:5,height: 40,width: "100%", borderColor: '#3498DB',marginBottom:10,
                                borderWidth: 1,color:"black",backgroundColor:"white",borderRadius:10}}
                        placeholder = "Confirm Password"
                        secureTextEntry={true}/>
                    <TextInput 
                        underlineColorAndroid = 'transparent'
                        style={{padding:5,height: 40,width: "100%", borderColor: '#3498DB',
                                borderWidth: 1,color:"black",backgroundColor:"white",borderRadius:10,marginBottom:10}}
                        placeholder = " Mobile Number"
                        maxLength = {10}
                        />
                </View>
                <View style={{flex:2,padding:10}}>
                    <Button 
                        title="Sign Up" 
                        style={{activeOpacity:0.2}}
                        onPress={()=>{
                                this.onPressLogin();
                                }}
                        color = "#3498DB" />  
                            <Text>{this.state.name}</Text>
                </View>  
            </View>
			);

	}

}
export default Register;