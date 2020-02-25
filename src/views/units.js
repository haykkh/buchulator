/**
 * @fileoverview Unit switcher component.
 * @module views/units
 * @see module:actions
 */
import { h } from 'hyperapp';
import { toImperial, toMetric } from '../actions';

/**
 * Unit switcher component.
 *
 * Creates bulma buttons to switch between metric and imperial units
 * Calls toImperial/toMetric from actions to convert measurement values.
 *
 * @param {boolean} metric indicates unit system used
 *                  metric: true  -> metric system
 *                  metric: false -> imperial (US) system
 *
 * @returns {JSX}
 */
const Units = ({ metric }) => (
  <div class="buttons has-addons is-centered">
    <button
    class={metric ? 'button is-warning is-light is-selected' : 'button is-light'}
    id="metric"
    onclick={toMetric}>
      Metric
    </button>
    <button
    class={metric ? 'button is-light' : 'button is-warning is-light is-selected'}
    id="imperial"
    onclick={toImperial}>
      Imperial
    </button>
  </div>
);

export { Units };
