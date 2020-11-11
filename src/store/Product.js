import { Model } from '@vuex-orm/core'

export default class Post extends Model {
  static entity = 'product'

  static fields () {
    return {
      id: this.attr(null),
      title: this.string(null),
      imageUrl: this.string(null),
      description: this.string(null),
      price: this.number(null),
      rating: this.number(0)
    }
  }
}
