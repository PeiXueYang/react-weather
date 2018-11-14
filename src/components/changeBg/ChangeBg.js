import React, { Component } from 'react';
import './ChangeBg.css';

class ChangeBg extends Component {
  render() {
    return (
      <div className="ChangeBg">
        <div className='changebg-icon-fa'>
           <div>点击切换背景</div>
           <div>
             <img  src={require('../../images/down-arrow.png')}  className='changebg-arrow-down' alt='img' />
           </div>
        </div>
      </div>
    );
  }
}

export default ChangeBg;