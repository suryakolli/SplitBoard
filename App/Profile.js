import React, {Component} from 'react';
import {View, Text,ActivityIndicator,Image} from 'react-native';

class Profile extends Component {
     static navigationOptions ={
        title:'Profile'
    }
	state = {
		name: "",
        loader:false
	}
	componentDidMount() {
        const id = this.props.navigation.state.params.userId;
		fetch('https://jsonplaceholder.typicode.com/users/' + id,{
			method: "GET"
		}).then((response) => {
			return response.json()
		}).then((response) => {
			// response.data
			this.setState({
				name: response.name,         
			});
		})
        this.state.loader =true; 
        
	}

	render() {
        if(this.state.loader == false){
                return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator style={{}}size="large"/>
                </View>
            );
        }
		return (
			<View style={{flex:1,alignItems:'center',justifyContent:'center'}} >
                
                <Text style={{fontSize:30}}>
				    {this.state.name} 
				</Text>	
            <Image
            style={{}}
            source={require('./img/user.png')}
                />
			</View>
		);
	}
}

export default Profile;