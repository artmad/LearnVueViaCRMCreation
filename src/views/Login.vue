<template>
  <form class="card auth-card" @submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="form.email"
          :class="{invalid: ($v.form.email.$dirty && !$v.form.email.required) || ($v.form.email.$dirty && !$v.form.email.email)}"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.form.email.$dirty && !$v.form.email.required"
        >Поле Email не должно быть пустым</small>
        <small
          class="helper-text invalid"
          v-else-if="$v.form.email.$dirty && !$v.form.email.email"
        >Email введен не корретно</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model="form.password"
          v-bind:class="{invalid: ($v.form.password.$dirty && $v.form.password.$invalid) }"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="($v.form.password.$dirty && $v.form.password.$invalid)"
        >Некорректный пароль</small>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Войти
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Нет аккаунта?
        <router-link to="/register">Зарегистрироваться</router-link>
      </p>
    </div>
  </form>
</template>


<script>
import { email, required, minLength } from "vuelidate/lib/validators";
import messages from "../utils/messages";

export default {
  name: "login",
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  validations: {
    form: {
      email: { email, required },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async handleSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      try {
        await this.$store.dispatch("login", this.form);
        this.$router.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message]);
    }
  }
};
</script>