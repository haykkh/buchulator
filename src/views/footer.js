/**
 * @fileoverview Footer component.
 * @module views/footer
 */

import { h } from 'hyperapp';

/**
 * Creates a hero-foot (bulma) footer
 *
 * @returns {JSX}
 */
const Footer = () => (
  <footer class="hero-foot footer">
    <div class="has-text-centered">
      made with <span class="red">❤</span> by <a class="red" href="https://hayk.earth">Հայկ</a>
    </div>
  </footer>
);

export { Footer };
