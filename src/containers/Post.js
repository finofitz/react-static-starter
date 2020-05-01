import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ post }) => (
      <div>
        <Link to="/blog/">{'<'} Back</Link>
        <br />
        <h3>{post.Options[0].Caption}</h3>
        <p>{post.Options[0].SupportingText}</p>
      </div>
    )}
  />
)
