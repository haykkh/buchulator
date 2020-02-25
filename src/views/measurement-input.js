/**
 * @fileoverview Measurement input field component.
 * @module views/measurement-input
 * @see module:actions
 */

import { h } from 'hyperapp';
import { updateAll } from '../actions';

/**
 * If metric system used:
 *   and unit is volume:
 *     return 'ml'
 *   else unit is mass:
 *     return 'g'
 * else imperial system used:
 *   and unit is volume:
 *     return 'fl oz'
 *   else unit is mass:
 *     return 'oz'
 *
 * @param {boolean} metric indicates unit system used (metric or imperial (US))
 * @param {string} unitType type of unit ('volume' or 'mass')
 *
 * @returns {string} unit
 */
const Uniter = (metric, unitType) => (
  // eslint-disable-next-line no-nested-ternary
  metric
    ? unitType === 'volume'
      ? 'ml'
      : 'g'
    : unitType === 'volume'
      ? 'fl oz'
      : 'oz'
);

/**
 * Creates input field for measurement
 * Calls actions.updateAll to change all state variables onInput
 *
 * @param {number} value    variable from state eg: containerVolume
 * @param {number} ratio    ratio of variable relative to containerVolume
 * @param {string} unitType type of unit ('volume' or 'mass')
 * @param {boolean} metric  indicates unit system used (metric or imperial (US))
 *
 * @returns {JSX}
 */
const MeasurementInput = ({
  value, ratio, unitType, metric,
}) => (
  <td class="field has-addons">
    <p class="control">
      <input
      class="input measurement"
      type="number"
      step="any"
      placeholder={value}
      aria-label={value}
      value={value}
      // onInput change all state values
      onInput={[
        updateAll,
        (e) => ({
          updateValue: e.target.value,
          ratio,
        }),
      ]}
      />
    </p>
    <p class="control is-expanded unit">
      <a class={[unitType, ' button is-static is-fullwidth'].join('')}>
        {Uniter(metric, unitType)}
      </a>
    </p>
  </td>
);

export { MeasurementInput };
