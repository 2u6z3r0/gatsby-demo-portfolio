import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "./components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as styles from "../styles/home.module.css"

export default function Home({ data }) {
  console.log(data)
  const { title, description } = data.siteData.siteMetadata
  const bannerImg = getImage(data.imageData)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX Designer & Web Developer based out in Belagavi</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage image={bannerImg} alt="Banner Image" />
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    siteData: site {
      siteMetadata {
        title
        description
      }
    }
    imageData: file(relativePath: { eq: "banner.png" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
