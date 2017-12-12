import React, { Component } from 'react';
import { View, Text, Image,StyleSheet, TextInput } from 'react-native';


export default class LoginPage extends Component{
	render() {
    return (
    	<View style={styles.container}>
	    	<Image 
					source={require('./images/login_img_banner.png')}
					style={{width:360,height:257}}
				/>
				<View style={{flexDirection:'row',marginTop:30,paddingRight:24,paddingLeft:24,borderBottomWidth:1,bordorColor:'#000'}}>
					<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
						<Image 
							source={require('./images/login_icon_user.png')}
							style={{width:21,height:23}}
						/>
					</View>
					<View style={{flex:9}}>
						<TextInput 
							placeholder="请输入用户名"
							style={{height:40,bordor:'none'}}
						/>
					</View>
				</View>
			</View>
    );
  }
}

var styles = StyleSheet.create({
	container:{
		
	},

})