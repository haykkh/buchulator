const getStateFromStorage = () =>
  JSON.parse(window.localStorage.getItem('buchulator'))

const storeStateInStorage = (state) =>
  window.localStorage.setItem('buchulator', JSON.stringify(state))

export { getStateFromStorage, storeStateInStorage }
