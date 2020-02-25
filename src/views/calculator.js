/**
 * @fileoverview Calculator component.
 * @module views/calculator
 * @see module:views/units
 * @see module:views/tabler
 */

import { h } from 'hyperapp';
import { Units } from './units';
import { Tabler } from './tabler';

/**
 * Calculator component.
 * Creates hero-body container (bulma) div for kombucha calculator
 * Imports Unit swapper (Units) and table of measurements (Tabler)
 *
 * @param {!Object<string, number|boolean>} state
 *
 * @returns {JSX}
 */
const Calculator = ({ state }) => (
  <div class="hero-body container">
    <section class="container">
      <Units metric={state.metric} />
      <Tabler state={state} />
    </section>
  </div>
);

export { Calculator };
