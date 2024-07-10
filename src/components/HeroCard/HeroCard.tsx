import React from 'react';
import './HeroCard.css';

interface Hero {
  name: string;
  age: number;
  image: string;
  lightsaberColors: string[];
  isDark: boolean;
}

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className={`hero-container ${hero.isDark ? 'dark' : ''}`}>
      <h4>{hero.name}</h4>
      <p>Age: {hero.age}</p>
      <img width={200} src={hero.image} alt={`${hero.name}`} />
      <p>
        Lightsaber colors:{" "}
        {hero.lightsaberColors.map((color, index) => (
          <span key={index}>{color}</span>
        ))}
      </p>
    </div>
  );
}

export default HeroCard;

