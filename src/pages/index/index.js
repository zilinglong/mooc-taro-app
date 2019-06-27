import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';
import Child from './Child';

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  constructor() {
    super();
    this.state = {
      name: '张三'
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  handleClick() {
    this.setState({
      name: '李四'
    });
  }
  handleChange() {
    this.setState({
      name: '子组件通过父组件改变name的值'
    });
  }
  render() {
    return (
      <View className="index">
        <Button onClick={this.handleClick.bind(this)}>改变</Button>
        <Text>{this.state.name}</Text>
        <Child name={this.state.name} onChange={this.handleChange.bind(this)} />
      </View>
    );
  }
}
