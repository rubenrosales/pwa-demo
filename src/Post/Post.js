import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullPost from './FullPost'
import SinglePost from './SinglePost'

// The Roster component matches one of two different routes
// depending on the full pathname
const Post = () => (
  <Switch>
    <Route exact path='/post' component={FullPost}/>
    <Route path='/post/:name' component={SinglePost}/>
  </Switch>
)


export default Post
