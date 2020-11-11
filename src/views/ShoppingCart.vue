<template>
  <v-container>
    <v-toolbar dense flat>
      <v-toolbar-title>Shopping Cart</v-toolbar-title>
    </v-toolbar>
    <cart-list />
  </v-container>
</template>

<script>
// @ is an alias to /src
import { defineComponent } from '@vue/composition-api'
import CartList from '@/components/Cart/List'

export default defineComponent({
  name: 'Cart',
  components: {
    CartList
  }
})
</script>
