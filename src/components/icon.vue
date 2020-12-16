<template>
  <div @click="activate()" class="icon">
    <div class="plus-minus" :class="{ ' collapsed': isClicked }"></div>
  </div>
</template>
<script>
export default {
  name: "icon",
  data() {
    return {
      isClicked: true,
    };
  },
  methods: {
    activate() {
      let self = this;
      self.isClicked = false;
      setTimeout(function() {
        self.isClicked = true;
      }, 500);
    },
  },
};
</script>
<style lang="scss">
.icon {
  position: relative;
  width: 22px;
  height: 22px;
  border: 2px solid #969696;
  border-radius: 50%;
}

.plus-minus {
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  &:before,
  &:after {
    position: absolute;
    background: #969696;
    content: "";
    width: 18px;
    height: 2px;
    top: calc(50% + 1px);
    left: calc(0% + 2px);
    transition: transform 500ms ease;
  }
  &:after {
    transform-origin: center;
  }
  &.collapsed {
    &:after {
      transform: rotate(90deg);
    }
    &:before {
      transform: rotate(180deg);
    }
  }
}
</style>
