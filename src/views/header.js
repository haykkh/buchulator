/**
 * @fileoverview Header component.
 * @module views/header
 */

import { h } from 'hyperapp';

/**
 * Creates a hero-head (bulma) header
 *
 * @returns {JSX}
 */
const Header = () => (
  <header class="hero-head">
    <h1 class="title has-text-centered">buchulator</h1>
  </header>
);

export { Header };
