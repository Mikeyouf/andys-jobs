import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: pas de job ici" />
    <h1>Désolé, il n'y a pas de job ici</h1>
    <p>Mais vous trouverez certainement le job de vos rêves à <Link to="/">l'accueil.</Link></p>
  </Layout>
)

export default NotFoundPage
