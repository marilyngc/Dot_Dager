import React from 'react';

import AudioPlayer from '../AudioPlayer/AudioPlayer';
import estudiado from "../../assets/dot/estudiando.jpg"
import pan1 from "../../assets/dot/pan1.jpg"
import pan2 from "../../assets/dot/pan2.jpg"
import pan3 from "../../assets/dot/pan3.jpg"
import CardInfo from '../cardInfo/CardInfo';
import Portfolio from '../Portafolio/Portafolio';


const MainContext = () => {
  return (
    <main>
      <section className='sectionFront'>
        <article>
          <h1>Dot Dager</h1>
         
        </article>
      </section>
   
      <section>
        <div className="sticker">
          <article>
            <img src={estudiado} alt="" />
            <h3>Gran Rockero</h3>
          </article>
          <article>
            <img src={pan1} alt="" />
            <h3>Muerdo Pan</h3>
          </article>
          <article>
            <img src={pan2} alt="" />
            <h3>Dejo Pan</h3>
          </article>
          <article>
            <img src={pan3} alt="" />
            <h3>Te Miro</h3>
          </article>
        </div>
        <div className="snapper"></div>
        <div className="snapper"></div>
        <div className="snapper"></div>
      </section>
      <section>
       
          <CardInfo/>
          
       
      </section>
      <div className="scroller words chars splitting" data-splitting="" style={{ '--word-total': 1, '--char-total': 14 }}>
        <span className="word" data-word="Scroll•Scroll•" style={{ '--word-index': 0 }}>
          <span className="char" data-char="D" style={{ '--char-index': 0 }}>D</span>
          <span className="char" data-char="o" style={{ '--char-index': 1 }}>o</span>
          <span className="char" data-char="t" style={{ '--char-index': 2 }}>t</span>
          <span className="char" data-char="o" style={{ '--char-index': 3 }}>D</span>
          <span className="char" data-char="D" style={{ '--char-index': 4 }}>a</span>
          <span className="char" data-char="a" style={{ '--char-index': 5 }}>g</span>
          <span className="char" data-char="a" style={{ '--char-index': 6 }}>e</span>
          <span className="char" data-char="a" style={{ '--char-index': 7 }}>r</span>
          <span className="char" data-char="•" style={{ '--char-index': 8 }}>•</span>
          <span className="char" data-char="D" style={{ '--char-index': 9 }}>P</span>
          <span className="char" data-char="o" style={{ '--char-index': 10 }}>e</span>
          <span className="char" data-char="t" style={{ '--char-index': 11 }}>p</span>
          <span className="char" data-char="o" style={{ '--char-index': 12 }}>i</span>
          {/* <span className="char" data-char="D" style={{ '--char-index': 13 }}>a</span>
          <span className="char" data-char="a" style={{ '--char-index': 14 }}>g</span>
          <span className="char" data-char="a" style={{ '--char-index': 15 }}>e</span> */}
     
          <span className="char" data-char="•" style={{ '--char-index': 13 }}>•</span>
        </span>
       
      </div>
 
<section id='portfolio'>
  <article>
    <Portfolio/>
  </article>
</section>
      <section>
        <article>
            <AudioPlayer/>
        </article>
      </section>
    </main>
  );
};

export default MainContext;
