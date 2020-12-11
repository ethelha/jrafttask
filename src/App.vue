<template>
  <div id="app">
    <h2 style="text-align: center;color: #fafafa ">for Jraft's</h2>
    <div class="editorcontainer">
      <Editor />
    </div>
  </div>
</template>

<script>
import Editor from "./components/editor";

export default {
  name: "App",
  components: {
    Editor,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display:wght@600&display=swap");
body {
  background: #20262e;
  padding: 20px;
  font-family: Helvetica;
}
#app {
  font-family: "Playfair Display", "Montserrat", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: #fff;
  color: #2c3e50;
  transition: all 0.2s;
  border-radius: 4px;
  text-align: left;
  margin: 0;
  padding: 20px;
}
.editorcontainer {
  position: relative;
  width: 70%;
  margin: 5% auto;
  border: 1px solid #fafafa;
  background: #fafafa;
}
.ProseMirror {
  outline: none;
  text-align: left;
  align-items: left;
  margin: 5% auto;
  width: 80%;
  // border: 1px #ccc solid;
  img {
    object-fit: cover;
    max-width: 100%;
    align-items: center;
  }
}
</style>
