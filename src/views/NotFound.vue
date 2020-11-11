<template>
  <v-container>
    <v-alert  type="warning" >
      Are you lost?
    </v-alert>
    <v-spacer></v-spacer>
    <v-btn :to="{name: 'products'}" text class="mr-3">
      <v-icon left>mdi-cellphone-link</v-icon>
      <span class="pl-1">Go to Products</span>
    </v-btn>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  name: 'NotFound'
})
</script>
