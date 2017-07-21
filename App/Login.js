import React from 'react';
import { StyleSheet, Text,Image, View,Button,TextInput,StatusBar,TouchableOpacity,Alert,TouchableHighlight} from 'react-native';
import H1 from './H1';

const DATA = [
    {name : "Chandu" ,age : 20},
    {name:"Ravi", age : 23},
    {name : "Hero" , age : 51}
];


export default class Login extends React.Component {
    static navigationOptions ={
        header:false
    }
    
    
    state = {
        name : "",
        counter :1,
        email:'',
        pasword:''
        
    }
    onPressForgotPassword(){
        this.props.navigation.navigate('ForgotPasswordScreen');
    }
     onChangedText(item){
        this.setState({Mail:item})
    }

    lol(){
        const arr = DATA.map((item)=>{
                return  <Text>{item.name} ,{item.age}</Text>;

        })
        return arr;
    }
    onPressLogin(){
        this.setState({name:'Loading...'});
         const {email, password} = this.state;fetch(`http://gamabetaalpha.com/ssim/login.php`,{
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
    onPressRegister(){
        this.props.navigation.navigate("RegisterScreen");
    }

  render() {
    return (
      <View style={{flex:1,padding:20,backgroundColor:'#F4F6F6',justifyContent:"center"}}>
        <StatusBar hidden/>
        <Text >{this.lol}</Text>
        <View style={{flex:1,justifyContent:"center",alignItems:"center",padding:10}}>
           <Image
            style={{}}
            source={require('./img/hello.png')}
                />
            <Text>{this.state.name}</Text>
         
        </View>
        
        <View style={{flex:2,alignItems:"center",justifyContent:"center"}}>
        
        <TextInput 
            underlineColorAndroid='transparent'
            style={{height: 40,width: "100%", borderColor: '#3498DB', 
                    borderWidth: 1,color:"black",backgroundColor:"white",
                    borderRadius:10,margin:10,padding:5
                    }} 
              value={this.state.email}
                                onChangeText={(value) => {
                                this.setState({email: value});
                                }}  
            placeholder = " Email"
            />
        
        <TextInput 
            underlineColorAndroid = 'transparent'
            style={{padding:5,height: 40,width: "100%", borderColor: '#3498DB',
                    borderWidth: 1,color:"black",backgroundColor:"white",borderRadius:10}}
            placeholder = " Password" secureTextEntry={true} 
            value={this.state.password}
                                onChangeText={(value) => {
                                this.setState({password: value});
                                }}
            />
 
          
        </View>
        <View style={{flex:2}}>
              
        <TouchableOpacity style={{marginBottom:10}} >
            <Button 
                title="Login" 
                style={{marginBottom:10}}
                onPress={()=>{
                    this.onPressLogin()
                    }}
                color = "#3498DB" />
                 
        </TouchableOpacity>
                <TouchableOpacity 
                
                  onPress={()=>{
                    this.onPressForgotPassword()
                    }}
                style={{marginBottom:10,backgroundColor:'transparent',padding:10,alignItems:'center',borderColor:'#3498DB',borderRadius:4}}>
        
                    <Text style={{color:'#3498DB'}}>Forgot Password?</Text>
               
        </TouchableOpacity>
                <TouchableOpacity style={{marginBottom:10}}>
        
                    <Button 
                title="Sign Up" 
                style={{activeOpacity:0.2}}
                onPress={()=>{
                    this.onPressRegister()
                    }}
                color = "#3498DB" />
        </TouchableOpacity>
            <View style={{justifyContent:'flex-end',alignItems:'center',opacity:0.5}}>
         <Text >CopyRights</Text>
            </View>
        
            
        
        </View>
       
      </View>
        
    );
  }
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


