import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Word from "../components/word"

class WordTemplate extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const { word } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div className="word-page">
          <SEO
            title={word.english + "| Branko - englesko hrvatski riječnik otvorenog koda"}
            description={word.english + " prijevod na hrvatski jezik: " + word.croatian}
          />
          <Word data={word.node} />
          <Link className="back" to={"/"}>
          ← povratak na pretragu
          </Link>
        </div>
      </Layout>
    )
  }
}

export default WordTemplate


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allWordsJson {
      edges {
        node {
          english
          croatian
          note
          source
        }
      }
    }
  }
`