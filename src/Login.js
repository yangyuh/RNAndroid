import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const LOGINURL = 'http://mt.lyrczs.gov.cn/center-pre-interface/';
const APIURL = 'http://mt.lyrczs.gov.cn/center-pre-interface/api/'
const IMGURL = 'http://mt.lyrczs.gov.cn/center-pre-interface/getattachment?path='


export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
		/** loginSubmit方法要绑定this指向 */
		this.loginSubmit = this.loginSubmit.bind(this);
	}
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={require('./images/login_img_banner.png')}
					style={{ width: 360, height: 257 }}
				/>
				{/* 输入控件 */}
				<View style={styles.inputContainer}>
					<View style={styles.inputRow}>
						<View style={styles.inputRowIcon}>
							<Image
								source={require('./images/login_icon_user.png')}
								style={{ width: 22, height: 24 }}
							/>
						</View>
						<View style={{ flex: 9 }}>
							<TextInput
								placeholder="请输入用户名"
								style={{ height: 40 }}
								underlineColorAndroid='transparent'
								onChangeText={(text) => this.setState({ username: text })}
							/>
						</View>
					</View>
					<View style={styles.inputRow}>
						<View style={styles.inputRowIcon}>
							<Image
								source={require('./images/login_icon_password.png')}
								style={{ width: 19, height: 23 }}
							/>
						</View>
						<View style={{ flex: 9 }}>
							<TextInput
								placeholder="请输入密码"
								style={{ height: 40 }}
								underlineColorAndroid="transparent"
								password={true}
								onChangeText={(text) => this.setState({ password: text })}
							/>
						</View>
					</View>
				</View>
				{/* 登录按钮 */}
				<TouchableOpacity
					style={styles.LoginBtn}
					onPress={this.loginSubmit}>
					<Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>登录</Text>
				</TouchableOpacity>
			</View>
		);
	}
	/** 登录提交 */
	loginSubmit() {
		console.log(this.state.username);
		console.log(this.state.password);
		// fetch(LOGINURL, { 
		// 	method: 'POST',
		// 	body: JSON.stringify({
		// 		username: this.state.username,
		// 		password: this.state.password  
		// 	})
		// }).then((response) => response.json())
		// 	.then((responseData) => {
		// 		console.log(responseData)
		// 	})
		// 	.catch((error) => {
		// 		console.error(error);
		// 	});
	}
}

var styles = StyleSheet.create({
	// 输入控件样式
	inputContainer: {
		paddingTop: 25,
		paddingLeft: 24,
		paddingRight: 24
	},
	inputRow: {
		flexDirection: 'row',
		marginTop: 5,
		borderBottomWidth: 1,
		borderColor: '#D8D8D8'
	},
	inputRowIcon: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	// 登录按钮
	LoginBtn: {
		marginTop: 80,
		width: 328,
		height: 44,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		backgroundColor: '#8AD65F',
		borderRadius: 22
	},
})