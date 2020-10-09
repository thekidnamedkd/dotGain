import React from 'react'
import { graphql, Link } from 'gatsby'

import { ChevronLeft } from 'react-feather'


import Layout from '../components/Layout'
import ProductForm from '../components/ProductForm'
import ProductGalleryThumbnails from '../components/ProductGalleryThumbnails'

import './ProductPage.css'

const ProductPage = ({ data }) => {
  const product = data.shopifyProduct
  const thisEdge = data.allServices.edges.find(
    edge => edge.node.id === product.id
  )

  return (
    <Layout title={product.title || false}>
      <article
        className="SingleService section light"
        itemScope
        itemType="http://schema.org/BlogPosting"
      >
        <div className="container skinny">
          <Link className="SingleService--BackButton" to="/products/">
            <ChevronLeft /> BACK
          </Link>
          <div className="SingleService--Content relative">
            <ProductGalleryThumbnails productimages={product.images} />

            {product.title && (
              <h2 className="SingleService--Title" itemProp="title">
                {product.title}
              </h2>
            )}

            <div className="SingleService--InnerContent">
              <ProductForm product={product} />
              <div
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default ProductPage

export const pageQuery = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        compareAtPrice
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }

    allServices: allShopifyProduct(sort: { fields: publishedAt, order: DESC }) {
      edges {
        node {
          id
        }
        next {
          title
          handle
        }
        previous {
          title
          handle
        }
      }
    }
  }
`
