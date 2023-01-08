<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
  data() {
    return {
      isVertical: true,
    };
  },
  computed: {
    ...mapGetters(['angle']),
  },
  methods: {
    ...mapMutations(['getAngle']),
    getDimensions(event) {
      const { angle } = event.target.screen.orientation;
      console.log('tuancan', angle);
      this.setVertical(angle);
    },
    setVertical(angle) {
      const VERTICAL_ANGLE = 0;
      this.isVertical = angle === VERTICAL_ANGLE;
    },
  },
  mounted() {
    // const angle = window.orientation;
    console.log('tuan', window.orientation);
    this.setVertical(this.angle);
    window.addEventListener('orientationchange', this.getDimensions);
  },
  unmounted() {
    window.removeEventListener('orientationchange', this.getDimensions);
  },
};
</script>