/**
 * @fileoverview Table of measurements component.
 * @module views/tabler
 * @see module:views/measurement-input
 */

import { h } from 'hyperapp';
import { MeasurementInput } from './measurement-input';

/**
 * Creates row element for each measurement
 * Imports input field for measurement (MeasurementInput)
 *
 * @param {number} stateVar variable from state eg: containerVolume
 * @param {string} varText  label for variable
 * @param {number} ratio    ratio of variable relative to containerVolume
 * @param {string} unitType type of unit ('volume' or 'mass')
 * @param {boolean} metric  indicates unit system used (metric or imperial (US))
 *
 * @returns {JSX}
 */
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
);

/**
 * Creates table of measurements
 * Uses Rower to generate rows
 *
 * @param {!Object<string, number|boolean>} state
 *
 * @returns {JSX}
 */
const Tabler = ({ state }) => (
  <table class="table">
    {Rower(state.containerVolume, 'Container Volume', 1, 'volume', state.metric)}
    {Rower(state.hotWaterVolume, 'Hot Water Volume', 0.25, 'volume', state.metric)}
    {Rower(state.coldWaterVolume, 'Cold Water Volume', 0.625, 'volume', state.metric)}
    {Rower(state.starterMass, 'Starter Volume', 0.125, 'volume', state.metric)}
    {Rower(state.teaMass, 'Tea Mass', 0.005, 'mass', state.metric)}
    {Rower(state.sugarMass, 'Sugar Mass', 0.05, 'mass', state.metric)}
  </table>
);

export { Tabler };
