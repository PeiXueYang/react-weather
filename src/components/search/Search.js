import React, { Component } from 'react';
import './Search.css';
class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      value: ''
    }
  }
  componentDidMount() {

  }
  serchCity(e) {
    this.setState({
      cityName: e.target.value
    })
  }
  handleKeyPress() {
    this.setState({
      value: ''
    })
    this.props.getWeatherInfo(this.state.cityName)
  }
  //搜索 天气信息
  render() {
    return (
      <div className="Search">
        <div className='search-wrap'>
          <img src={require('../../images/search.png')} className='search-search' alt='img' />
          <input placeholder='查询其他城市' className='search-input' onChange={this.serchCity.bind(this)} onKeyPress={
            this.handleKeyPress.bind(this)
          } defaultValue={this.state.value} />
        </div>
      </div>
    );
  }
}

export default Search;