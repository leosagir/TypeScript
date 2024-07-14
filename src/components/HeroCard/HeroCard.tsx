// src/components/HeroCard.tsx
import React from 'react';
import { Hero } from '../../lessons/lesson08/data';
import styles from './HeroCard.module.css';

interface HeroCardProps {
  hero: Hero;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero }) => {
  return (
    <div className={`${styles.heroContainer} ${hero.isDark ? styles.dark : ''}`}>
      <h4>{hero.name}</h4>
      <p>Age: {hero.age}</p>
      <img width={200} src={hero.image} alt={`${hero.name}`} />
      <p>
        Lightsaber colors:{" "}
        {hero.lightsaberColors.map((color, index) => (
          <span key={index} className={styles.colorSpan}>{color}</span>
        ))}
      </p>
    </div>
  );
}

export default HeroCard;
