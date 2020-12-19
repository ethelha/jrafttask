<template>
  <div
    class="thePlaceholder"
    :data-type="node.type.name"
    :data-done="node.attrs.done.toString()"
    data-drag-handle
  >
    <label
      v-if="node.attrs.done == false"
      class="inputfileLabel"
      :style="{
        width: this.pic.width,
        height: this.pic.height,
        'background-image': 'url(' + this.url + ')',
      }"
    >
      <input type="file" placeholder="Click to upload" @change="onChange" />
    </label>
    <img v-else :src="this.url" />
  </div>
</template>
<script>
export default {
  props: {
    node: {
      type: Object,
    },
    view: {
      type: Object,
    },
    updateAttrs: {
      type: Function,
    },
  },
  data() {
    return {
      url: this.node.attrs.src,
      editorWidth: this.view.docView.nodeDOM.clientWidth,
      pic: {
        width: this.view.docView.nodeDOM.clientWidth + "px",
        height: (this.view.docView.nodeDOM.clientWidth * 2) / 3 + "px",
      },
    };
  },
  updated() {
    if (this.node.attrs.done) {
      this.url = this.node.attrs.src;
    }
  },
  methods: {
    onChange(event) {
      let that = this;
      var fileList = event.target.files[0];
      if (fileList) {
        var reader = new FileReader();
        reader.onload = function(e) {
          let src = e.target.result;
          that.updateAttrs({
            done: true,
            src: src,
          });
        };
        reader.readAsDataURL(fileList);
      }
    },
  },
};
</script>

<style lang="scss">
.thePlaceholder {
  display: block;
  cursor: pointer;
  text-align: center;
  object-fit: center;
  .inputfileLabel {
    display: block;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }
}
img {
  object-fit: center;
  vertical-align: middle;
  width: 100%;
  height: auto;
}
input[type="file"] {
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
  -moz-opacity: 0;
}
</style>
