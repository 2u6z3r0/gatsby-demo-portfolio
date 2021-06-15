import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../../styles/projects.module.css'

export default function Project({data}) {
  console.log(data);
  const projects = data.projects.nodes;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects and Products</h2>
        <div className={styles.projects}>
          {projects.map(project => (
            <Link to={"/projects/" + project.frontmatter.slug } key={project.id}>
              <div>
                <GatsbyImage image={getImage(project.frontmatter.thumb)} alt={project.frontmatter.title}/>
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      id
      frontmatter {
        title
        stack
        slug
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
  contact: site {
    siteMetadata {
      contact
    }
  }
}`
