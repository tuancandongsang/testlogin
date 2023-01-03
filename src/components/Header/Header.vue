<template>
  <div class="header">
    <div class="header-menu">
      <Drawer placement="left">
        <template #headerMenu>
          <div class="drawer-logout" @click="handleLogOut">
            <Button content="Log Out" />
          </div>
        </template>
      </Drawer>
    </div>
    <div class="header-noty">
      <div class="header-noty-filter">
        <Modal />
      </div>
      <div class="header-noty-bell">
        <span class="header-noty-bell-qty">1</span>
        <Popconfirm />
      </div>
    </div>
  </div>
</template>

<script>
import { removetJwtToken } from '@/utils/helpers';
import Popconfirm from '../Popconfirm.vue';
import Drawer from '@/components/Drawer.vue';
import Modal from '@/components/Modal.vue';
import './Header.scss';
import Button from '../Button/Button.vue';
export default {
  components: { Modal, Drawer, Popconfirm, Button },
  methods: {
    handleLogOut() {
      removetJwtToken()
      setTimeout(() => {
        this.$router.push('/login')
      }, 1000)
    }
  }
};
</script>
