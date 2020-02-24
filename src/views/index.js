import { h } from 'hyperapp';
import { Header } from './header';
import { Calculator } from './calculator';
import { Footer } from './footer';

const View = (state) => (
  <section class='hero is-fullheight'>
    <Header />
    <Calculator state={state} />
    <Footer />
  </section>
);

export { View };
