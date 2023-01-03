<template>
  <div class="drawer">
    <span @click="showDrawer"><i class="fa-solid fa-bars"></i></span>
    <a-drawer
      title="Option Setting"
      :placement="placement"
      :closable="false"
      width="60%"
      height="100%"
      :visible="visible"
      @close="onClose"
    >
      <slot name="headerMenu"></slot>
    </a-drawer>
  </div>
</template>
  <script>
export default {
  props:{
    placement:{
      type:String,
      required: true
    }
  },
  data() {
    return {
      // placement: 'left',
      visible: false,
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.drawer {
  position: relative;
}
</style>