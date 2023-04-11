import React from 'react'
import Layout from './Layout';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';


function Website() {

  return (
    <>
    <Layout>
      <Navbar/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </Layout>
    </>
  )
}

export default Website;