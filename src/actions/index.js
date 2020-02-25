/**
 * @fileoverview Actions file.
 * @module actions
 * @see module:states/local-storage
 */

import { storeStateInStorage } from '../states/local-storage';

// Millilitre to fl oz conversion ratio
const volumeConversionRatio = 0.03519508;

// Gram to oz conversion ratio
const massConversionRatio = 0.035273;

/**
 * Rounds number to max 2 decimal points
 *
 * @param {number} num number to round
 *
 * @returns {number} num rounded to max 2 decimal points
 */
const rounder = (num) => Math.round((num + Number.EPSILON) * 100) / 100;

/**
 * Swaps innerHTML of elements with newHTML
 *
 * @param {!Array<HTMLElement>} elements HTML elements to be swapped
 * @param {string} newHTML
 *
 * @returns {null}
 */
const innerHTMLSwapper = (elements, newHTML) => (
  elements.map((x) => x.innerHTML = newHTML)
);

/**
 * Converts units between metric and imperial
 * Stores new state in storage
 *
 * @param {!Object<string, number|boolean>} state
 * @param {number} volumeRatio ratio to multiply volumes by
 * @param {number} massRatio ratio to multiply masses by
 * @param {boolean} metric indicates unit system used (metric or imperial (US))
 *
 * @returns {!Object<string, number|boolean>} new state
 */
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

/**
 * Converts to imperial
 *
 * If not already imperial
 *   swap unit labels from metric to imperial
 *   swap unit switching buttons
 *   return converted values
 * else
 *   return state
 *
 * @param {!Object<string, number|boolean>} state
 *
 * @returns {!Object<string, number|boolean>} converted values or original state
 */
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
  return state;
};

/**
 * Converts to metric
 *
 * If not already metric
 *   swap unit labels from imperial to metric
 *   swap unit switching buttons
 *   return converted values
 * else
 *   return state
 *
 * @param {!Object<string, number|boolean>} state
 *
 * @returns {!Object<string, number|boolean>} converted values or original state
 */
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
  return state;
};

/**
 * Update all values
 *
 * fn doesn't know which state value to update
 * so ratio is passed along with it
 *
 * containerVolume = updateValue / ratio
 *
 * Using this function it sets the new container volume
 * then sets all other values based off of that
 *
 * Stores new state in local storage
 *
 * @param {!Object<string, number|boolean>} state
 * @param {number} updateValue new value
 * @param {ratio} ratio ratio of variable relative to containerVolume
 *
 * @returns {!Object<string, number|boolean>} new state
 */
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
