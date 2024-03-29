import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './addcut.scss';
import { getFoodCount, setFoodCount, getEvent } from '../../utils/common';
const myEvent = getEvent();
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
    myEvent.on('changeCata', () => {
      // 监听到分类改变进行菜品刷新
      this.setState({
        num: getFoodCount(this.props.food)
      });
    });
  }
  cutFood() {
    if (this.props.food) {
      if (this.state.num > 0) {
        setFoodCount(this.props.food, this.state.num, 'cut', () => {
          this.setState({
            num: getFoodCount(this.props.food)
          });
          myEvent.emit('addcut');
        });
      } else {
        console.log('当前菜品cutFood出现异常');
      }
    }
  }
  AddFood() {
    if (this.props.food) {
      setFoodCount(this.props.food, this.state.num, 'add', () => {
        this.setState({
          num: getFoodCount(this.props.food)
        });
        myEvent.emit('addcut');
      });
    }
  }
  render() {
    let { num } = this.state;
    let hide = num > 0 ? '' : 'hide';
    return (
      <View className="addcut">
        <Image
          onClick={this.cutFood.bind(this)}
          className={'opeate-img ' + hide}
          src={require('../../assets/img/icon-num-cut.png')}
        />
        <Text className={'food-num ' + hide}>{num}</Text>
        <Image
          onClick={this.AddFood.bind(this)}
          className={'opeate-img'}
          src={require('../../assets/img/icon-num-add.png')}
        />
      </View>
    );
  }
}

export default AddCut;
