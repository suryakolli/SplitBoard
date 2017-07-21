import React ,{Component} from 'react';
import {Text,StyleSheet,View,ActivityIndicator,TouchableOpacity,ScrollView,Dimensions} from 'react-native';
const dimension = Dimensions.get('window');

class YouOwe extends Component{
    
 state = {
        list:[]
    }
  static navigationOptions ={
        title:'You Owe',
        header:false
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
                                    backgroundColor:'#FFFFFF',
                                    height:(dimension.height)/10,width:"100%",
                                    justifyContent:'center',
                                    paddingLeft:10,
                                    paddingRight:20}}>
                            <View style={{flexDirection:'row',justifyContent:'space-between'}}>            
                                <Text style={{color:'#000000',fontSize:20}}>
                                    {item.name}
                                </Text>
                                <Text style={{color:'#000000',fontSize:20}}>
                                    100
                                </Text>
                            </View>
                        </TouchableOpacity> 
                )}
        );
        return body;
    }
	render(){
        if(this.state.list.length == 0){
            return(
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator style={{}} size="large"/>
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
export default YouOwe;