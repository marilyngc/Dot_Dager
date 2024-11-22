import React, { useState } from 'react';
import youtube from "../../assets/youtube.jpg"
import insta from "../../assets/insta.jpg"
import live from "../../assets/live.jpg"
import discord from "../../assets/discord.jpg"
import reddi from "../../assets/reddit.jpg"

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const portfolioItems = [
    {
      imgSrc: youtube,
      title: "YOUTUBE",
      link: "https://www.youtube.com/@DotDager",
    },
    {
      imgSrc: live,
      title: "TWITCH",
      link: "https://www.twitch.tv/dagerxiv",
    },
    {
      imgSrc: insta,
      title: "INSTAGRAM",
      link: "https://www.instagram.com/dager.32",
    },
    {
      imgSrc: discord,
      title: "DISCORD",
      link: "https://discord.com/invite/2NessfQFvY",
    },
    {
      imgSrc: reddi ,
      title: "REDDIT",
      link: "https://www.reddit.com/user/DagerDotCSV",
    }
  ];

  return (
    <div className="portfolio">
        <h1>Redes Sociales</h1>
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="pentagon"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <a href={item.link}>
            <span className={`mask ${hoveredIndex === index ? 'hovering' : ''}`}></span>
            <img
              src={item.imgSrc}
              alt={item.title}
              className={hoveredIndex === index ? 'hovering' : ''}
            />
          </a>
          <div className="portfolio-title">
            <h4>
              {item.title}
              <span>Ver proyecto</span>
            </h4>
          </div>
        </div>
      ))}
      <div className="clearfix"></div>
    </div>
  );
};

export default Portfolio;
