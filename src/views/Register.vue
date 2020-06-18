<template>
  <form class="card auth-card" v-on:submit.prevent="handleSubmit">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>
      <div class="input-field">
        <input
          id="email"
          v-model.trim="form.email"
          type="text"
          v-bind:class="{invalid: $v.form.email.$dirty && (!$v.form.email.email || !$v.form.email.required)}"
          v-on:focusout="$v.form.email.$touch()"
        />
        <label for="email">Email</label>
        <small
          class="helper-text invalid"
          v-if="$v.form.email.$dirty && (!$v.form.email.email || !$v.form.email.required)"
        >Введите корректный email</small>
      </div>
      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="form.password"
          v-on:focusout="$v.form.password.$touch()"
          :class="{invalid: $v.form.password.$dirty && (!$v.form.password.required || !$v.form.password.minLength)}"
        />
        <label for="password">Пароль</label>
        <small
          class="helper-text invalid"
          v-if="$v.form.password.$dirty && !$v.form.password.required"
        >Введите пароль</small>
        <small
          class="helper-text invalid"
          v-if="$v.form.password.$dirty && !$v.form.password.minLength"
        >Пароль слишком короткий</small>
      </div>
      <div class="input-field">
        <input
          v-model.trim="form.name"
          id="name"
          type="text"
          v-bind:class="{invalid: $v.form.name.$dirty && !$v.form.name.required}"
          @focusout="$v.form.name.$touch()"
        />
        <label for="name">Имя</label>
        <small
          class="helper-text invalid"
          v-if="$v.form.name.$dirty && !$v.form.name.required"
        >Введите имя</small>
      </div>
      <div class="input-field">
        <p>
          <label>
            <input
              type="checkbox"
              v-model="form.agree"
              v-bind:class="{invalid: $v.form.agree.$dirty && !$v.form.agree.checked}"
              @focusout="$v.form.agree.$touch()"
            />
            <span>С правилами согласен</span>
            <small
              class="helper-text invalid"
              v-if="$v.form.agree.$dirty && !$v.form.agree.checked"
            >Нужно согласиться с правилами</small>
          </label>
        </p>
      </div>
    </div>
    <div class="card-action">
      <div>
        <button class="btn waves-effect waves-light auth-submit" type="submit">
          Зарегистрироваться
          <i class="material-icons right">send</i>
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link tag="a" to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    form: {
      email: "",
      passwodr: "",
      name: "",
      agree: false
    }
  }),
  methods: {
    async handleSubmit() {
      if (this.$v.form.$invalid) {
        console.log(this.$v.form);
        this.$v.form.$touch();
        return;
      }

      try {
        await this.$store.dispatch("register", this.form);
        this.$router.push("/");
      } catch (ex) {
        console.log(ex);
      }
    }
  },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      agree: { checked: v => v }
    }
  },
  mounted() {}
};
</script>