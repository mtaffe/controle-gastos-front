<template>
  <v-toolbar
    dense
    elevation="4"
    >
      <v-icon
      onclick="this.$router.push('/about')"
      >
        mdi-account-arrow-right
      </v-icon>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Navbar'
}

</script>