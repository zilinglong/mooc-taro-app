// 获取菜品数量，通过传入的信息来统计当前有多少个菜品
// 缓存数据-H5小程序
import Taro from '@tarojs/taro';
const foodKey = 'taro_meituan';
export function getFoodCount(food) {
  let store = Taro.getStorageSync(foodKey);
  if (store) {
    // 查找
    if (store[food.id]) {
      return store[food.id].num;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}
// 设置菜品数量：当夹菜或减菜时触发,num是由加减菜组件自身的state存储，加减
//当
export function setFoodCount(food, num, type, callback) {}
