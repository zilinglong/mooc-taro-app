import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './foodList.scss';
import AddCut from '../addcut/addcut';
class FoodList extends Component {
  render() {
    let { selectCata, currentList } = this.props;
    return (
      <View className="foodlist">
        <Text>{selectCata ? selectCata.name : ''}</Text>
        <View className="foodlist-forlist">
          {currentList.map((item, idx) => (
            <View key={idx} className="foodlist-item">
              <Image
                className="foodlist-item-img"
                src={require('../../assets/img/store.jpg')}
              />
              <View className="foodlist-item-info">
                <Text>{item.title}</Text>
                <Text>月售：{item.sole}</Text>
                <Text className="price">{item.price}元</Text>
                <AddCut food={item} />
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default FoodList;
