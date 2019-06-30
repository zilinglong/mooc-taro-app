import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './bottom.scss';
import { getAllFoodInfo, getEvent } from '../../utils/common';
let events = getEvent();
class Bottom extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      num: 0,
      sendPrice: 2,
      supportTakeBySelf: true,
      sendMustPrice: 20, // 满多少钱起送
      allPrice: 0
    };
  }
  componentDidMount() {
    // 要获取整体的存储的菜品数据，进行计算
    // 获取计算好的，设置给state
    let { allPrice, allNum } = getAllFoodInfo();
    this.setState({
      allPrice,
      num: allNum
    });
    events.on('addcut', () => {
      // 菜品发生变化
      let { allPrice, allNum } = getAllFoodInfo();
      this.setState({
        allPrice,
        num: allNum
      });
    });
  }

  render() {
    const {
      num,
      sendPrice,
      supportTakeBySelf,
      sendMustPrice,
      allPrice
    } = this.state;
    return (
      <View className="bottom">
        <View className="bottom-body">
          {num ? <Text className="num">{num}</Text> : ''}
          <Image
            className="store-img"
            src={
              num > 0 ? (
                require('../../assets/img/foodstore.png')
              ) : (
                require('../../assets/img/emptystore.png')
              )
            }
          />
          <View className="info">
            {allPrice ? (
              <Text className="price">{allPrice}</Text>
            ) : (
              <Text>{sendPrice ? `另需配送费${sendPrice}元 ` : ''}</Text>
            )}
            <Text>{supportTakeBySelf ? '| 支持自取' : '| 不支持自取'}</Text>
          </View>
          <View className="submit">
            {allPrice >= sendMustPrice ? (
              <Text className="go-pay">去结算</Text>
            ) : (
              <Text>{sendMustPrice ? `${sendMustPrice}元起送` : ''}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }
}

export default Bottom;
