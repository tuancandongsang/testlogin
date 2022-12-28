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
      <div class="drawer-logout">
        <router-link to="/login"><p>Log Out</p></router-link>
      </div>
    </a-drawer>
  </div>
</template>
  <script>
export default {
  data() {
    return {
      placement: 'left',
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
  &-logout {
    position: absolute;
    padding: 8px 12px;
    background-color: dodgerblue;
    border-radius: 8px;
    bottom: 20px;
    width: 75%;
    p {
      color: #000;
      font-weight: 500;
      font-size: 1rem;
      text-align: center;
      margin: 0;
    }
  }
}
</style>