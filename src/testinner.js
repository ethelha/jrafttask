import { Node } from 'tiptap'
import Component from '@/components/placeholder'

export default class Testinner extends Node {

  get name() {
    return 'testinner'
  }
  get view() {
    return Component
  }
  get schema() {
    return {
      attrs: {
        done: {
          default: false,
        },
        src:{
          default: 'https://aatralcreations.com/wp-content/uploads/2020/05/placeholder-1-2.png'
        },
      },
      group: 'block',
      draggable: true,
      content: 'paragraph+',
      toDOM: node => {
        const { done } = node.attrs
        console.log(node.attrs)
        return [ 'div', {
            'data-done': done.toString(),
            class: 'thePlaceholder',
            contenteditable: 'false'    
          },
        ]
      },
      parseDOM: [{
        tag: 'div.thePlaceholder',
        getAttrs: dom => (
          {
          done: dom.getAttribute('data-done') === 'true',
          src: dom.getAttribute('src'),
        }
        ),
        
      }],
    }
  }
}
