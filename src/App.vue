<template>
  <div class="flex justify-center items-center wrapper">

    <q-form
      @submit="onSubmit"
      ref="v-form"
      class="q-gutter-md v-form"
    >
      <q-input
        v-model="email"
        filled
        type="email"
        hint="Email"
        label="Ваш email"
        color="green"
        autocomplete="off"
        lazy-rules
        :rules="[
          val => !!val || 'Необходимо ввести email',
          val => /.+@.+\..+/.test(val) || 'Неправильно введен email'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="person" class="cursor-pointer"/>
        </template>
      </q-input>

      <q-input
        v-model="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Password" color="green"
        label="Ваш пароль"
        autocomplete="off"
        lazy-rules
        :rules="[
          val => !!val || 'Необходимо ввести пароль'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="lock" class="cursor-pointer"/>
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="togglePasswordIcon"
          />
        </template>
      </q-input>

      <div>
        <q-btn label="Вход" type="submit" color="green" class="full-width"/>
      </div>
    </q-form>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'LayoutDefault',  
  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
    }
  },
  methods: {
    ...mapActions([
      'POST_AUTORIZED_USER'
    ]),
    togglePasswordIcon() {
      this.isPwd = !this.isPwd;
    },
    onSubmit() {
      const user = {
        email: this.email,
        password: this.password
      };
      this.POST_AUTORIZED_USER(user);
    }
  }
}
</script>


<style>
  .wrapper {
    height: 100vh;
  }
  .v-form {
    width: 400px;
  }
</style>
