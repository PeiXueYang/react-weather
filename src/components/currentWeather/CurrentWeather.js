import React, { Component } from 'react';
import './CurrentWeather.css';
import axios from 'axios'
class CurrentWeather extends Component {
  getWeatherInfo(){
    axios.get('https://free-api.heweather.com/s6/weather?location=31.26451%2C121.50515&key=5aeaeee5b8ad4a658b963c722ddfc645')
    .then(function (response) {
      console.log(response);
     
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  componentDidMount(){
    this.getWeatherInfo()
  }
  render() {
    return (
      <div className="CurrentWeather">
         <div className='CurrentWeather-area'>
             <div className='CurrentWeather-left'>虹口</div>
             <div  className='CurrentWeather-right'>2018/11/09 14:38更新</div>
         </div>
         <div>
              <div className='CurrentWeather-tips'>据说每天两点 , 是注意力最集中的时刻哦~</div>
              <div className='CurrentWeather-temper'> 16°</div>
              <div className='CurrentWeather-qing'>晴</div>
              <div className='CurrentWeather-qing-zk'>优 38</div>
         </div>
      </div>
    );
  }
}
export default CurrentWeather;