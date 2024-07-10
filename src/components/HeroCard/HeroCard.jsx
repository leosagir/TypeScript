import React from 'react';
import './HeroCard.css';

export default function HeroCard({ hero }) {
    return (
        <div className={`hero-container ${hero.isDark ? 'dark' : ''}`}>
            <h4>{hero.name}</h4>
            <p>Age: {hero.age}</p>
            <img width={200} src={hero.image} alt={`${hero.name}`} />
            <p>Lightsaber colors:{" "}
            {hero.lightsaberColors.map((color, index) =>
                <span key={index}>{color}</span>
            )}
            </p>
        </div>
    );
}
