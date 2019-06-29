import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './addcut.scss';
import { getFoodCount, setFoodCount } from '../../utils/common';
class AddCut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
  }
  componentDidMount() {
    this.setState({
      num: getFoodCount(this.props.food)
    });
  }
  cutFood() {
  }
  AddFood() {}
  render() {
    return (
      <View className="addcut">
        <Image
          onClick={this.cutFood.bind(this)}
          className="opeate-img"
          src={require('../../assets/img/icon-head-back.png')}
        />
        <Text className="food-num">{this.state.num}</Text>
        <Image
          onClick={this.AddFood.bind(this)}
          className="opeate-img"
          src={require('../../assets/img/icon-head-back.png')}
        />
      </View>
    );
  }
}

export default AddCut;
