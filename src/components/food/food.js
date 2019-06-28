import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtTabs, AtTabsPane } from 'taro-ui';
// import Catagory from './catagory';
import FoodList from './foodList';
import Cata from './cata';
import './Food.scss';
class Food extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      tabList: [{ title: '点菜' }, { title: '评价' }, { title: '商家' }],
      foodlist: [], // 右边数据的整体的集合
      currentList: [] // 传给右面的数据
    };
  }
  changeTab(value) {
    console.log('value:', value);
    this.setState({ current: value });
  }
  // 切换分类
  changeCata(selectCata) {
    console.log('food.js:', selectCata);
    if (this.state.foodlist.some(item => item.pid === selectCata.id)) {
      console.log('已经有数据，不用加载数据');
      // 已经有数据，不用加载数据
      this.setState({
        currentList: this.state.foodlist.some(
          item => item.pid === selectCata.id
        )
      });
    } else {
      console.log('需要加载数据');
      // 需要加载数据
      this.setState(
        {
          foodlist: this.state.foodlist.concat(this.getData(selectCata))
        },
        () => {
          console.log('foodList:', this.state.foodlist);
          this.setState({
            currentList: this.state.foodlist.some(
              item => item.pid === selectCata.id
            )
          });
        }
      );
    }
  }
  getData(selectCata) {
    let imgurl = '../../assets/img/icon-head-tuan.png';
    return Array.from(Array(Math.round(Math.random() * 20)), (v, k) => ({
      img: imgurl,
      pid: selectCata.id,
      id: selectCata.id + '_' + k,
      title: '分类' + selectCata.id + '菜品' + (k + 1)
    }));
  }
  render() {
    let { current, tabList, currentList } = this.state;
    return (
      <View className="food">
        <AtTabs
          current={this.state.current}
          tabList={tabList}
          onClick={this.changeTab.bind(this)}
        >
          <AtTabsPane current={this.state.current} index={0}>
            <View className="food-body">
              <Cata onChangeCata={this.changeCata.bind(this)} />
              <FoodList currentList={currentList} name={'name foodlist'} />
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              评价
            </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={2}>
            <View style="padding: 100px 50px;background-color: #FAFBFC;text-align: center;">
              商家
            </View>
          </AtTabsPane>
        </AtTabs>
      </View>
    );
  }
}

export default Food;
