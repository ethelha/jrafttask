import { Node } from 'tiptap'
// let url = 'https://aatralcreations.com/wp-content/uploads/2020/05/placeholder-1-2.png'

export default class Testinner extends Node {

  get name() {
    return 'testinner'
  }

  get defaultOptions() {
    return {
      nested: false,
    }
  }
  get view() {

    return {
      props: ['node', 'updateAttrs','view'],
      data(){
      return{
          url: this.node.attrs.src,
          editorWidth: this.view.docView.nodeDOM.clientWidth,
          pic:{
            width: this.view.docView.nodeDOM.clientWidth+'px',
            height: (this.view.docView.nodeDOM.clientWidth*2)/3+'px',
            size: 'cover'
          }
       } 
      },
      methods: {
        onChange(event) {
          let that = this
          const newImg = new Image();
          var fileList = event.target.files[0]
          if(fileList){

          var reader = new FileReader();

          reader.onload = function(e) {
            let src = e.target.result  
            const setBg = event.target.parentNode
            newImg.src = src;
            // setBg.append(newImg);
          if(newImg){
            this.pic = {
              width: '100%',
              height: newImg.height
            }       
            
            that.updateAttrs(
              {
              done: true,
              src: src
              })  
              if(that.node.attrs.done){
              // setBg.remove()
              setBg.replaceWith(newImg);
              }
 
           }
          }
          reader.readAsDataURL(fileList); 
        }
      },
        
      },
      template: `
      <div class="thePlaceholder" 
      :data-type="node.type.name" :data-done="node.attrs.done.toString()">
      <label class="inputfileLabel" 
      :style="{'background-image': 'url('+this.url+')','width': this.pic.width, 'height': this.pic.height, 'background-size': this.pic.size}">
        <input type="file" placeholder="Click to upload" @change="onChange"/>
      </label>
      </div>
`,
    }
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
            'data-type': this.name,
            'data-done': done,
            for: this.name,      
            class: 'thePlaceholder',
            contenteditable: 'false'    
          },
          [ 'label', {class: 'inputfileLabel'}],
          [ 'input',  { class: 'inputfile' }],
        ]
      },
      parseDOM: [{
        tag: `[data-type="${this.name}"]`,
 
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
