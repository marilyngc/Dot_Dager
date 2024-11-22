import React, { useEffect } from "react";

const AudioPlayer= () => {
  const startPlayingMusic = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.play();
    key.classList.add("playing");
  };

  const stopPlaying = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    key.classList.remove("playing");
  };

  useEffect(() => {
    window.addEventListener("keydown", startPlayingMusic);
    window.addEventListener("keyup", stopPlaying);

    return () => {
      window.removeEventListener("keydown", startPlayingMusic);
      window.removeEventListener("keyup", stopPlaying);
    };
  }, []);

  return (
    <div className="container">
      <div className="drumpad">
        <div className="row">
          <div className="key blue" data-key="65">A</div>
          <div className="key blue" data-key="83">S</div>
          <div className="key yellow" data-key="68">D</div>
          <div className="key purple" data-key="70">F</div>
        </div>
        <div className="row">
          <div className="key yellow" data-key="72">H</div>
          <div className="key purple" data-key="74">J</div>
          <div className="key blue" data-key="75">K</div>
          <div className="key green" data-key="76">L</div>
        </div>
      </div>
      <p>Simplemente presione sus teclas en su teclado para comenzar.</p>

      <audio loop id="Big-Rack-Tom-Audio" data-key="65">
        <source
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343880/looperman-l-1172494-0081589-yappy-organ-flute-90bpm.wav"
          preload="auto"
          type="audio/wav"
        />
      </audio>
      <audio loop id="Crash-Audio" data-key="83">
        <source
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343880/looperman-l-0911223-0096296-silencekills-space-lift-drums-90.wav"
          preload="auto"
          type="audio/wav"
        />
      </audio>
      <audio loop id="Floor-Tom-Audio" data-key="68">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Floor-Tom.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
      <audio loop id="Hi-Hat-Closed-Audio" data-key="70">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Hi-Hat-Closed.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
      <audio loop id="Hi-Hat-Open-Audio" data-key="72">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/High-Hat-Open.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
      <audio loop id="Kick-Audio" data-key="74">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Kick.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
      <audio loop id="Small-Rack-Tom-Audio" data-key="75">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Small-Rack-Tom.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
      <audio loop id="Snare-Audio" data-key="76">
        <source
          src="https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Snare.mp3"
          preload="auto"
          type="audio/mp3"
        />
      </audio>
    </div>
  );
};

export default AudioPlayer;
