import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';

import { Container } from './styles';
import ProductItem from '../../components/ProductItem/ProductItem';
import api from '../../services/api';

import { addToCartRequest } from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

function Home(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await api.get(`/products`);

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        extraData={props}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <ProductItem product={item} />}
      />
    </Container>
  );
}

export default connect(null, { addToCartRequest })(Home);
