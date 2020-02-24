import { h } from 'hyperapp';
import { Header } from './header';
import { Calculator } from './calculator';
import { Footer } from './footer';

const View = (state) => (
  <section class='hero is-fullheight'>
    <Header />
    <Calculator state={state} />
    <TodoList items={state.items} />
    <TodoListDone items={state.items} />
    <Footer />
  </section>
);

export { View };
