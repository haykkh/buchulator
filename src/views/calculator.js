import { h } from 'hyperapp'
import { Units } from './units'
import { Tabler } from './tabler'

export const Calculator = ({ state }) => (
  <div class="hero-body container">
    <section class="container">
      <Units metric={state.metric} />
      <Tabler state={state} />
    </section>
  </div>
)
