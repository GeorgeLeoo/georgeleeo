import '@/assets/base.less'
import { defineComponent } from 'vue'
import View from './views/view.vue'

export default defineComponent({
  setup() {
    return () => <View />
  }
})
