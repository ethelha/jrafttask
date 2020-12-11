<template>
  <div class="editor">
    <editor-floating-menu
      :editor="editor"
      v-slot="{ commands, isActive, menu }"
    >
      <div
        class="editor__floating-menu"
        :class="{ 'is-active': menu.isActive }"
        :style="`top: ${menu.top}px`"
      >
        <!-- <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          h1
        </button> -->
        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.testout() }"
          @click="commands.testout"
        >
          <Icon />
        </button>
      </div>
    </editor-floating-menu>
    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent, EditorFloatingMenu } from "tiptap";
import { Heading, Image } from "tiptap-extensions";
import Testout from "./../testout";
import Testinner from "./../testinner";
import Icon from "./../components/icon";

export default {
  name: "editor",
  components: {
    EditorContent,
    EditorFloatingMenu,
    Icon,
  },
  data() {
    return {
      editor: new Editor({
        autoFocus: true,
        extensions: [
          new Heading(),
          new Image(),
          new Testout(),
          new Testinner({
            nested: true,
          }),
        ],
        content: `
          <h2>
            THE EDITOR
          </h2>
          <p>
            There is always something to do. Thankfully, there are checklists for that. Don't forget to call mom.
          </p>
        `,

        onFocus() {},
        beforeDestroy() {
          this.editor.destroy();
        },
      }),
    };
  },
  beforeDestroy() {
    this.editor.destroy();
  },
};
</script>

<style lang="scss">
.editor {
  position: relative;
  &__floating-menu {
    position: absolute;
    z-index: 1;
    margin-top: -0.25rem;
    margin-left: 5%;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.4s, visibility 0.4s;
    &.is-active {
      opacity: 1;
      visibility: visible;
    }
  }
}
button {
  border: none;
  background: transparent;
  outline: none;
}
.thePlaceholder {
  display: block;
  cursor: pointer;
  text-align: center;
  object-fit: center;
}
.inputfileLabel {
  display: block;
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center center;
  input[type="file"] {
    position: relative;
    height: 100%;
    width: 100%;
    opacity: 0;
    cursor: pointer;
    -moz-opacity: 0;
  }
  img {
    object-fit: center;
    vertical-align: middle;
    width: auto;
    height: auto;
  }
}
</style>
