const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const wordTemplate = path.resolve(`./src/templates/word.js`)
  return graphql(
    `
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
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const words = result.data.allWordsJson.edges

    words.forEach((word, index) => {
      const previous = index === words.length - 1 ? null : words[index + 1].node
      const next = index === 0 ? null : words[index - 1].node
      const slug = slugify(word.node.english)

      createPage({
        path: slug,
        component: wordTemplate,
        context: {
          slug: slug,
          word: word
        },
      })
    })
    return null
  })
}