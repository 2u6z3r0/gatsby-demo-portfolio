import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query siteMetadata {
      site {
        siteMetadata {
          title
        }
      }
    }
    `) 

  return (
    <nav>
      <h1>{data.site.siteMetadata.title}</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  )
}
