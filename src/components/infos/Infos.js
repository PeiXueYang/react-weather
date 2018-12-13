import React, { Component } from 'react';
import './Infos.css';

class Infos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tem: '',
      wind: '',
      list: [
        {
          _infos: '温度(℃)',
          values: '17'
        },
        {
          _infos: '体感温度(℃)',
          values: '17'
        },
        {
          _infos: '相对湿度(%)',
          values: '50'
        },
        {
          _infos: '降水量(mm)',
          values: '0.0'
        },
        {
          _infos: '风向',
          values: '东南风'
        },
        {
          _infos: '风向角度(deg)',
          values: '152'
        },
        {
          _infos: '风力(级)',
          values: '1'
        },
        {
          _infos: '风速(mk/h)',
          values: '2'
        },
        {
          _infos: '能见度(km)',
          values: '10'
        },
        {
          _infos: '气压(mb)',
          values: '1019'
        },
        {
          _infos: '云量',
          values: '75'
        },
        {
          _infos: '星态',
          values: '33'
        }
      ],
      s_weather: [{
        weekday: '周二',
        date: '2018/11/13',
        wind_dir: '东北风',
        wind_sc: '1-2',
        tmp_max: '18',
        tmp_min: '12',
        wea: '⛅阴'

      }, {
        weekday: '周三',
        date: '2018/11/14',
        wind_dir: '微风',
        wind_sc: '1-2',
        tmp_max: '16',
        tmp_min: '8',
        wea: '🌤晴'
      },
      {
        weekday: '周四',
        date: '2018/11/15',
        wind_dir: '北风',
        wind_sc: '1-2',
        tmp_max: '13',
        tmp_min: '9',
        wea: '⛅多云'
      }],
      suggestion: ''
    }
  }
  //天气信息 列表
  lists() {
    return (
      <div className='infosbox'>
        <div className='infos-items' >
          <div className='fos-items'>温度(℃)</div>
          <div className='fos-items'>{this.state.tem.tem}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>体感温度(℃)</div>
          <div className='fos-items'>{this.state.tem.hum}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>相对湿度(%)</div>
          <div className='fos-items'>{this.state.tem.vis}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>降水量(mm)</div>
          <div className='fos-items'>{this.state.tem.pcpn}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>风向</div>
          <div className='fos-items'>{this.state.wind.dir}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>风向角度(deg)</div>
          <div className='fos-items'>{this.state.wind.deg}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>风力(级)</div>
          <div className='fos-items'>{this.state.wind.sc}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>风速(mk/h)</div>
          <div className='fos-items'>{this.state.wind.spd}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>能见度(km)</div>
          <div className='fos-items'>{this.state.tem.fl}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>气压(mb)</div>
          <div className='fos-items'>{this.state.tem.pres}</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>云量</div>
          <div className='fos-items'>30</div>
        </div>
        <div className='infos-items' >
          <div className='fos-items'>星态</div>
          <div className='fos-items'>50</div>
        </div>
      </div>
    )


  }
  // 最近几天的 天气
  rencentWearther() {
    return (
      this.state.s_weather.map((item, i) => {
        return (
          <div className='guide-tem' key={i}>
            <div>{item.weekday}</div>
            <div>{item.tmp_min}~{item.tmp_max}℃</div>
            <div>{item.wea}</div>
            <div>{item.wind_dir}{item.wind_sc}级</div>
          </div>
        )
      })
    )
  }
  //生活指数信息
  zhishu() {
    if (!this.state.suggestion.comf) return
    return (
      <div>
        <div className='listSize'>
          <img src={require('../../images/lifestyle_comf.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.comf.brf}</div>
            <div className='list-item'>{this.state.suggestion.comf.txt}</div>
          </div>
        </div>
        <div className='listSize'>
          <img src={require('../../images/clothing.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.drsg.brf}</div>
            <div className='list-item'>{this.state.suggestion.drsg.txt}</div>
          </div>
        </div>
        <div className='listSize'>
          <img src={require('../../images/carwashing.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.cw.brf}</div>
            <div className='list-item'>{this.state.suggestion.cw.txt}</div>
          </div>
        </div>
        <div className='listSize'>
          <img src={require('../../images/pill.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.flu.brf}</div>
            <div className='list-item'>{this.state.suggestion.flu.txt}</div>
          </div>
        </div>
        <div className='listSize'>
          <img src={require('../../images/running.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.sport.brf}</div>
            <div className='list-item'>{this.state.suggestion.sport.txt}</div>
          </div>
        </div>
        <div className='listSize'>
          <img src={require('../../images/lifestyle_trav.png')} className='guide-imgs' alt='图片' />
          <div className='list-right'>
            <div className='list-item'>{this.state.suggestion.uv.brf}</div>
            <div className='list-item'>{this.state.suggestion.uv.txt}</div>
          </div>
        </div>
      </div>

    )
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    let data = nextProps.weatherInfo.dailyforecast
    let suggestion = nextProps.weatherInfo.suggestion
    let wind = nextProps.weatherInfo.wind
    let tem = nextProps.weatherInfo.temper
    let sweather = []
    for (let i in data) {
      sweather.push({
        weekday: data[i].date,
        tmp_min: data[i].tmp.min,
        tmp_max: data[i].tmp.max,
        wea: data[i].cond.txt_d,
        wind_dir: data[i].wind.dir,
      })

    }
    this.setState({
      s_weather: sweather,
      suggestion,
      wind,
      tem
    })
  }
  render() {
    return (
      <div>
        <div className='fa-infos'>
          <div className="Infos">
            {this.lists()}
          </div>
        </div>
        <div className='guide'>
          {this.rencentWearther()}
        </div>
        <div className='lists-bottom'>
          {this.zhishu()}
        </div>

      </div>

    );
  }
}
export default Infos;