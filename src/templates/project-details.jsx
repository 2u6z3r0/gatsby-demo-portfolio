import { graphql } from "gatsby";
import React from "react";
import Layout from "../pages/components/Layout";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from "../styles/project-details.module.css";

export default function ProjectDetails({data}) {
  const htmlContent = data.markdownRemark.html;
  const {stack, title, featureImg} = data.markdownRemark.frontmatter;
  return <Layout>
    <div className={styles.details}>
      <h2>{ title }</h2>
      <h3>{ stack }</h3>
      <div className={styles.featured}>
        <GatsbyImage image={getImage(featureImg)} alt={title}/>
      </div>
      <div className={styles.html} dangerouslySetInnerHTML={{__html: htmlContent}}/>
    </div>
  </Layout>
}

export const query = graphql`
  query ProjectData($slug: String) {
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    frontmatter {
      stack
      title
      featureImg {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
    html
  }
}
`
