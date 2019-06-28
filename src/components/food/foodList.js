import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './foodList.scss';
class FoodList extends Component {
  render() {
    return (
      <View className="FoodList">
        FoodList.this.props: {this.props.name}
      </View>
    );
  }
}

export default FoodList;
