import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export default function Word(props) {
  const { english, croatian, note, source } = props.data
  return (
    <div className="word" key={english}>
      <h3>
        <Link to={slugify(english)}>
          {english}
        </Link>
      </h3>
      <p><ReactMarkdown source={croatian} /></p>
      {note && <small>{"note"}</small>}
      {source && <small className="source">(izvor: <ReactMarkdown source={source} />)</small>}
    </div>
  )
}