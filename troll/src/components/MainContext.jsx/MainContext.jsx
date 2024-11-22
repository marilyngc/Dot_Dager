import React from 'react';
import Cards from '../Cards/Cards';
import LoginComponent from '../LoginComponent/LoginComponent';
import AudioPlayer from '../AudioPlayer/AudioPlayer';

const MainContext = () => {
  return (
    <main>
      <section>
        <article>
          <h1>Scrollery</h1>
        </article>
      </section>
      <section>
        <div className="sticker">
          <article>
            <img src="https://picsum.photos/800/600?random=1" alt="" />
            <h3>Big Rock</h3>
          </article>
          <article>
            <img src="https://picsum.photos/800/600?random=2" alt="" />
            <h3>Little Boat</h3>
          </article>
          <article>
            <img src="https://picsum.photos/800/600?random=3" alt="" />
            <h3>Big Bushes</h3>
          </article>
          <article>
            <img src="https://picsum.photos/800/600?random=4" alt="" />
            <h3>Little Rocks</h3>
          </article>
        </div>
        <div className="snapper"></div>
        <div className="snapper"></div>
        <div className="snapper"></div>
      </section>
      <section>
        <article>
          <img src="https://assets.codepen.io/605876/bear-2022--white.png" alt="Bear" />
        </article>
      </section>
      <div className="scroller words chars splitting" data-splitting="" style={{ '--word-total': 1, '--char-total': 14 }}>
        <span className="word" data-word="Scroll•Scroll•" style={{ '--word-index': 0 }}>
          <span className="char" data-char="S" style={{ '--char-index': 0 }}>S</span>
          <span className="char" data-char="c" style={{ '--char-index': 1 }}>c</span>
          <span className="char" data-char="r" style={{ '--char-index': 2 }}>r</span>
          <span className="char" data-char="o" style={{ '--char-index': 3 }}>o</span>
          <span className="char" data-char="l" style={{ '--char-index': 4 }}>l</span>
          <span className="char" data-char="l" style={{ '--char-index': 5 }}>l</span>
          <span className="char" data-char="•" style={{ '--char-index': 6 }}>•</span>
          <span className="char" data-char="S" style={{ '--char-index': 7 }}>S</span>
          <span className="char" data-char="c" style={{ '--char-index': 8 }}>c</span>
          <span className="char" data-char="r" style={{ '--char-index': 9 }}>r</span>
          <span className="char" data-char="o" style={{ '--char-index': 10 }}>o</span>
          <span className="char" data-char="l" style={{ '--char-index': 11 }}>l</span>
          <span className="char" data-char="l" style={{ '--char-index': 12 }}>l</span>
          <span className="char" data-char="•" style={{ '--char-index': 13 }}>•</span>
        </span>
       
      </div>
      <section>

        <article>
            <Cards/>
        </article>
      </section>
      <section>
      
            <LoginComponent/>
 
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
