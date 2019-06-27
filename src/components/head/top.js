import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './top.scss';
class Top extends Component {
  // <Image className="img" src={require("../../assets/img/left.png")} />
  render() {
    return (
      <View className="top">
        <View class="left">
          <Image className="img" src={require("../../assets/img/icon-head-back.png")} />
        </View>
        <View class="right">
          <Image className="img" src={require("../../assets/img/icon-head-search.png")} />
          <Image className="img" src={require("../../assets/img/icon-head-star.png")} />
          <Image className="img" src={require("../../assets/img/icon-head-tuan.png")} />
        </View>
      </View>
    );
  }
}

export default Top;
