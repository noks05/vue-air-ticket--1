<template>
  <div class="pass-wrap remind-pass-wrap">
    <h2>Напомнить пароль</h2>

    <div
      :class="[
        'remind-pass-switch-wrap',
        methodGetCode ? 'remind-pass-switch-wrap_mb' : '',
        !methodGetCode ? 'remind-pass-switch-wrap_member' : '',
      ]"
      @click="methodGetCode = !methodGetCode"
    >
      <button
        :class="[
          'remind-pass-switch',
          methodGetCode ? 'remind-pass-switch_primary' : '',
        ]"
        type="button"
      >
        <PhoneBookIcon />
        <span>По номеру телефона</span>
      </button>

      <button
        :class="[
          'remind-pass-switch',
          !methodGetCode ? 'remind-pass-switch_primary' : '',
        ]"
        type="button"
      >
        <UserBookIcon />
        <span>По номеру участника</span>
      </button>
    </div>

    <form @submit.prevent="() => {}">
      <label v-if="methodGetCode">
        <input name="phone" type="tel" placeholder="+7 (" />
        <span class="pass-input-label remind-pass-input-label">
          Для установки или изменения пароля введите номер мобильного телефона.
          Код будет отправлен на этот номер.
        </span>
      </label>

      <label v-if="!methodGetCode">
        <span class="pass-input-label pass-input-label_ls">
          Введите номер участника (11 цифр)
        </span>
        <input name="member" type="text" placeholder="00000000000" />
        <span class="pass-input-label remind-pass-input-label">
          Для установки или изменения пароля введите номер участника бонусной
          программы. Код будет отправлен на ваш номер телефона.
        </span>
      </label>

      <!-- router-link для теста, так тут этой ссылки быть не должно  -->
      <router-link :to="{ path: $route.path, query: { code: 'testGetCode' } }">
        <button class="pass-btn" type="submit">Получить код</button>
      </router-link>
    </form>
  </div>
</template>

<script>
import PhoneBookIcon from "@/assets/images/icons/iconsComp/PhoneBookIcon.vue";
import UserBookIcon from "@/assets/images/icons/iconsComp/UserBookIcon.vue";

export default {
  components: {
    PhoneBookIcon,
    UserBookIcon,
  },
  data() {
    return {
      methodGetCode: true,
    };
  },
};
</script>

<style scoped>
.remind-pass-wrap {
  min-width: 376px;
  max-width: 376px;
  margin-block: 89px;
}

.remind-pass-wrap a {
  display: flex;
  margin-top: -17px;
}

.remind-pass-wrap h2 {
  margin-bottom: 40px;
}

.remind-pass-wrap form {
  max-width: 281px;
}

.remind-pass-wrap input::placeholder {
  color: #c8c8c8;
}

.remind-pass-switch-wrap {
  display: flex;
  gap: 27px;
  margin-bottom: 55px;
}

.remind-pass-switch {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 0;
  text-wrap: nowrap;
  font-size: 14px;
  font-family: Gilroy-Regular !important;
  font-weight: 400;
  line-height: 100%;
  color: var(--grey-79);
  transition: color 0.2s;
}

.remind-pass-switch_primary,
.remind-pass-switch:hover {
  color: var(--primary_bg);
}

.remind-pass-input-label {
  margin-top: 7px;
  margin-bottom: 0;
  text-align: center;
  line-height: 120%;
}

.pass-input-label_ls {
  letter-spacing: -0.3px;
  margin-bottom: 8px;
}

.remind-pass-switch-wrap_mb {
  margin-bottom: 51px;
}

@media (max-width: 480px) {
  .new-pass-wrap {
    max-width: 100%;
    padding-inline: 16px;
  }

  .new-pass-inputs {
    gap: 11px;
    max-width: 286px;
    margin-inline: auto;
    justify-content: initial;
  }

  .remind-pass-switch {
    flex-direction: column;
  }

  .remind-pass-wrap h2 {
    font-size: 22px;
    margin-bottom: 30px;
  }

  .remind-pass-switch-wrap {
    gap: 32px;
  }

  .remind-pass-switch-wrap_mb {
    margin-bottom: 42px;
  }

  .remind-pass-switch-wrap_member {
    margin-bottom: 44px;
  }

  .remind-pass-wrap form {
    max-width: 327px;
  }
}
</style>

<style>
.remind-pass-switch:hover svg path {
  transition: stroke 0.2s;
}

.remind-pass-switch_primary svg path,
.remind-pass-switch:hover svg path {
  stroke: var(--primary_bg);
}
</style>
