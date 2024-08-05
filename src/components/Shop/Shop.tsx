import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ProductCard from './ProductCard';
import styles from './Shop.module.css';
import Loader from '../Loader/Loader';
import { getProducts } from '../features/products/productsAction';
import { RootState, AppDispatch } from '../../redux/store';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

export default function Shop() {
  const dispatch = useDispatch<AppDispatch>();
  const { products, isLoading, error } = useSelector((state: RootState) => state.products);
  const [limit, setLimit] = useState<number>(5); // Default limit

  const formik = useFormik({
    initialValues: {
      limit: 5
    },
    validationSchema: Yup.object().shape({
      limit: Yup.number()
        .required('Please enter a number')
        .min(1, 'Minimum value is 1')
        .max(20, 'Maximum value is 20')
        .integer('Must be an integer')
    }),
    onSubmit: (values) => {
      setLimit(values.limit);
    }
  });

  useEffect(() => {
    dispatch(getProducts(limit));
  }, [dispatch, limit]);

  return (
    <div className={styles.shop}>
      <h6>Выберите количество товаров на странице от 1 до 20</h6>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <input
          type="number"
          name="limit"
          value={formik.values.limit}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Number of products"
        />
        {formik.touched.limit && formik.errors.limit ? (
          <div className={styles.error}>{formik.errors.limit}</div>
        ) : null}
        <button type="submit">Update</button>
      </form>

      {isLoading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}
