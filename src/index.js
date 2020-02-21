/** @jsx h */
import { app } from 'hyperapp';
import withDebug from 'hyperapp-debug';
import { getStateFromStorage } from './states/local-storage';
import { Actions } from './actions';
import { View } from './views';
import './styles/styles.scss';

const getInitialState = () => getStateFromStorage() || ({
  containerVolume: 1000,
  hotWaterVolume: 250,
  coldWaterVolume: 625,
  starterMass: 125,
  teaMass: 5,
  sugarMass: 50,
  metric: true,
});

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
