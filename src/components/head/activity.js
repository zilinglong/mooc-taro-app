import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './activity.scss';
class Activity extends Component {
  constructor() {
    super();
    this.state = {
      activity: [
        {
          type: 'cut',
          info: [
            { total: 48, cut: 10 },
            { total: 58, cut: 20 },
            { total: 108, cut: 30 }
          ]
        }
      ]
    };
  }
  getTextByType(type) {
    let value = '';
    switch (type) {
      case 'cut':
        value = '减';
        break;
      default:
        value = '减';
    }
    return value;
  }
  getLine(arr) {
    return arr.map((item, idx) => `满${item.total}减${item.cut}`).join(';');
  }
  render() {
    let { activity: [firstItem] } = this.state;
    return (
      <View className="activity">
        <Text className="type">{this.getTextByType(firstItem.type)}</Text>
        <Text>{this.getLine(firstItem.info)}</Text>
        <Text className="length">{this.state.activity.length}个活动</Text>
      </View>
    );
  }
}

export default Activity;
