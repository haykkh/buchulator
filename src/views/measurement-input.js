import { h } from 'hyperapp'
import { storeStateInStorage } from '../states/local-storage'
import { updateAll } from '../actions'

export const MeasurementInput = ({ value, ratio, unit, unitType }) => (
  <td class="field has-addons">
    <p class="control">
      <input
      class="input measurement"
      type="number"
      step="any"
      placeholder={value}
      aria-label={value}
      value={value}
      onInput={[
        updateAll, 
        e => ({
          updateValue: e.target.value,
          ratio: ratio,
        })
      ]}
      />
    </p>
    <p class="control is-expanded unit">
      <a class={[unitType, " button is-static is-fullwidth"].join('')}>
        {unit}
      </a>
    </p>
  </td>
)
