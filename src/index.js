/** @jsx h */
import { app } from 'hyperapp'
import { getStateFromStorage } from './states/local-storage'
import { Actions } from './actions/'
import { View } from './views/'
import 'bulma'

const getInitialState = () => getStateFromStorage() || ({
  containerVolume: 1000, 
  hotWaterVolume: 250,
  coldWaterVolume: 625,
  starterMass: 125,
  teaMass: 5,
  sugarMass: 5,
})

app({
  init: getInitialState(),
  view: View,
  node: document.getElementById('todo')
})
