import React, { Component } from 'react';
import './Infos.css';
  
class Infos extends Component {
  constructor(props){
    super(props)
    this.state ={
       list:[
         {
           _infos:'温度(℃)',
           values:'17'
         },
         {
          _infos:'体感温度(℃)',
          values:'17'
        },
        {
          _infos:'相对湿度(%)',
          values:'50'
        },
        {
          _infos:'降水量(mm)',
          values:'0.0'
        },
        {
          _infos:'风向',
          values:'东南风'
        },
        {
          _infos:'风向角度(deg)',
          values:'152'
        },
        {
          _infos:'风力(级)',
          values:'1'
        },
        {
         _infos:'风速(mk/h)',
         values:'2'
       },
       {
         _infos:'能见度(km)',
         values:'10'
       },
       {
         _infos:'气压(mb)',
         values:'1019'
       },
       {
         _infos:'云量',
         values:'75'
       },
       {
         _infos:'星态',
         values:'33'
       }
       ],
      s_weather:[{
        weekday:'周二',
        date:'2018/11/13',
        wind_dir:'东北风',
        wind_sc:'1-2',
        tmp_max:'18',
        tmp_min:'12',
        wea:'⛅阴'

      },{
        weekday:'周三',
        date:'2018/11/14',
        wind_dir:'微风',
        wind_sc:'1-2',
        tmp_max:'16',
        tmp_min:'8',
        wea:'🌤晴'
      },
      {
        weekday:'周四',
        date:'2018/11/15',
        wind_dir:'北风',
        wind_sc:'1-2',
        tmp_max:'13',
        tmp_min:'9',
        wea:'⛅多云'
      }]
    }
  }
  //天气信息 列表
  lists(){
      return(
         this.state.list.map((item,index)=>{
           return(
              <div className='infos-items' key={index}>
                  <div className='fos-items'>{item._infos}</div>
                  <div className='fos-items'>{item.values}</div>
              </div>
           )
         })
      )
       
  }
  // 最近几天的 天气
  rencentWearther(){
        return (
              this.state.s_weather.map((item,i)=>{
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
  zhishu(){
       return (
          <div>
             <div className='listSize'>
                <img src={require('../../images/lifestyle_comf.png')} className='guide-imgs' alt='图片' />
                <div className='list-right'>
                  <div className='list-item'>舒适度指数 舒适</div>
                  <div className='list-item'>白天不太热也不太冷，风力不大，相信您在这样的天气条件下，应会感到比较清爽和舒适。</div>
                </div>
             </div>
             <div className='listSize'>
                <img src={require('../../images/clothing.png')} className='guide-imgs' alt='图片'/>
                <div className='list-right'>
                  <div className='list-item'>穿衣指数 较舒适</div>
                  <div className='list-item'>建议着薄外套、开衫牛仔衫裤等服装。年老体弱者应适当添加衣物，宜着夹克衫、薄毛衣等。</div>
                </div>
             </div>
             <div className='listSize'>
                <img src={require('../../images/carwashing.png')} className='guide-imgs' alt='图片' />
                <div className='list-right'>
                  <div className='list-item'>洗车指数 较适宜</div>
                  <div className='list-item'>较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。</div>
                </div>
             </div>
             <div className='listSize'>
                <img src={require('../../images/pill.png')} className='guide-imgs' alt='图片'/>
                <div className='list-right'>
                  <div className='list-item'>感冒指数 少发</div>
                  <div className='list-item'>各项气象条件适宜，无明显降温过程，发生感冒机率较低。</div>
                </div>
             </div>
             <div className='listSize'>
                <img src={require('../../images/running.png')} className='guide-imgs' alt='图片' />
                <div className='list-right'>
                  <div className='list-item'>运动指数 适宜</div>
                  <div className='list-item'>天气较好，赶快投身大自然参与户外运动，尽情感受运动的快乐吧。</div>
                </div>
             </div>
             <div className='listSize'>
                <img src={require('../../images/lifestyle_trav.png')} className='guide-imgs' alt='图片' />
                <div className='list-right'>
                  <div className='list-item'>旅游指数 弱</div>
                  <div className='list-item'>紫外线强度较弱，建议出门前涂擦SPF在12-15之间、PA+的防晒护肤品。</div>
                </div>
             </div>
          </div>
           
       )
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