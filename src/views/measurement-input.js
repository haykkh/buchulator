import { h } from 'hyperapp';
import { updateAll } from '../actions';

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
