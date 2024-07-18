import React, { useState, useEffect } from 'react';
import styles from './Lesson.module.css'
import MyButton from '../../components/myButton/myButton';

// Компонент индикатора загрузки
const Spinner = () => (
  <div className={styles.spinner}></div>
);

// Интерфейс для фактов о кошках
interface CatFact {
  fact: string;
}

const Lesson10 = () => {
  const [facts, setFacts] = useState<CatFact[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCatFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFacts(prevFacts => [...prevFacts, data]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatFact();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Cat Facts</h1>
      {loading && <Spinner />}
      {facts.length > 0 && (
        <div className={styles.catFactsContainer}>
          {facts.map((fact, index) => (
            <p key={index}>{fact.fact}</p>
          ))}
        </div>
      )}
      <div className={styles.button}>
        <MyButton onClick={fetchCatFact} type='button' name='GET MORE INFO'/>
        <MyButton onClick={() => setFacts([])} type='button' name='DELETE ALL DATA'/>                
      </div>
    </div>
  );
};

export default Lesson10;
