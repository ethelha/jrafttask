import { Node } from 'tiptap'
import { toggleList, wrappingInputRule } from 'tiptap-commands'
// background-image: url(${url});
// let url = 'https://aatralcreations.com/wp-content/uploads/2020/05/placeholder-1-2.png'
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
          // style:'background-image: url(../../assets/icons/placeholder.png)',
          style:`
          width: 100%;
          display: block;
          `
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
