<template>
  <div class="header">
    <div class="header-menu"><i class="fa-solid fa-bars"></i></div>
    <div class="header-noty">
      <div class="header-noty-filter"><i class="fa-solid fa-filter"></i></div>
      <div class="header-noty-bell"> <span class="header-noty-bell-qty">1</span><i class="fa-solid fa-bell"></i></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header{
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  &-menu{

  }
  &-noty{
    display: flex;
    gap: 10px;
    &-filter{

    }
    &-bell{
      position: relative;
      &-qty{
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