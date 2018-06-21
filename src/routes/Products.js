import React from 'react';
import { connect } from 'dva';
import ProductList from '../components/ProductList';


const Products = ({ dispatch, products }) => {
  console.log(products);
  function handleDelete(id){
    dispatch({
      type: 'products/delayDelete',
      payload: id
    });
  }
  return (
    <div>
      
      <h2>产品页面</h2>
      <ProductList products={[]} onDelete={handleDelete}></ProductList>
    </div>
  )
}


export default connect(({test}) => {
  console.log(test);
  return {}
})(Products);