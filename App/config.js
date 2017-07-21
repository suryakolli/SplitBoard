import React ,{Component} from 'react';
import {Text} from 'react-native';


class H1 extends Component{

	render(){
		return (
			<Text style = {{fontSize:50}}>
				(this.props.children)
			</Text>

			);

	}

}
export default H1;