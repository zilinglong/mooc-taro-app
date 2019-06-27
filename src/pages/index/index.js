import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import './index.scss';
// import Child from './Child';
import Head from '../../components/head/head';
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };
  constructor() {
    super();
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  render() {
    return (
      <View className="index">
        <Head />
      </View>
    );
  }
}
