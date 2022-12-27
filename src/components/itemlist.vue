<template>
  <div class="itemlist">
    <div class="itemlist-avatar">AV</div>
    <div class="itemlist-infor">
        <h3>name</h3>
        <p>date</p>
        <p>action</p>
    </div>
    <div>detail <i class="fa-solid fa-arrow-right"></i></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.itemlist{
    display: flex;
    justify-content: space-between;
    align-items: center;
    &-avatar{
        width: 30px;
    }
    &-infor{
        flex-grow: 1;
        margin-left: 4px;
        h3{
            margin: 0;
        }
        p{
            margin: 0;
        }
    }
}

</style>