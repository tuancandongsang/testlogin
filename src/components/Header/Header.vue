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
        > <Popconfirm />
      </div>
    </div>
  </div>
</template>

<script>
import Popconfirm from '../Popconfirm.vue'
import drawer from '../../components/drawer.vue';
import Modal from '../../components/modal.vue';
import "./Header.scss"
export default {
  components: { Modal, drawer, Popconfirm },
};
</script>