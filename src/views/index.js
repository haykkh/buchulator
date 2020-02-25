/**
 * @fileoverview Main view file.
 * @module views/index
 * @see module:views/header
 * @see module:views/calculator
 * @see module:views/footer
 */

import { h } from 'hyperapp';
import { Header } from './header';
import { Calculator } from './calculator';
import { Footer } from './footer';

/**
 * Main view component.
 *
 * Creates fullheight hero (bulma)
 * Imports header, calculator, and footer components
 *
 * @param {!Object<string, number|boolean>} state
 *
 * @returns {JSX}
 */
const View = (state) => (
  <section class='hero is-fullheight'>
    <Header />
    <Calculator state={state} />
    <Footer />
  </section>
);

export { View };
