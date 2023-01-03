<template>
  <div class="header">
    <div class="header-menu">
      <Drawer>
        <template #headerMenu>
          <div class="drawer-logout">
            <router-link to="/login">
              <Button content="Log Out" />
            </router-link>

          </div>
        </template>
      </Drawer>
    </div>
    <div class="header-noty">
      <div class="header-noty-filter">
        <Modal />
      </div>
      <div class="header-noty-bell">
        <span class="header-noty-bell-qty">1</span> <Popconfirm />
      </div>
    </div>
  </div>
</template>

<script>
import Popconfirm from '../Popconfirm.vue';
import Drawer from '@/components/Drawer.vue';
import Modal from '@/components/modal.vue';
import './Header.scss';
import Button from '../Button/Button.vue'
export default {
  components: { Modal, Drawer, Popconfirm, Button },
};
</script>
