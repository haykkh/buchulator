/* eslint-disable no-unused-vars */
import { h } from 'hyperapp'
import { Header } from './header'
import { Calculator } from './calculator'
import { Footer } from './footer'
import { TodoList } from './todo-list'
import { TodoInput } from './todo-input'
import { TodoListDone } from './todo-list-done'
import { StateDisplay } from './state-display'

export const View = state => (
  <section class='hero is-fullheight'>
    <Header />
    <Calculator state={state} />
    <TodoList items={state.items} />
    <TodoListDone items={state.items} />
    <StateDisplay state={state} />
    <Footer />
  </section>
)