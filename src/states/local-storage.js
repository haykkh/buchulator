/**
 * @fileoverview Local storage module.
 *               Stores/loads state in local storage
 * @module states/local-storage
 */

const getStateFromStorage = () => JSON.parse(window.localStorage.getItem('buchulator'));

const storeStateInStorage = (state) => window.localStorage.setItem('buchulator', JSON.stringify(state));

export { getStateFromStorage, storeStateInStorage };
