import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
  <RouteData
    render={({ posts }) => (
      <div>
        <h1>It's blog time.</h1>
        <br />
        All Posts:
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/blog/post/${post.QuestionID}/`}>{post.QuestionID}</Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
)
