import React, {Component} from 'react';
import {View, Text, TouchableOpacity,Dimensions} from 'react-native';

const dimension = Dimensions.get('window');

class Dashboard extends Component {
   onPressItem(){
       this.props.navigation.navigate("ListScreen");
   }
      static navigationOptions ={
        header:false
    }
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()
                    }}>
						<Text style={styles.text}>Menu 1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()}}>
						<Text style={styles.text}>Menu 2</Text>
					</TouchableOpacity>
				</View>
            <View style={styles.row}>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()}}>
						<Text style={styles.text}>Menu 1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()}}>
						<Text style={styles.text}>Menu 2</Text>
					</TouchableOpacity>
				</View>
            <View style={styles.row}>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()}}>
						<Text style={styles.text}>Menu 1</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.rowItem} onPress={()=>{
                    this.onPressItem()}}>
						<Text style={styles.text}>Menu 2</Text>
					</TouchableOpacity>
				</View>
			</View>
		);
	}
}

const styles = {
	container: {
        marginTop:20,
		flex: 1,
		padding: 10
        
	},
	row: {
		flexDirection: 'row',
        flex:1,
        margin:2
        
	},
	rowItem: {
        margin:10,
		flex: 1,
        width:(dimension.width-64)/2,
		height: (dimension.height-120)/3,
		backgroundColor: "#3498DB",
        shadowColor:'grey',
        justifyContent:'center',
        alignItems:'center'
	},
    text:{
        color:'white',
        fontSize:30
        
    }

}

export default Dashboard;