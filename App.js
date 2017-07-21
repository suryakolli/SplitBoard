import Dashboard from './App/Dashboard';
import Login from './App/Login';
import List from './App/List';
import Register from './App/Register';
import Profile from './App/Profile';
import ForgotPassword from './App/ForgotPassword';
import YouOwe from './App/YouOwe';
import YouAreOwed from './App/YouAreOwed';
import {TabNavigator,StackNavigator} from 'react-navigation';
import AddBill from './App/AddBill';


const TabRouter = TabNavigator({
  YouOweScreen: {
    screen: YouOwe,
    navigationOptions: {
      tabBarLabel: 'You Owe',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
                               
  YouAreOwedScreen: {
    screen: YouAreOwed,
    navigationOptions: {
      tabBarLabel: 'You are Owed',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    },
  },
   AddBillScreen:{
     screen: AddBill,
      navigationOptions: {
      tabBarLabel: 'Add Bill',
      tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
    }    
  }
});

const Router = StackNavigator({
    LoginScreen:{screen:Login},
    HomeScreen:{screen:TabRouter} ,
     ListScreen:{screen:List},
    RegisterScreen:{screen:Register},
    ProfileScreen:{screen:Profile},
    ForgotPasswordScreen:{screen:ForgotPassword},
      YouOweScreen: {
    screen: YouOwe,
    navigationOptions: {
      title: 'YouOwe',
    },
  },
   
});







export default Router;