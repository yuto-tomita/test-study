import { mount } from '@vue/test-utils'
import { test, expect } from 'vitest'

import HelloWorld from '@/components/HelloWorld.vue'

test('HelloWorld.vue', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'hello',
    },
  })

  expect(wrapper.text()).toContain('hello')
})
