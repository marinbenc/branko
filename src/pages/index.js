import React from "react"
import { graphql } from "gatsby"
import { Index } from "elasticlunr"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Word from "../components/word"

class BlogIndex extends React.Component {

  constructor(props) {
    super(props)
    const words = this.props.data.allWordsJson.edges
    words.sort((p1, p2) => { return p1.node.english.toLowerCase() < p2.node.english.toLowerCase() ? -1 : 1 })
    const grouped = this.groupByFirstLetter(words)
    this.allData = grouped

    console.log(this.props.data)

    this.state = {
      query: ``,
      results: this.allData,
    }
  }

  getOrCreateSearchIndex = () =>
  this.index
    ? this.index
    : // Create an elastic lunr index and hydrate with graphql query results
      Index.load(this.props.data.siteSearchIndex.index)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateSearchIndex()

    const results = this.index
      .search(query, { expand: true }) // Accept partial matches
      .map(({ ref }) => {return {node: this.index.documentStore.getDoc(ref)}})
      .filter(({ node }) => node != undefined)
    results.sort((p1, p2) => { return p1.node.english.toLowerCase() < p2.node.english.toLowerCase() ? -1 : 1 })
    const grouped = this.groupByFirstLetter(results)

    this.setState({
      query,
      results: grouped,
    })
  }

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
    const grouped = this.state.query ? this.state.results : this.allData

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Branko - englesko hrvatski IT riječnik otvorenog koda"
          keywords={[`prijevod`, `hrvatsko`, `engleski`, `računarstvo`, `programiranje`, `IT`]}
        />
        <input className="search-box" type="text" value={this.state.query} onChange={this.search} placeholder={"Traži"}/>
        <nav>
          <ul className="letters">
            {grouped.map(group => {
              return (
                <li>
                  <a href={"#" + group.startsWith}>{group.startsWith}</a>
                </li>
              )
            })}
          </ul>
        </nav>
        {grouped.map(group => {
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
    siteSearchIndex {
      index
    }
  }
`
