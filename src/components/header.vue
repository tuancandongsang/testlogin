<template>
  <div class="header">
    <div class="header-menu">
      <drawer />
    </div>
    <div class="header-noty">
      <div class="header-noty-filter">
        <Modal />
      </div>
      <div class="header-noty-bell">
        <span class="header-noty-bell-qty">1</span
        ><i class="fa-solid fa-bell"></i>
      </div>
    </div>
  </div>
</template>

<script>
import drawer from '../components/drawer.vue';
import Modal from '../components/modal.vue';
export default {
  components: { Modal, drawer },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 10px;
  max-height: 10vh;
  &-menu {
  }
  &-noty {
    display: flex;
    gap: 10px;
    &-filter {
    }
    &-bell {
      position: relative;
      &-qty {
        position: absolute;
        top: -10%;
        right: -30%;
        border-radius: 50%;
        background-color: tomato;
        color: antiquewhite;
        font-weight: 500;
        padding: 0 6px;
        font-size: 0.8rem;
      }
    }
  }
}
</style>