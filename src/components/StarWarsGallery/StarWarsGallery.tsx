// src/components/StarWarsGallery.tsx
import React from 'react';
import { forceUsers } from '../../lessons/lesson08/data';
import HeroCard from '../HeroCard/HeroCard';
import styles from './StarWarsGallery.module.css';

const StarWarsGallery: React.FC = () => {
  return (
    <div className={styles.lessonContainer}>      
      <div className={styles.forceUsersGrid}>
        {forceUsers.map((hero, index) => (
          <HeroCard key={index} hero={hero} />
        ))}
      </div>
    </div>
  );
}

export default StarWarsGallery;
