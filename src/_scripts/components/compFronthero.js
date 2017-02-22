'use restric'

import baffle from 'baffle'
import {heroAnimation} from './globalAnimation'
import {myToggle} from './compToggle'

export default()=>{
  console.log('load front hero');

  let heroBaffletext = baffle('.comp__front-hero .title')
    .text(currentText => currentText )
    .start()
    .set({
      characters : '一般社団法人 行政情報システム研究所は、行政情報化を推進する専門機関として、我が国の電子政府の実現に向けた諸方策の具体化及び行政情報システムの整備・構築に的確に貢献するために、行政機関と企業、社会一般との接点に位置する一般社団法人として情報システムに係る調査研究、普及啓発、役務の提供等の事業を実施しています。',
      speed: 100
    })
    .reveal(1000, 200);

  let heroToggle = document.querySelector('.container--hero .comp__toggle--hero');

  heroToggle.addEventListener(
    'click',
    function(){
      myToggle(this, heroAnimation());
  });

}
