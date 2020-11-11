<template>
  <v-card shaped v-if="product">
    <v-img
      height="120"
      lazy-src="https://lh3.googleusercontent.com/aR34MxRBretppyADbJcfqIZp-LraO1ELhk00lTZw0Q7MF1ebUKZeggeQkjBuZCCmYRSYNzr8=w640-h400-e365-rj-sc0x00ffffff"
      :src="product.imageUrl"
    ></v-img>
    <v-card-title>{{product.title}}</v-card-title>
    <v-card-text>
      <v-rating
        :value="product.rating"
        color="amber"
        dense
        half-increments
        readonly
      ></v-rating>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            @click="removeFromCart"
          >
            <v-icon>mdi-cart-arrow-up</v-icon>
          </v-btn>
        </template>
        <span>Remove from cart</span>
      </v-tooltip>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import ProductItemMixin from '@/mixins/ProductItem'

export default defineComponent({
  props: ['data'],
  mixins: [ProductItemMixin],
  name: 'CartItem',
  computed: {
    cartId () {
      return this.data.id
    },
    product () {
      return this.data.product
    }
  }
})
</script>

<style scoped>

</style>
