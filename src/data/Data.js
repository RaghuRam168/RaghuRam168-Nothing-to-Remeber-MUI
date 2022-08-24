import ic440 from './images/4440ic.jpg'
import board4440 from './images/4440board.jpg'
import ic6283 from './images/6283.jpg'
import board6283 from './images/6283-board.jpg'
import amp from './images/amp-aux.jpg'
import av from './images/av-cords.jpg'
import bat1 from './images/bat-1.jpg'
import bat2 from './images/bat-2.png'
import battery from './images/battery.jpg'
import recharchable from './images/recharchable-battery.jpg'
import bluetoothboard from './images/bluetooth-board.jpg'
import dp32 from './images/dp-32.jpg'
import dp42 from './images/dp-42.jpg'
import dphead from './images/dp-head-light.jpg'
import headlight from './images/head-light.jpg'
import hrc from './images/hrc.jpg'
import htAUX from './images/ht-aux.jpg'
import htController from './images/ht-controller.jpg'
import htWoofer from './images/ht-woofer-4.jpg'
import loudSpeaker from './images/loud-speaker.jpg'
import salcon8 from './images/salcon-8.jpg'
import spWire from './images/speaker-wire.jpg'
import tape from './images/tape.jpg'
import tg113 from './images/tg113.jpg'
import ws887 from './images/ws-887.jpg'
import htSpeaker  from './images/speaker.jpg'
import ic2030 from './images/2030ic.jpg'
import megaphone from './images/megaphone.jpg'
import mini from './images/mini-amp.jpg'
import k100 from './images/100k-controller.jpg'
const data =[
    {
        id:1,
        cost:150,
        name:"4440IC",
        photo:ic440,
        stock:0,
        selected:0,
        category:"Repair"
      },
      {
        id:2,
        cost:450,
        name:"4440IC Board",
        photo:board4440,
        stock:0,
        selected:0,
        category:"Boards"
      },
      {
        id:3,
        cost:100,
        name:"6283IC",
        photo:ic6283,
        stock:0,
        selected:0,
        category:"Repair"
      },
      {
        id:4,
        cost:200,
        name:"6283IC Board",
        photo:board6283,
        stock:0,
        selected:0,
        category:"Boards"
      },
      {
        id:5,
        cost:100,
        name:"2030",
        photo:ic2030,
        stock:0,
        selected:0,
        category:"Repair"
      },
      {
        id:6,
        cost:40,
        name:"100K controller",
        photo:k100,
        stock:0,
        selected:0,
        category:"Repair"
      },
      {
        id:7,
        cost:120,
        name:"HT controller",
        photo:htController,
        stock:0,
        selected:0,
        category:"Repair"
      },
      {
        id:8,
        cost:300,
        name:"bluetooth board",
        photo:bluetoothboard,
        stock:0,
        selected:0,
        category:"Boards"
      },
      {
        id:9,
        cost:150,
        name:"hrc board",
        photo:hrc,
        stock:0,
        selected:0,
        category:"Boards"
      },
      {
        id:10,
        cost:450,
        name:"salcon-8",
        photo:salcon8,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:11,
        cost:350,
        name:"HT-4woofer",
        photo:htWoofer,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:12,
        cost:500,
        name:"Samcon Horn",
        photo:loudSpeaker,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:13,
        cost:900,
        name:"Megaphone",
        photo:megaphone,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:14,
        cost:300,
        name:"Bt Speaker",
        photo:ws887,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:15,
        cost:450,
        name:"TG113",
        photo:tg113,
        stock:0,
        selected:0,
        category:"Speakers"
      },
      {
        id:16,
        cost:15,
        name:"Tape",
        photo:tape,
        stock:0,
        selected:0,
        category:"General"
      },
      {
        id:17,
        cost:20,
        name:"Speaker wire",
        photo:spWire,
        stock:0,
        selected:0,
        category:"Wires"
      },
      {
        id:18,
        cost:100,
        name:"AV Cords",
        photo:av,
        stock:0,
        selected:0,
        category:"Wires"
      },{
        id:19,
        cost:100,
        name:"HT-aux",
        photo:htAUX,
        stock:0,
        selected:0,
        category:"Wires"
      },{
        id:20,
        cost:150,
        name:"Amp-aux",
        photo:amp,
        stock:0,
        selected:0,
        category:"Wires"
      },{
        id:21,
        cost:1450,
        name:"Mini Amp",
        photo:mini,
        stock:0,
        selected:0,
        category:"Amplifiers"
      },{
        id:22,
        cost:250,
        name:"Mosquito Bat1",
        photo:bat1,
        stock:0,
        selected:0,
        category:"General"
      },
      {
        id:23,
        cost:350,
        name:"Mosquito Bat2",
        photo:bat2,
        stock:0,
        selected:0,
        category:"General"
      },{
        id:24,
        cost:100,
        name:"Recharchable Battery",
        photo:recharchable,
        stock:0,
        selected:0,
        category:"General"
      },{
        id:25,
        cost:30,
        name:"AAA Battery",
        photo:battery,
        stock:0,
        selected:0,
        category:"General"
      },{
        id:26,
        cost:350,
        name:"DP-32",
        photo:dp32,
        stock:0,
        selected:0,
        category:"Lights"
      },
      {
        id:27,
        cost:500,
        name:"DP-50",
        photo:dp42,
        stock:0,
        selected:0,
        category:"Lights"
      },
      {
        id:28,
        cost:400,
        name:"DP-headlight",
        photo:dphead,
        stock:0,
        selected:0,
        category:"Lights"
      },{
        id:30,
        cost:450,
        name:"24-headlight",
        photo:headlight,
        stock:0,
        selected:0,
        category:"Lights"
      },{
        id:31,
        cost:250,
        name:"HT Speaker",
        photo:htSpeaker,
        stock:0,
        selected:0,
        category:"Speakers"
      }
     
]
export default data;