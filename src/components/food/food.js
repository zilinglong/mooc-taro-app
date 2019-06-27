import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './Food.scss';
import { AtTabs, AtTabsPane } from 'taro-ui';
class Food extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }]
    };
  }
  changeTab(value) {
    console.log('value:', value);
    this.setState({ current: value });
  }
  render() {
    let { current, tabList } = this.state;
    return (
      <View className="food">
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.changeTab.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页一的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页二的内容
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              标签页三的内容
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Food;
