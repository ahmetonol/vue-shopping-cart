<template>
  <v-container>
    <v-alert v-if="!hasCartItems"
      type="warning"
    >
      Your cart is currently empty.
    </v-alert>
    <v-row v-else>
      <v-col
        v-for="cartItem in cartItems"
        :key="cartItem.id"
        cols="2">
        <cart-item :data="cartItem"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import Cart from '@/store/Cart'
import CartItem from '@/components/Cart/Item'

export default defineComponent({
  name: 'CartList',
  components: { CartItem },
  computed: {
    cartItems () {
      return Cart.query().with('product').all()
    },
    hasCartItems () {
      return this.cartItems.length > 0
    }
  }
})
</script>

<style scoped>

</style>
