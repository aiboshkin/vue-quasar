<template>
  <div class="flex justify-center items-center" style="height: 100vh">

    <q-form
      action="http://localhost:3000/users"
      method="post"
      class="q-gutter-md"
      style="width: 400px"
    >
      <q-input
        v-model="email"
        name="email"
        filled
        type="email"
        hint="Email"
        label="Ваш email"
        color="green"
        autocomplete="off"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Необходимо ввести email',
          val => /.+@.+\..+/.test(val) || 'Неправильно введен email'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="person" class="cursor-pointer"/>
        </template>
      </q-input>

      <q-input
        v-model="password"
        name="password"
        filled
        :type="isPwd ? 'password' : 'text'"
        hint="Password" color="green"
        label="Ваш пароль"
        autocomplete="off"
        lazy-rules
        :rules="[
          val => val && val.length > 0 || 'Необходимо ввести пароль'
        ]"
      >
        <template v-slot:prepend>
          <q-icon name="lock" class="cursor-pointer"/>
        </template>
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
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

export default {
  name: 'LayoutDefault',  
  data () {
    return {
      email: '',
      password: '',
      isPwd: true,
    }
  }
}
</script>


<style>

</style>
