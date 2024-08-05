<template>
  <div class="pass-wrap new-pass-wrap">
    <h2>
      Введите 6-значный код и новый пароль
    </h2>

    <form @submit.prevent="() => {}">
      <div
        class="new-pass-inputs"
        @input.stop="(e) => checkPinCode(e.target)"
      >
        <input class="new-pass-input" type="text" />
        <input class="new-pass-input" type="text" />
        <input class="new-pass-input" type="text" />
        <input class="new-pass-input" type="text" />
        <input class="new-pass-input" type="text" />
        <input class="new-pass-input" type="text" />
      </div>

      <label>
        <span class="pass-input-label new-pass-input-label">
          Введите новый пароль (Не менее 6 символов, цифр — не менее 1, строчных
          букв — не менее 1, прописных букв — не менее 1)
        </span>
        <div class="new-pass-input-wrap">
          <input
            name="password"
            type="password"
            placeholder="Пароль"
            @blur.stop="(e) => showEye(e.target)"
            @input.stop="(e) => showEye(e.target)"
          />
          <button
            class="new-pass-eye"
            type="button"
            @click.stop="(e) => switchTypeInput(e)"
          >
            <EyeIcon class="new-pass-eye__eye" />
            <EyeCloseIcon class="new-pass-eye__eye-close" />
          </button>
        </div>
      </label>

      <label>
        <span class="pass-input-label new-pass-input-label"> Повторите пароль </span>
        <div class="new-pass-input-wrap">
          <input
            name="password repeat"
            type="password"
            placeholder="Пароль"
            @blur.stop="(e) => showEye(e.target)"
            @input.stop="(e) => showEye(e.target)"
          />
          <button
            class="new-pass-eye"
            type="button"
            @click.stop="(e) => switchTypeInput(e)"
          >
            <EyeIcon class="new-pass-eye__eye" />
            <EyeBlackIcon class="new-pass-eye__eye-close" />
          </button>
        </div>
      </label>

      <button class="pass-btn new-pass-btn" type="submit">Готово</button>
    </form>
  </div>
</template>

<script>
import EyeIcon from "@/assets/images/icons/iconsComp/EyeIcon.vue";
// import PageHeader from "../PageHeader.vue";
import EyeCloseIcon from "@/assets/images/icons/iconsComp/EyeCloseIcon.vue";

export default {
  components: {
    // PageHeader,
    EyeIcon,
    EyeCloseIcon,
  },
  methods: {
    checkPinCode(target) {
      const value = target.value.trim().replace(/[\D+]/g, '')
      const length = value.length;
      target.value = value;
      const prevEl = target.previousElementSibling;
      const nextEl = target.nextElementSibling;


      if (length < 1 && prevEl) {
        prevEl.focus();
      } else if (length === 1 && nextEl) {
        nextEl.focus();
      } else if (length > 1) {
        target.value = target.value[0].trim();
      }
    },
    moveToNext(currentInput, nextInputId) {
      if (currentInput.value.length === 1) {
        document.getElementById(nextInputId).focus();
      }
    },
    showEye(target) {
      const length = target.value.length;
      const check = length > 0;
      target.classList.toggle("input--active", check);
    },
    switchTypeInput(e) {
      const elem = e.currentTarget;
      elem.classList.toggle("show-password--active");
      const typeInput = elem.previousElementSibling.type;
      elem.previousElementSibling.type =
        typeInput === "text" ? "password" : "text";
    },
  },
};
</script>

<style scoped>
.new-pass-wrap {
  margin-block: 52px;
  max-width: 282px;
}
.new-pass-wrap h2 {
  margin-bottom: 32px;
  max-width: 255px;
}
.new-pass-wrap label {
  position: relative;
}
.new-pass-wrap input {
  padding-right: 40px;
}
.new-pass-input-wrap {
  position: relative;
  width: 100%;
}
.new-pass-eye {
  position: absolute;
  top: 50%;
  right: 15px;
  display: none;
  padding: 0;
  transform: translateY(-50%);
}
.new-pass-input-label {
  letter-spacing: -0.2px;
}
.new-pass-btn {
  margin-top: 31px;
}
input.input--active + .new-pass-eye {
  display: flex;
}
.new-pass-eye__eye-close,
.new-pass-input-wrap .new-pass-eye.show-password--active .new-pass-eye__eye {
  display: none;
}
.new-pass-input-wrap
  .new-pass-eye.show-password--active
  .new-pass-eye__eye-close {
  display: block;
}
input.input--active {
  background-color: var(--light_gray);
}
/* поле для пин-кода  */
.new-pass-inputs {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 32px;
}
.new-pass-inputs input.new-pass-input {
  padding-inline: 12px;
  text-align: center;
}
.new-pass-input {
  width: 38px;
}
</style>
