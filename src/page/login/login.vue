<template>
  <div class="container">
    <div class="login-form">
      <h1 class="login-form-title">SAMSUNG SDS FMS</h1>
      <div class="input-form">
        <div class="input-form-user">
          <label for=""><i class="fa-solid fa-user"></i></label>
          <input type="text" placeholder="ID" v-model="user.name" />
        </div>
        <div class="input-form-user">
          <label for=""><i class="fa-sharp fa-solid fa-lock"></i></label>
          <input type="text" placeholder="PASSWORD" v-model="user.password" />
        </div>
        <div class="input-form-language">
          <select id="cars" @change="onChangeLanguage" v-model="langValue">
            <option value="en" :selected="langValue == 'en'">English</option>
            <option value="kr" :selected="langValue == 'kr'">한국인</option>
          </select>
        </div>
      </div>
      <button class="login-form-btn" @click="handleSubmit">
        {{ $tc('login') }}
      </button>
      <p class="error login-form-message" v-if="messageError">
        Please check information...
      </p>
      <p class="success login-form-message" v-if="messageSuccess">
        Login Success...
      </p>
    </div>
  </div>
</template>

<script>
import { i18n } from '@/config/setup-i18n';
import { DEFAULT_LANG } from '@/constants/index';

export default {
  data: () => {
    return {
      langValue: DEFAULT_LANG,
      user: {
        name: '',
        password: '',
      },
      messageError: false,
      messageSuccess: false,
    };
  },
  methods: {
    onChangeLanguage() {
      i18n.global.locale = this.langValue;
    },
    handleSubmit() {
      if (this.user.name == '') {
        return (this.messageError = true);
      } else if (this.user.password == '') {
        return (this.messageError = true);
      } else {
        this.messageError = false;
        this.messageSuccess = true;
        setTimeout(() => {
          this.$router.push('/');
        }, 2000);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  background-image: url('../../assets/image/login-background.jpg');
  width: 70vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  position: relative;
  min-height: 375px;
  min-width: 320px;

  .login-form {
    width: 70%;
    display: flex;
    justify-content: center;
    flex-direction: column;

    &-title {
      color: yellow;
      margin-bottom: 100px;
      font-size: 4rem;
      align-self: center;

      @media screen and (max-width: 1440px) {
        font-size: 2rem;
      }
      @media screen and (max-width: 425px) {
        font-size: 1.5rem;
      }
      @media screen and (max-width: 320px) {
        font-size: 1rem;
      }
      @media screen and (max-height: 620px) {
        margin-bottom: 40px;
      }
      @media screen and (max-height: 440px) {
        margin-bottom: 10px;
      }
    }

    .input-form {
      display: flex;
      flex-direction: column;

      &-user {
        background-color: #ffffff;
        margin: 4px 0px;
        padding: 8px 12px;
        display: flex;
        border-radius: 5px;

        input {
          outline: none;
          border: none;
          flex-grow: 1;
          margin-left: 4px;
          max-width: 95%;
          @media screen and (max-width: 320px) {
            max-width: 80%;
          }
        }
        @media screen and (max-width: 425px) {
          font-size: 20px;
        }
      }

      &-language {
        align-self: flex-end;
        margin-top: 8px;

        select {
          border-radius: 4px;
          outline: none;
          border: none;
          padding: 4px 12px;
          cursor: pointer;

          option {
            padding: 4px 12px;
            cursor: pointer;
          }
        }
      }
    }

    &-btn {
      border: 0px;
      padding: 0px;
      padding: 12px 16px;
      border-radius: 5px;
      width: 200px;
      align-self: center;
      margin-top: 100px;
      cursor: pointer;
      &:hover {
        background-color: #999;
      }
      @media screen and (max-width: 320px) {
        max-width: 50%;
      }
      @media screen and (max-height: 620px) {
        margin-top: 40px;
      }
      @media screen and (max-height: 440px) {
        margin-top: 10px;
      }
    }
    .error {
      color: tomato;
    }
    .success {
      color: rgb(106, 224, 59);
    }

    &-message {
      font-weight: 600px;
      font-size: 2rem;
      align-self: center;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translate(-50%, 50%);
      @media screen and (max-height: 620px) {
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    width: 100vw;
  }
}
</style>