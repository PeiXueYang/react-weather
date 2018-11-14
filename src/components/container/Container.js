import React, { Component } from 'react';
import './Container.css';
import Navbar  from '../navbar/Navbar'
import ChangeBg from '../changeBg/ChangeBg'
import Search from '../search/Search'
import CurrentWeather from '../currentWeather/CurrentWeather'
import Infos from '../infos/Infos'
class Container extends Component {
  render() {
    return (
      <div className="Container">
          <Navbar/>
          <img src={require('../../images/accomplishment-adventure-clear-sky-585825.jpg')} alt='imgs' className='bgImgs' />
        <div className='contents'>
          <Search/>
          <ChangeBg/>
          <CurrentWeather />
          <Infos />
        </div>
      </div>
    );
  }
}

export default Container;