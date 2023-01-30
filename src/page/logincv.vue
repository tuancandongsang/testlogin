<template>
  <div class="logincv">
    <div class="infor">
      <img src="./imgcv/topcv-logo.webp" alt="" />
      <h1>Chào mừng bạn trở lại,</h1>
      <p>
        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
        tưởng
      </p>
    </div>
    <div class="carouse">
      <daw class="alo" />
    </div>
  </div>
</template>

<script>
import './logincv.scss';
import daw from './logincv/daw.vue';
export default {
  data() {},
  methods: {},
  components: { daw },
};
</script>