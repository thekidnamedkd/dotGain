import React from 'react'
import PageHeader from '../components/PageHeader'
import Layout from '../components/Layout'

import Cart from '../components/Cart'

const CartPage = () => (
  <Layout>
  <PageHeader 
    title="cart" 
    subtitle="these items will be fulfilled by independent, women, and POC-owned shops"
    backgroundImage="../images/downtown.jpg"  />
    <section className="section">
      <div className="container">
        <h2>Cart</h2>
        <Cart />
      </div>
    </section>
  </Layout>
)

export default CartPage
