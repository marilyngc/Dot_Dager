import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import perfil from "../../assets/dot/perfil.png"
import mascota from "../../assets/dot/mascota.jpg"
import hacker from "../../assets/dot/hacker.jpg"
import pepinito from "../../assets/dot/pepinito.png"
import cepillo from "../../assets/dot/cepillo.png"
import filosofía from "../../assets/dot/filosofia.png"
// Datos de las diapositivas
const slides = [
    {
      imgSrc: perfil,
      title: "Sobre Mi Pasión por la Programación",
      date: "La Programación: Mi Lenguaje Creativo",
      text: "Soy Dot Dager, y la programación es mi pasión. A través del código, puedo dar vida a ideas y resolver problemas de forma creativa. Me encanta aprender nuevas tecnologías y aplicar mis conocimientos en proyectos desafiantes.",
    },
    {
      imgSrc: pepinito,
      title: "Un Gusto Particular por los Pepinos",
      date: "El Pepino: Mi Snack Refrescante",
      text: "Sí, me encantan los pepinos. Son refrescantes, crujientes y el snack perfecto para relajarse. Si los has probado en ensaladas o como snack, sabes de lo que hablo. Me gusta disfrutar de las cosas simples de la vida.",
    },
    {
      imgSrc: mascota,
      title: "Mi Amor por los Gatos",
      date: "Gatos: Compañeros de Vida",
      text: "Siempre he tenido gatos. Su tranquilidad, independencia y curiosidad son cualidades que admiro. Son parte fundamental de mi vida y me enseñan a encontrar paz en medio del caos.",
    },
    {
      imgSrc: filosofía,
      title: "Filosofía y Reflexión",
      date: "La Filosofía: Preguntas que Definen",
      text: "La filosofía me permite dar sentido al mundo. Me fascinan las preguntas sobre existencia, conocimiento y ética. Reflexionar sobre estos temas me da nuevas perspectivas sobre la vida.",
    },
    {
      imgSrc: cepillo,
      title: "Mi Amor por la Guitarra",
      date: "La Guitarra: Mi Voz Musical",
      text: "La guitarra es mi compañera de inspiración. Tocar la guitarra me permite expresar lo que siento. La música transmite emociones que las palabras no pueden, y me encanta explorar nuevos sonidos.",
    },
    // Agrega más diapositivas aquí
  ];
  

const CardInfo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;
  const [state, setState] = useState(1); // Estado para manejar las pantallas


  const [isTransitioned, setIsTransitioned] = useState(false);

  const handleButtonClick = () => {
    setIsTransitioned(!isTransitioned);
  };
  // Función para cambiar la diapositiva
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Función para ir a una diapositiva específica
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Configurar un intervalo para cambiar automáticamente de diapositiva
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 9000); // Cambiar cada 5 segundos
    return () => clearInterval(intervalId); // Limpiar el intervalo al desmontar
  }, []);

  return ( 
  <div className={`login ${isTransitioned ? 'is-transitioned' : ''}`}>
<div className="belt"> 
<div className="state state-1">
    <div className="blog-slider ">
    

      {/* Contenedor de las diapositivas */}
      <motion.div
        key={currentIndex}
        className="blog-slider__item"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }} // Duración de la transición de desvanecimiento
      >
        <div className="blog-slider__img">
          <img src={slides[currentIndex].imgSrc} alt={slides[currentIndex].title} />
        </div>
        <div className="blog-slider__content">
          <span className="blog-slider__code">{slides[currentIndex].date}</span>
          <div className="blog-slider__title">{slides[currentIndex].title}</div>
          <div className="blog-slider__text">{slides[currentIndex].text}</div>
          
          
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
      </motion.div>

      {/* Paginación con bullets */}
      <div className="blog-slider__pagination swiper-pagination-clickable swiper-pagination-bullets">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${index === currentIndex ? 'swiper-pagination-bullet-active' : ''}`}
            onClick={() => goToSlide(index)}
            role="button"
            aria-label={`Go to slide ${index + 1}`}
            tabIndex="0"
          ></span>
        ))}
      </div>

      {/* Botón de navegación
      <button onClick={nextSlide} className="blog-slider__next">
        Next
      </button> */}
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
  );
};

export default CardInfo;
