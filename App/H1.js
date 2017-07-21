import React ,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';


class H1 extends Component{

	render(){
		return (
			<Text style = {{...this.props.style}}> 
				{this.props.title}
			</Text>

			);

	}

}
export default H1;