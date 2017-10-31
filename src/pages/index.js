import React from 'react'
import Link from 'gatsby-link'


const IndexPage = () => (
  <div>
    <h2>Welcome to Gatsby with Reactstrap and Bootstrap</h2>
      <Link to="/page-2/">Go to page 2</Link>
      <br/>
      <Link to="/css-modules/">Go to css modules</Link>
      <br/>
      <Link to="/bootstrap/">Go to bootstrap</Link>

  </div>


)

export default IndexPage
