import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '~/pages/Home'
import PlaceList from '~/pages/PlaceList'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componente={Home} />
      <Route path="/cart" componente={PlaceList} />
    </Switch>
  )
}
