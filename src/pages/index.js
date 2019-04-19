import React from "react"
import { Link, graphql } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Word from "../components/word"

class BlogIndex extends React.Component {

  groupByFirstLetter = (posts) => {
    const reduced = posts.reduce((acc, { node }) => {
      const startsWith = node.english.charAt(0).toLowerCase()
      if (!acc[startsWith]) {
        acc[startsWith] = {startsWith, children: [node]}
      } else {
        acc[startsWith].children.push(node)
      }
      return acc
    }, {})

    return Object.values(reduced)
  }

  renderWord = (node) => {
    return (
      <Word data={node} />
    )
  }

  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allWordsJson.edges
    posts.sort((p1, p2) => { return p1.node.english.toLowerCase() < p2.node.english.toLowerCase() ? -1 : 1 })
    const grouped = this.groupByFirstLetter(posts)

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Branko - englesko hrvatski IT riječnik otvorenog koda"
          keywords={[`prijevod`, `hrvatsko`, `engleski`, `računarstvo`, `programiranje`, `IT`]}
        />
        <nav>
          <ul className="letters">
            {grouped.map((group) => {
              return (
                <li>
                  <a href={"#" + group.startsWith}>{group.startsWith}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        {grouped.map((group) => {
          return (
            <div className="words-for-letter" id={group.startsWith}>
              <h2>
                <a href={"#" + group.startsWith}>{group.startsWith}</a>
              </h2>
              {group.children.map(this.renderWord)}
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

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
