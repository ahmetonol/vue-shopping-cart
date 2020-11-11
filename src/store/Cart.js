import { Model } from '@vuex-orm/core'

export default class Post extends Model {
  static entity = 'cart'

  static fields () {
    return {
      id: this.attr(null),
      product: this.belongsTo('product', 'productId'),
      productId: this.string(null)
    }
  }
}
