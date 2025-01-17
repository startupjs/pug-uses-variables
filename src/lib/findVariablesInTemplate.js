// @flow

import lexer from '@startupjs/pug-lexer'
import visitors from './visitors'
import State from './State'

export default function findVariablesInTemplate(template: string): VariableList {
  if (template) {
    const tokens = lexer(template)
    const state = new State()

    tokens.forEach(token => visitors(state, token, template))

    return state.getVariables()
  }

  return []
}
