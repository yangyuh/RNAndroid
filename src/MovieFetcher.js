import React, {Component,} from 'react';
import {AppRegistry,Image,StyleSheet,Text,View,FlatList} from 'react-native';

var REQUEST_URL = 'https://route.showapi.com/578-1?showapi_appid=51936&showapi_test_draft=false&showapi_sign=EDCEAA2D44490A5C7C106DC064AD0918';
 
export default class HelloWorldApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      loaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
  }
  /**组件刚加载完成的时候调用一次，以后不会再被调用*/
  componentDidMount() {
    this.fetchData();
  }
  /**获取数据*/
  fetchData() {
    console.log(1111)
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((responseData) => {
        for(var i in responseData.showapi_res_body.datalist){
          responseData.showapi_res_body.datalist[i].thumbnail = 'http://i.imgur.com/UePbdph.jpg'
        }
        console.log(responseData.showapi_res_body.datalist)

        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.showapi_res_body.datalist),
          loaded: true,
        });  
      });
  }
  render() {
    if(!this.state.loaded){
      return this.renderLoadingView();
    } 
    return(
      <FlatList
        data={this.state.data}
        renderItem={this.renderMovie}
        style={styles.list}
      />
    )
  }
  /**渲染列表*/
  renderMovie(movie){
    console.log(movie) 
    return (
      <View style={styles.container}>
        <Image
          source={{uri: movie.item.thumbnail}}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{movie.item.MovieName}</Text>
          <Text style={styles.year}>{movie.item.WomIndex}</Text>
        </View>
      </View>
      
    );
  }
  /**加载中*/
  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>
          正在加载电影数据……
        </Text>
      </View>
    );
  } 
}

/**样式表*/
var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  year: {
    textAlign: 'center',
  },
  list: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});