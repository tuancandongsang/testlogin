<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isVertical: true,
    }
  },
  mounted() {
    // by default, screen is vertical or not?
    const angle = window.orientation;
    this.setVertical(angle);
    window.addEventListener('orientationchange', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('orientationchange', this.getDimensions);
  },
  methods: {
    getDimensions(event) {
      const { angle } = event.target.screen.orientation;
      console.log('tuancan', angle);
      this.setVertical(angle);
    },
    setVertical(angle) {
      const VERTICAL_ANGLE = 0;
      this.isVertical = (angle === VERTICAL_ANGLE);
      console.log("isVertical", this.isVertical);
    }
  }
}
</script>