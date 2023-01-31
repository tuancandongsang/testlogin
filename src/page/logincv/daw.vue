<template>
  <div class="login_right">
    <a-carousel autoplay>
      <div class="login_item">
        <img src="../imgcv/img1_login.webp" alt="" />
        <h4>Công cụ viết CV đẹp Miễn phí</h4>
        <p>
          Nhiều mẫu CV đẹp, phù hợp nhu cầu ứng tuyển các vị trí khác nhau. Dễ
          dàng chỉnh sửa thông tin, tạo CV online nhanh chóng trong vòng 5 phút.
        </p>
      </div>
      <div class="login_item">
        <img src="../imgcv/img2_login.webp" alt="" />
        <h4>Bảo mật & An toàn tuyệt đối</h4>
        <p>
          Bạn có thể chủ động bật / tắt trạng thái tìm việc. Nếu trạng thái tắt,
          không ai có thể xem được CV của bạn.
        </p>
      </div>
      <div class="login_item">
        <img src="../imgcv/img3_login.webp" alt="" />
        <h4>Hỗ trợ Người tìm việc Nhà</h4>
        <p>
          tuyển dụng chủ động tìm kiếm và liên hệ với bạn qua hệ thống kết nối
          ứng viên thông minh.
        </p>
      </div>
    </a-carousel>
  </div>
</template>
  
<style scoped lang="scss">
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 100%;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.login_right {
  padding-top: 100px;
  width: 100%;
  .login_item {
    display: flex;
    // justify-content: center;

    img {
      width: 60%;
      padding: 0 20px 20px 20px;
      display: inline-block;
    }
    h4 {
      color: #212f3f;
      font-size: 24px;
      color: #212f3f;
      letter-spacing: 0;
      font-weight: 500;
      line-height: 1.2;
      margin-bottom: 0.5rem;
      margin-top: 0;
    }
    p {
      color: rgba(0, 0, 0, 0.851);
      font-size: 16px;
      letter-spacing: 0;
      margin-bottom: 1rem;
      margin-top: 0;
      width: 60%;
      word-wrap: break-word;
      display: inline-block;
    }
  }
}
</style>