import React ,{Component} from 'react';
import {Text,StyleSheet,View,TextInput,Button,TouchableOpacity,Picker,Alert} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';

class AddBill extends Component{
    state={
        bill:0,billView:0,
        description:"",
        choice : ""
    }
    static navigationOptions ={
        header:false
    }
     onChanged(item){
        this.setState({bill:item});
    }

    onChangedText(item){
        this.setState({description:item})
    }
    addBill(){
        
        let item=this.state.bill;
         if(this.state.choice == 'YT'){
            this.setState({bill:item}); 
             Alert.alert(
                  'Bill Details',
                  'Total Amount Entered ' + this.state.bill+"                               "+'Total Amount You owe: '+ item,
                  [
                    {text: 'Edit Bill', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => {this.props.navigation.navigate('YouOweScreen')}, style: 'cancel'},
                    {text: 'OK', onPress: () => {this.setState({description:""})}},
                  ],
                  { cancelable: false }
                )
             let temp =this.state.bill;
             this.setState({billView:temp});
             this.setState({bill:0});
        }else{
                item=item/2;
                this.setState({bill:item/2});
                Alert.alert(
                  'Bill Details',
                  'Total Amount Entered  : ' + this.state.bill+"                               "+ 'After Splitting you Owe: '+ item ,
                  [
                    {text: 'Edit Bill', onPress: () => console.log('Ask me later pressed')},
                    {text: 'Cancel', onPress: () => {this.props.navigation.navigate('YouOweScreen')}, style: 'cancel'},
                    {text: 'OK', onPress: () => {this.setState({description:""})}},
                  ],
                  { cancelable: false }
                )   
                 let temp =this.state.bill;
                 this.setState({billView:temp});
                 this.setState({bill:0});   
        }
      
    }
   
	render(){
        
		return (
            
			<View style={{flex:1,padding:10}}>
                <View style={{flex:2,padding:10,justifyContent:'space-around'}}>
                    <Picker
                      selectedValue={this.state.choice}
                      onValueChange={(itemValue, itemIndex) =>{
                                    this.setState({choice: itemValue}) } }>
                      <Picker.Item label="Paid By You and Split Equally" value="YS" />
                      <Picker.Item label="Paid By You Totally" value="YT" />
                    </Picker>
                    <TextInput 
                        underlineColorAndroid='transparent'
                        style={{height: 40,width: "100%", borderColor: '#3498DB', 
                                borderWidth: 1,color:"black",backgroundColor:"white",
                                borderRadius:10,paddingLeft:5,marginBottom:10,
                                }} 
                        onChangeText = {(item)=> this.onChanged(item)}
                        value = {this.state.bill}
                        keyboardType = 'numeric'
                        placeholder = " Enter the Amount"
                        maxLength = {10}
                        />
                    <TextInput 
                        underlineColorAndroid='transparent'
                        style={{height: 150,width: "100%", borderColor: '#3498DB', 
                                borderWidth: 1,color:"black",backgroundColor:"white",
                                borderRadius:10,paddingLeft:5,marginBottom:10
                                }}
                        onChangeText = {(item)=> this.onChangedText(item)}
                        value = {this.state.description}
                                 multiline={true}
                        placeholder = " Description"
                        maxLength={50}
                        />
                  
                       <Button 
                            title="Add Bill" 
                            style={{activeOpacity:0.2,width:'100%'}}
                            onPress={()=>{
                                this.addBill();
                                }}
                            color = "#3498DB" />
                              
                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    
                </View>
            </View>

			);

	}

}
export default AddBill;