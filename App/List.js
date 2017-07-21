import React ,{Component} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,ActivityIndicator,ScrollView,Dimensions} from 'react-native';

const dimension = Dimensions.get('window');
class List extends Component{
    state = {
        list:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users',{method:'GET'})
            .then((response) =>{
                return response.json()})
            .then((response)=>{
            this.setState({list:response}) ;
        });
    }
    renderItems(){
        const body = this.state.list.map(
                (item) =>{
                    return(
                        <TouchableOpacity 
                            key={item.id}
                            onPress={()=>{this.props.navigation.navigate('ProfileScreen',                        {userId:item.id})}}
                            style={{marginBottom:3,
                                    flex:1,
                                    backgroundColor:'#3498FB',
                                    height:(dimension.height)/10,width:"100%",
                                    justifyContent:'center',
                                    paddingLeft:10}}>
                            <Text style={{color:'white',fontSize:20}}>{item.name}</Text>
                           </TouchableOpacity>);
                }
        )
        return body;
    }
	render(){
        if(this.state.list.length == 0){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator style={{}}size="large"/>
                </View>
            );
        }
		return (
            <ScrollView style={{flex:1,padding:5}}>
                {this.renderItems()}
            </ScrollView>
			);
	}
}
export default List;