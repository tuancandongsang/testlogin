<template>
  <div class="itemlist">
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
    <div class="itemlist-container">
      <div>avatar</div>
      <h3>name</h3>
      <p>time/date</p>
      <p>preview state</p>
      <p>preview value</p>
      <p>nhiet do</p>
      <div>
        <router-link :to="`/${data?.id}`"
          >Detail <i class="fa-solid fa-arrow-right"></i
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  computed: {
    avatar() {
      if (this.data?.value) {
        return `PRO`;
      }
      return `SYT`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../src/styles/index.scss';

.itemlist {
  height: 20%;
  background-color: red;

  &:first-child {
    // border-top: none;
  }

  &-container {
    background-color: yellow;
    display: flex;
    justify-content: space-between;
    margin: 0 5px;
    height: 100%;
  }
}
</style>