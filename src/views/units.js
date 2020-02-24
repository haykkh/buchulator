import { h } from 'hyperapp';
import { toImperial, toMetric } from '../actions';

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
