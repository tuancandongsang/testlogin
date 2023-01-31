<template>
  <div class="components-input-demo-presuffix">
    <label for="email">Email</label>
    <a-input placeholder="Basic usage" v-model:value="userName">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input>
    <label for="email" class="label_password">Password</label>
    <a-input-password v-model:value="value" placeholder="input password">
      <template #prefix>
        <user-outlined type="user" />
      </template>
      <template #suffix>
        <a-tooltip title="Extra information">
          <info-circle-outlined style="color: rgba(0, 0, 0, 0.45)" />
        </a-tooltip>
      </template>
    </a-input-password>
  </div>
</template>
<script>
import { UserOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';
export default {
  components: {
    UserOutlined,
    InfoCircleOutlined,
  },
  data() {
    return {
      userName: '',
      value: '',
    };
  },
};
</script>
<style lang="scss" scoped>
label {
  margin-bottom: 4px;
  display: inline-block;
}
.label_password {
  margin-top: 16px;
}
</style>