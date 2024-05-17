import { beforeEach, describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent, onMounted, ref } from 'vue'
import { Presence } from '.'

const CONTENT = 'Content'

describe('given a default Presence', () => {
  const wrapper = mount(defineComponent({
    components: { Presence },
    setup: () => {
      return { open: ref(false) }
    },
    template: `<div>
    <button @click="open = !open">
      toggle
    </button>
  </div>
  <Presence :present="open">
    <div>${CONTENT}</div>
  </Presence>`,
  }))

  it('should not show content', () => {
    expect(wrapper.html()).not.toContain(CONTENT)
  })

  describe('after clicking trigger', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
    })

    it('should show content', () => {
      expect(wrapper.html()).toContain(CONTENT)
    })

    describe('after clicking trigger again', () => {
      it('should not show content', () => {
        expect(wrapper.html()).not.toContain(CONTENT)
      })
    })
  })
})

const styles = `
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes fadeOut {
  from { opacity: 1; }
  to { opacity: 0; }
} 
 
.animate[data-state=open]{
  animation: fadeIn 2s;
}
.animate[data-state=closed]{
  animation: fadeOut 2s;
}`

describe('given a Presence with animated content', () => {
  const wrapper = mount(defineComponent({
    components: { Presence },
    setup: (_props) => {
      const el = ref()

      onMounted(() => {
        const css = document.createElement('style')
        css.appendChild(document.createTextNode(styles))
        el.value.appendChild(css)
      })

      return { open: ref(false), el }
    },
    template: `<div ref="el">
    <button @click="open = !open">
      toggle
    </button>
    <Presence :present="open">
    <div class="animate" :data-state="open ? 'open' : 'closed'">${CONTENT}</div>
  </Presence>
  </div>`,
  }))

  it('should not show content', () => {
    expect(wrapper.html()).not.toContain(CONTENT)
  })

  describe('after clicking trigger', () => {
    beforeEach(async () => {
      await wrapper.find('button').trigger('click')
    })

    it('should show content', () => {
      expect(wrapper.html()).toContain(CONTENT)
    })

    describe('after clicking trigger again', () => {
      it('should not show content', () => {
        expect(wrapper.html()).not.toContain(CONTENT)
      })
    })
  })
})
