import { h } from 'hyperapp'
import { MeasurementInput } from './measurement-input'

const Rower = (stateVar, varText, ratio, unitType, metric) => (
  <tr>
    <td class="vertical-middle">{varText}</td>
    <MeasurementInput 
    value={stateVar}
    ratio={ratio}
    metric={metric}
    unitType={unitType}
    />
  </tr>
)

export const Tabler = ({ state }) => (
  <table class="table">
    {Rower(state.containerVolume, 'Container Volume', 1, 'volume', state.metric)}
    {Rower(state.hotWaterVolume, 'Hot Water Volume', 0.25, 'volume', state.metric)}
    {Rower(state.coldWaterVolume, 'Cold Water Volume', 0.625, 'volume', state.metric)}
    {Rower(state.starterMass, 'Starter Volume', 0.125, 'volume', state.metric)}
    {Rower(state.teaMass, 'Tea Mass', 0.005, 'mass', state.metric)}
    {Rower(state.sugarMass, 'Sugar Mass', 0.05, 'mass', state.metric)}
  </table>
)
