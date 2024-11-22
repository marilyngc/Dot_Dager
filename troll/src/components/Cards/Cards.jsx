import React, { useEffect } from 'react';

const Cards = () => {
  useEffect(() => {
    const handleMouseWheel = (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto de desplazamiento vertical
      e.stopPropagation();
      e.target.scrollLeft -= e.originalEvent.wheelDelta; // Para navegadores con wheelDelta
    };

    const handleDOMMouseScroll = (e) => {
      e.preventDefault(); // Prevenir el comportamiento por defecto de desplazamiento vertical
      e.stopPropagation();
      e.target.scrollLeft += e.originalEvent.detail * 40; // Para Firefox
    };

    const scrollEventElement = document.getElementById('scroll-event');
    if (scrollEventElement) {
      scrollEventElement.addEventListener('wheel', handleMouseWheel);
      scrollEventElement.addEventListener('DOMMouseScroll', handleDOMMouseScroll);
    }

    // Cleanup para eliminar los eventos cuando el componente se desmonte
    return () => {
      if (scrollEventElement) {
        scrollEventElement.removeEventListener('wheel', handleMouseWheel);
        scrollEventElement.removeEventListener('DOMMouseScroll', handleDOMMouseScroll);
      }
    };
  }, []);

  const heroes = [
    { name: "Axe", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/axe.png", type: "strength", range: 'melee' },
    { name: "Naga Siren", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/naga.png", type: "agility", range: 'melee' },
    { name: "Invoker", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/invoker.png", type: "intelligence", range: 'range' },
    { name: "Bounty Hunter", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/bounty.png", type: "agility", range: 'melee' },
    { name: "Necrophos", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/necro.png", type: "intelligence", range: 'range' },
    { name: "Enchantress", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/enchantress.png", type: "intelligence", range: 'range' },
    { name: "Earthshaker", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/earthsh.png", type: "strength", range: 'melee' },
    { name: "Storm Spirit", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/storm.png", type: "intelligence", range: 'range' },
    { name: "Ember Spirit", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/ember.png", type: "agility", range: 'melee' },
    { name: "Earth Spirit", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/earth.png", type: "strength", range: 'melee' },
    { name: "Rubick", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/rubick.png", type: "intelligence", range: 'range' },
    { name: "Troll Warlord", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/troll.png", type: "agility", range: 'melee' },
    { name: "Kunkka", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/kunkka.png", type: "strength", range: 'melee' },
    { name: "Puck", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/puck.png", type: "intelligence", range: 'range' },
    { name: "Juggernaut", image: "https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/jugger.png", type: "agility", range: 'melee' },
  ];

  return (
    <div class="main-content">
    <div class="options__wrapper">
      <h1 className='h1-card'>
        <span className='span-card'>Tipos de</span><br />
        <span className='span-card'>Dager</span>
      </h1>
      <div class="options" id="scroll-event">
        <div class="options__item" data-type="strength">
          <img className='photo-card' src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/axe.png" height="100%" alt="Axe" />
          <div class="options__item__info">
            <p className='p-card '>Axe</p>
            <span className='span-card'>strength</span>
            <span className='span-card'>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="agility">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/naga.png" height="100%" alt="Naga Siren" />
          <div class="options__item__info">
            <p>Naga Siren</p>
            <span>agility</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/invoker.png" height="100%" alt="Invoker" />
          <div class="options__item__info">
            <p>Invoker</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="agility">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/bounty.png" height="100%" alt="Bounty Hunter" />
          <div class="options__item__info">
            <p>Bounty Hunter</p>
            <span>agility</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/necro.png" height="100%" alt="Necrophos" />
          <div class="options__item__info">
            <p>Necrophos</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/enchantress.png" height="100%" alt="Enchantress" />
          <div class="options__item__info">
            <p>Enchantress</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="strength">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/earthsh.png" height="100%" alt="Earthshaker" />
          <div class="options__item__info">
            <p>Earthshaker</p>
            <span>strength</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/storm.png" height="100%" alt="Storm Spirit" />
          <div class="options__item__info">
            <p>Storm Spirit</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="agility">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/ember.png" height="100%" alt="Ember Spirit" />
          <div class="options__item__info">
            <p>Ember Spirit</p>
            <span>agility</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="strength">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/earth.png" height="100%" alt="Earth Spirit" />
          <div class="options__item__info">
            <p>Earth Spirit</p>
            <span>strength</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/rubick.png" height="100%" alt="Rubick" />
          <div class="options__item__info">
            <p>Rubick</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="agility">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/troll.png" height="100%" alt="Troll Warlord" />
          <div class="options__item__info">
            <p>Troll Warlord</p>
            <span>agility</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="strength">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/kunkka.png" height="100%" alt="Kunkka" />
          <div class="options__item__info">
            <p>Kunkka</p>
            <span>strength</span>
            <span>melee</span>
          </div>
        </div>
  
        <div class="options__item" data-type="intelligence">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/puck.png" height="100%" alt="Puck" />
          <div class="options__item__info">
            <p>Puck</p>
            <span>intelligence</span>
            <span>range</span>
          </div>
        </div>
  
        <div class="options__item" data-type="agility">
          <img src="https://meowlivia.s3.us-east-2.amazonaws.com/codepen/dota/jugger.png" height="100%" alt="Juggernaut" />
          <div class="options__item__info">
            <p>Juggernaut</p>
            <span>agility</span>
            <span>melee</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Cards;
