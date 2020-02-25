/**
 * @fileoverview Main file. Inits hyperapp.
 * @see module:states/local-storage
 * @see module:views/index
 */

/** @jsx h */
import { app } from 'hyperapp';
import withDebug from 'hyperapp-debug';
import { getStateFromStorage } from './states/local-storage';
import { View } from './views';
import './styles/styles.scss';

/**
 * Gets or sets the state to initialise app
 *
 * If there is a state stored in storage return that
 * otherwise return default starter state
 *
 * @returns {Object<string, number|boolean>}
 */
const getInitialState = () => getStateFromStorage() || ({
  containerVolume: 1000,
  hotWaterVolume: 250,
  coldWaterVolume: 625,
  starterMass: 125,
  teaMass: 5,
  sugarMass: 50,
  metric: true,
});

// If in development, launch with hyperapp-debug, otherwise launch regularly.
if (process.env.NODE_ENV === 'development') {
  withDebug(app)({
    init: getInitialState(),
    view: View,
    node: document.getElementById('buchulator'),
  });
} else {
  app({
    init: getInitialState(),
    view: View,
    node: document.getElementById('buchulator'),
  });
}
