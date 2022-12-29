<template>
  <div>
    <a-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template #title>
          <p>{{ text }}</p>
          <p>{{ mgs }}</p>
        </template>
        <i class="fa-solid fa-bell"></i>
      </a-popconfirm>
  </div>
</template>
<script>
import { message } from 'ant-design-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const buttonWidth = 70;
    const text = 'You have one message?';
    const mgs = 'LOW_LIMIT_WARN?';
    const confirm = () => {
      message.info('Clicked on Yes.');
    };
    return {
      buttonWidth,
      text,
      confirm,
      mgs,
    };
  },
});
</script>
<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>