import { Node } from 'tiptap'
import { toggleList, wrappingInputRule } from 'tiptap-commands'
export default class Testout extends Node {

  get name() {
    return 'testout'
  }

  get schema() {
    return {
      group: 'block',
      content: 'testinner+',
      toDOM: () => ['div', { 
        'data-type': this.name,
         }, 0],
      parseDOM: [{
        tag: `[data-type="${this.name}"]`,
      }],
    }
  }

  commands({ type, schema }) {
    return () => toggleList(type, schema.nodes.testinner)
  }

  inputRules({ type }) {
    return [
      wrappingInputRule(/^\s*(\[ \])\s$/, type),
    ]
  }

}
