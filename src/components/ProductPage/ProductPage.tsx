import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ProductPage.module.css';
import MyButton from '../myButton/myButton';
import Loader from '../Loader/Loader';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <Loader/>;
  }

  return (
    <div className={styles.productPage}>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price.toFixed(2)}</p>
      <Link to={'/shop'}><MyButton name='back to shop' type={'button'} /></Link>

    </div>
  );
}
