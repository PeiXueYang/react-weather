import React, {
  Component
} from 'react';
import './CurrentWeather.css';
import {
  messages
} from "../../utils/message.js";
class CurrentWeather extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherInfo: '',
      city: '',
      data: props.weatherInfo
    }
  }
  componentWillReceiveProps(nextProps) {

  }
  componentWillMount() {
    console.log(messages())
  }
  render() {
    let weatherInfo = this.props.weatherInfo
    return (
      <div>
        <div className="CurrentWeather" >
          <div className='CurrentWeather-area'>
            <div className='CurrentWeather-left'> {weatherInfo.city} </div>
            <div className='CurrentWeather-right'> {weatherInfo.updateTime} 更新 </div>
          </div>
          <div>
            <div className='CurrentWeather-tips'> {messages()} </div>
            <div className='CurrentWeather-temper'> {weatherInfo.tem}° </div>
            <div className='CurrentWeather-qing' > {weatherInfo.currentWeather} </div>
            <div className='CurrentWeather-qing-zk' > {weatherInfo.qlty} {weatherInfo.aqi} </div>
          </div>
        </div>

      </div>

    );
  }
}
export default CurrentWeather;