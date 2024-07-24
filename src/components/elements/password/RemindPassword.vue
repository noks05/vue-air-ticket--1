<template>
  <div class="pass-wrap remind-pass-wrap">
    <h2>Напомнить пароль</h2>

    <div class="remind-pass-switch-wrap" @click="methodGetCode = !methodGetCode">
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
        <span class="pass-input-label">
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
  gap: 28px;
  margin-bottom: 51px;
}
.remind-pass-switch {
  display: flex;
  align-items: center;
  gap: 11px;
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
  margin-top: 8px;
  margin-bottom: 0;
  text-align: center;
  line-height: 120%;
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
