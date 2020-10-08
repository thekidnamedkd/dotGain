import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProductGrid from '../components/ProductGrid'

const ServicesPage = () => (
  <Layout>
    <PageHeader
      title="dotGain store"
      subtitle="support these artists, support these shops"
      backgroundImage="../images/downtown.jpg"
    />
    <section className="section">
      <div className="container">
        <ProductGrid />
      </div>
    </section>
  </Layout>
)

export default ServicesPage
