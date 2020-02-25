import { storeStateInStorage } from '../states/local-storage';

const volumeConversionRatio = 0.03519508;
const massConversionRatio = 0.035273;

const rounder = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

const innerHTMLSwapper = (elements, newHTML) => (
  elements.map((x) => x.innerHTML = newHTML)
);

const unitConvert = (state, volumeRatio, massRatio, metric) => {
  const newState = {
    containerVolume: rounder(state.containerVolume * volumeRatio),
    hotWaterVolume: rounder(state.hotWaterVolume * volumeRatio),
    coldWaterVolume: rounder(state.coldWaterVolume * volumeRatio),
    starterMass: rounder(state.starterMass * massRatio),
    teaMass: rounder(state.teaMass * massRatio),
    sugarMass: rounder(state.sugarMass * massRatio),
    metric,
  };
  storeStateInStorage(newState);
  return newState;
};

const toImperial = () => (state) => {
  if (!document.getElementById('imperial').classList.contains('is-selected')) {
    const volumeElements = Array.from(document.getElementsByClassName('volume'));
    const massElements = Array.from(document.getElementsByClassName('mass'));
    innerHTMLSwapper(volumeElements, 'fl oz');
    innerHTMLSwapper(massElements, 'oz');
    document.getElementById('metric').setAttribute('class', 'button is-light');
    document.getElementById('imperial').setAttribute('class', 'button is-warning is-light is-selected');
    return unitConvert(state, volumeConversionRatio, massConversionRatio, false);
  }
  return null;
};

const toMetric = () => (state) => {
  if (!document.getElementById('metric').classList.contains('is-selected')) {
    const volumeElements = Array.from(document.getElementsByClassName('volume'));
    const massElements = Array.from(document.getElementsByClassName('mass'));
    innerHTMLSwapper(volumeElements, 'ml');
    innerHTMLSwapper(massElements, 'g');
    document.getElementById('imperial').setAttribute('class', 'button is-light');
    document.getElementById('metric').setAttribute('class', 'button is-warning is-light is-selected');
    return unitConvert(state, (1 / volumeConversionRatio), (1 / massConversionRatio), true);
  }
  return null;
};

const updateAll = (state, { updateValue, ratio }) => {
  const newContainer = updateValue / ratio;
  const newState = {
    containerVolume: rounder(newContainer),
    hotWaterVolume: rounder(0.25 * newContainer),
    coldWaterVolume: rounder(0.625 * newContainer),
    starterMass: rounder(0.125 * newContainer),
    teaMass: rounder(0.005 * newContainer),
    sugarMass: rounder(0.05 * newContainer),
    metric: state.metric,
  };
  storeStateInStorage(newState);
  return newState;
};

export { toImperial, toMetric, updateAll };
