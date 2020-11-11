<template>
  <v-app-bar
    app
    dense
    color="white"
    flat
  >
    <v-container class="py-0 fill-height">
      <v-avatar
        color="transparent"
        size="32"
      >
        <v-img
          :lazy-src="logo"
          :src="logo"
        ></v-img>
      </v-avatar>
      <v-spacer></v-spacer>
      <v-btn small :to="{name: 'products'}" text class="mr-3">
        <v-icon left>mdi-cellphone-link</v-icon>
        <span class="pl-1">Products</span>
      </v-btn>

      <v-btn
        depressed
        small
        :to="{name: 'cart'}"
        v-if="!cartCount"
      >
        <v-icon small>mdi-basket</v-icon>
        <span class="pl-1">Cart</span>
      </v-btn>
      <v-badge
        v-else
        bordered
        dense
        color="error"
        :content="cartCount"
        overlap
      >
        <v-btn
          class="white--text"
          color="success"
          depressed
          small
          :to="{name: 'cart'}"
        >
          <v-icon small>mdi-basket</v-icon>
          <span class="pl-1">Cart</span>
        </v-btn>
      </v-badge>
    </v-container>
  </v-app-bar>
</template>

<script>
import logo from '@/assets/logo.png'
import { defineComponent } from '@vue/composition-api'
import Cart from '@/store/Cart'

export default defineComponent({
  name: 'AppBar',
  data () {
    return {
      logo: logo
    }
  },
  computed: {
    cartCount () {
      return Cart.query().count()
    }
  }
})

</script>
