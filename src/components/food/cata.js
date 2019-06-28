import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

class Cata extends Component {
  render() {
    console.log('cata', this.props.name);
    console.log('cata', this.props);
    return <div>this is cata.{this.props.name}</div>;
  }
}

export default Cata;
