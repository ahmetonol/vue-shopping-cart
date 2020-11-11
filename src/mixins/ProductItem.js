import Cart from '@/store/Cart'
import { v4 as uuidv4 } from 'uuid'

const ProductItemMixin = {
  methods: {
    addToCart () {
      const cartData = {
        id: uuidv4(),
        productId: this.product.id,
        product: this.product.$toJson()
      }
      Cart.insert({ data: cartData })
    },
    removeFromCart () {
      Cart.delete(this.cartId)
    }
  }
}

export default ProductItemMixin
