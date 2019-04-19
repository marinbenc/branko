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
          englesko hrvatski IT rječnik otvorenog koda
        </h2>
      </div>
    )

    return (
      <div className="root">
        <header>
          {header}
          <a className="github-link" href="https://github.com/marinbenc/branko">Dodaj novu riječ</a>
        </header>
        <main>{children}</main>
        <footer>
          Branko je <a href="https://github.com/marinbenc/branko">rječnik otvorenog koda i svi su pozvani dodati nove riječi</a>.<br />
          Održava <a href="http://marinbenc.com">Marin Benčević</a>.
        </footer>
      </div>
    )
  }
}

export default Layout
