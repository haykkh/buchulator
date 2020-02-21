import { h } from 'hyperapp'
import { MeasurementInput } from './measurement-input'

const Rower = (stateVar, varText, ratio, unit, unitType) => (
  <tr>
    <td class="vertical-middle">{varText}</td>
    <MeasurementInput 
    value={stateVar}
    ratio={ratio}
    unit={unit}
    unitType={unitType}
    />
  </tr>
)

export const Tabler = ({ state }) => (
  <table class="table">
    {Rower(state.containerVolume, 'Container Volume', 1, 'ml', 'volume')}
    {Rower(state.hotWaterVolume, 'Hot Water Volume', 0.25, 'ml', 'volume')}
    {Rower(state.coldWaterVolume, 'Cold Water Volume', 0.625, 'ml', 'volume')}
    {Rower(state.starterMass, 'Starter Volume', 0.125, 'ml', 'volume')}
    {Rower(state.teaMass, 'Tea Mass', 0.005, 'g', 'mass')}
    {Rower(state.sugarMass, 'Sugar Mass', 0.05, 'g', 'mass')}
  </table>
)
