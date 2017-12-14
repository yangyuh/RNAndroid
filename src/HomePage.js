import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image
} from 'react-native';

import {
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import ChatScreen from './ChatScreen';
import MinePage from './MinePage';

class HomePage extends React.Component {

  static navigationOptions = {
    headerTitle: '首页',//设置标题内容
    headerBackTitle: null,
    headerStyle: {
      height: 45,
      backgroundColor: '#8AD65F'
    },
    headerTitleStyle: {
      color: '#fff',
      fontSize: 16,
      alignSelf: 'center'
    },
    headerRight: <Image 
      source={require('./images/home_navicon_search.png')} 
      style={{ width: 24, height: 24, marginRight: 16 }} 
    />,
    headerLeft: <Image 
      source={require('./images/home_navicon_saoma.png')} 
      style={{ width: 24, height: 24, marginLeft: 16 }} 
    />
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{ padding: 10 }}>Hello, Navigation!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Sybil' })}
          title="点击跳转" />
      </View>
    )
  }
}
/**
 * 底部导航组件
 */
const MainScreenNavigator = TabNavigator({
  Home: {
    screen: HomePage,
    navigationOptions: {
      tabBarLabel: '首页',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/home_tabicon_home.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  OrdorList: {
    screen: MinePage,
    navigationOptions: {  
      tabBarLabel: '订单',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/home_tabicon_dingd.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  MsgList: {
    screen: MinePage,
    navigationOptions: {
      tabBarLabel: '消息',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/home_tabicon_message.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
  Certificate: {
    screen: MinePage,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./images/home_tabicon_mine.png')}
          style={[{ tintColor: tintColor }, styles.icon]}
        />
      ),
    }
  },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 禁止左右滑动
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
      activeTintColor: '#8AD65F', // 文字和图片选中颜色
      inactiveTintColor: '#999', // 文字和图片默认颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: { height: 0 }, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
      style: {
        backgroundColor: '#EDEDED', // TabBar 背景色
        height: 55,
      },
      labelStyle: {
        fontSize: 12, // 文字大小
        marginTop: 0
      },
    },
  });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginTop: 0
  }
});

const SimpleApp = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});

export default SimpleApp;