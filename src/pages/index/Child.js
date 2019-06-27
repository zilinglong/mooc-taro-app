import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';

class Child extends Component {
  handleClick() {
    this.props.onChange();
  }
  render() {
    return (
      <View>
        childcccc.{this.props.name}
        <Button onclick={this.handleClick.bind(this)}>调用父组件事件，修改元素</Button>
      </View>
    );
  }
}

export default Child;
