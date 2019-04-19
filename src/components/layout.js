import React from "react"
import { Link } from "gatsby"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const header = (
      <div>
        <h1 className="site-title">
          <Link to={`/`}>
            {title}
          </Link>
        </h1>
        <h2 className="site-subtitle">
          englesko hrvatski IT riječnik otvorenog koda
        </h2>
      </div>
    )

    return (
      <div className="root">
        <header>{header}</header>
        <main>{children}</main>
        <footer>
          Branko je <a href="github.com">riječnik otvorenog koda i svi su pozvani dodati nove riječi</a>.<br />
          Održava <a href="marinbenc.com">Marin Benčević</a>.
        </footer>
      </div>
    )
  }
}

export default Layout
