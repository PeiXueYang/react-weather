import React, {
  Component
} from "react";
import "./Container.css";
import Navbar from "../navbar/Navbar";
import ChangeBg from "../changeBg/ChangeBg";
import Search from "../search/Search";
import CurrentWeather from "../currentWeather/CurrentWeather";
import Infos from "../infos/Infos";
import axios from "axios";
import {
  getWeatherApi
} from "../../utils/api.js";
import 'antd/dist/antd.css';
import { message } from 'antd';
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: {
        city: "",
        tem: "",
        updateTime: "",
        currentWeather: "",
        qlty: "",
        aqi: ""
      },
      temper: {
        fl: "",
        hum: "",
        pcpn: "",
        pres: "",
        tem: "",
        vis: ""
      },
      wind: {
        deg: "",
        dir: "",
        sc: "",
        spd: ""
      },
      dailyforecast: '',
      suggestion: ''
    };
    this.getWeatherInfo = this.getWeatherInfo.bind(this)
  }
  //获取天气信息
  getWeatherInfo(searchCity) {
    //这里加一个参数 searchCity 是通过input框来查询天气
    //如果存在 就查询 搜索城市的天气 否则 查询当前位置天气
    let that = this;
    /*通过百度地图获取当前位置城市信息*/
    var BMap = window.BMap; //取出window中的BMap对象
    var myCity = new BMap.LocalCity();
    let WeatherLists = {};
    myCity.get(result => {
      // console.log(result);          //城市名称
      if (result.name) {
        /*通过当前位置城市信息获取天气*/
        let city = result.name
        if (searchCity) {
          city = searchCity
        }
        axios
          .get(getWeatherApi, {
            params: {
              city
            }
          })
          .then(function (res) {
            if (200 === res.status) {
              let status = res.data.HeWeather5[0]['status']
              if (searchCity && (status !== 'unknown city')) {
                message.success('查询成功.')
              }
              else if (searchCity && (status == 'unknown city')) {
                message.error('查询失败.')
                return false
              }
              WeatherLists = res.data.HeWeather5[0];
              that.setState({
                weatherInfo: {
                  city: WeatherLists.basic.city,
                  tem: WeatherLists.now.tmp,
                  updateTime: WeatherLists.basic.update.loc,
                  currentWeather: WeatherLists.now.cond.txt,
                  qlty: WeatherLists.aqi.city.qlty,
                  aqi: WeatherLists.aqi.city.aqi
                },
                temper: {
                  fl: WeatherLists.now.fl,
                  hum: WeatherLists.now.hum,
                  pcpn: WeatherLists.now.pcpn,
                  pres: WeatherLists.now.pres,
                  tem: WeatherLists.now.tmp,
                  vis: WeatherLists.now.vis
                },
                wind: {
                  deg: WeatherLists.now.wind.deg,
                  dir: WeatherLists.now.wind.dir,
                  sc: WeatherLists.now.wind.sc,
                  spd: WeatherLists.now.wind.spd
                },
                dailyforecast: WeatherLists.daily_forecast,
                suggestion: WeatherLists.suggestion
              });

            }
            else {
              if (searchCity) {
                message.error('查询失败.')

              }
            }
          });
      }
    });
  }
  componentDidMount() {
    this.getWeatherInfo();
  }
  render() {
    return (
      <div className="Container" >
        <Navbar />
        <img src={require("../../images/accomplishment-adventure-clear-sky-585825.jpg")}
          alt="imgs"
          className="bgImgs" />
        <div className="contents">
          <Search getWeatherInfo={this.getWeatherInfo} />
          <ChangeBg />
          <CurrentWeather weatherInfo={this.state.weatherInfo} />
          <Infos weatherInfo={this.state} />
        </div>
      </div>
    );
  }
}
export default Container;