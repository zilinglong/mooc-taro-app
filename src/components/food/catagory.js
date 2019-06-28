import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import './Cata.scss';
class Cata extends Component {
  constructor() {
    super();
    this.state = {
      selectCata: null,
      cata: [
        { id: 1, name: '专场' },
        { id: 2, name: '热销' },
        { id: 3, name: '折扣' },
        { id: 4, name: '主食' },
        { id: 5, name: '热炒' },
        { id: 6, name: '凉菜' },
        { id: 7, name: '特色乱炖' }
      ]
    };
  }
  handleClick(item) {
    console.log('cata.js:', item);
    if (this.state.selectCata && this.state.selectCata.id !== item.id) {
      console.log('cata.js !== null:');
      this.setState({
        selectCata: item
      });
      console.log('kdkdjkdjf');
      console.log('this.props.onChangeCata !== null:');
      console.log('!==:', this.props.onChangeCata(item));
      // this.props.onChangeCata(item);
    } else if (!this.state.selectCata) {
      console.log('cata.js === null:');
      this.setState(
        {
          selectCata: item
        }
        // ,
        // () => {
        //   // console.log('this.props.onChangeCata:', this.props.onChangeCata);
        //   // // this.props.onChangeCata &&
        //   // this.props.onChangeCata(this.state.selectCata);
        // }
      );
      console.log('this.props.onChangeCata is null');
      console.log('this.props:', this.props);
      // console.log('==null:', this.props.onChangeCata(item));
      // this.props.onChangeCata(item);
      // this.props.onChangeCata(item);
    }
  }
  render() {
    console.log('cata this.props:', this.props);
    let { selectCata, cata } = this.state;
    return (
      <View className="cata">
        {cata.map((item, idx) => (
          <Text
            className={
              'cata-name ' +
              (selectCata && selectCata.id === item.id ? 'select' : '')
            }
            key={idx}
            onClick={this.handleClick.bind(this, item)}
          >
            {item.name}
          </Text>
        ))}
      </View>
    );
  }
}

export default Cata;
