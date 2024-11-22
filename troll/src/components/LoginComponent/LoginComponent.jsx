import React, { useState } from "react";

const LoginComponent = () => {
  const [state, setState] = useState(1); // Estado para manejar las pantallas


  const [isTransitioned, setIsTransitioned] = useState(false);

  const handleButtonClick = () => {
    setIsTransitioned(!isTransitioned);
  };
  return (
    <div className={`container-login`}>
      <div className={`login ${isTransitioned ? 'is-transitioned' : ''}`}>
        <div className="belt">
          <div className="state state-1">
            <input placeholder="email" />
            <input placeholder="password" type="password"/>
            <div class="item button-parrot" >
    <button onClick={handleButtonClick} className="button">Click Me!
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
      <div class="parrot"></div>
    </button>
   
  </div>
           
          </div>
          <div className="state state-2">
            <div className="error">
              4<img className="photo-troll" src="https://s-media-cache-ak0.pinimg.com/originals/54/ef/1c/54ef1cfe2dbd7e8d20f2044346feb75f.png" alt="error" />4
            </div>
            <h2>You Mad Bro??</h2>
            <h4>What did you expect?</h4>
            <div className="button" onClick={handleButtonClick}>Back</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
