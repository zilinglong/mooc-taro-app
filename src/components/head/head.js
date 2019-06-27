import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Top from './top';
import './head.scss';
import Activity from './activity';
class Head extends Component {
  constructor() {
    super();
    this.state = {
      store: {
        title: '川香居',
        notice: '欢迎光临，很高兴为您服务~',
        tags: ['味道赞', '主食真好', '分量足']
      }
    };
  }
  render() {
    const { store } = this.state;
    return (
      <View className="head">
        <Top />
        <Image
          className="back"
          src={require('../../assets/img/bg-head-bg.jpg')}
        />
        <View className="store">
          <Image
            className="store-img"
            src={require('../../assets/img/bg-head-bg.jpg')}
          />
          <View className="store-text">
            <Text>{store.title}</Text>
            <Text>{store.notice}</Text>
            <View>
              {store.tags.map((item, idx) => (
                <Text className="tags-text" key={idx}>
                  {item}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <Activity />
      </View>
    );
  }
}

export default Head;
