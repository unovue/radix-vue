import { beforeEach, describe, expect, it } from 'vitest'
import { axe } from 'vitest-axe'
import type { DOMWrapper, VueWrapper } from '@vue/test-utils'
import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import { DialogClose, DialogContent, DialogOverlay, DialogRoot, DialogTitle, DialogTrigger } from '.'
import { findByText, fireEvent } from '@testing-library/vue'

const OPEN_TEXT = 'Open'
const CLOSE_TEXT = 'Close'
const TITLE_TEXT = 'Title'

// const NoLabelDialogTest = defineComponent({
//   components: { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogClose },
//   template: `<DialogRoot>
//   <DialogTrigger>${OPEN_TEXT}</DialogTrigger>
//   <DialogOverlay />
//   <DialogContent>
//     <DialogClose>${CLOSE_TEXT}</DialogClose>
//   </DialogContent>
// </DialogRoot>`,
// })

// const UndefinedDescribedByDialog = defineComponent({
//   components: { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogClose, DialogTitle },
//   template: `  <DialogRoot>
//   <DialogTrigger>${OPEN_TEXT}</DialogTrigger>
//   <DialogOverlay />
//   <DialogContent aria-describedby={undefined}>
//     <DialogTitle>${TITLE_TEXT}</DialogTitle>
//     <DialogClose>${CLOSE_TEXT}</DialogClose>
//   </DialogContent>
// </DialogRoot>`,
// })

const DialogTest = defineComponent({
  components: { DialogRoot, DialogTrigger, DialogOverlay, DialogContent, DialogClose, DialogTitle },
  template: `<DialogRoot >
  <DialogTrigger>${OPEN_TEXT}</DialogTrigger>
  <DialogOverlay />
  <DialogContent>
    <DialogTitle>${TITLE_TEXT}</DialogTitle>
    <DialogClose>${CLOSE_TEXT}</DialogClose>
  </DialogContent>
</DialogRoot>`,
})

describe('given a default Dialog', () => {
  let wrapper: VueWrapper<InstanceType<typeof DialogTest>>
  let trigger: DOMWrapper<HTMLElement>
  let closeButton: HTMLElement

  beforeEach(() => {
    document.body.innerHTML = ''
    wrapper = mount(DialogTest, { attachTo: document.body })
    trigger = wrapper.find('button')
  })

  it('should pass axe accessibility tests', async () => {
    expect(await axe(document.body)).toHaveNoViolations()

    // open modal
    wrapper.find('button').element.click()
    await nextTick()
    expect(await axe(document.body)).toHaveNoViolations()
  })

  describe('after clicking the trigger', () => {
    beforeEach(async () => {
      fireEvent.click(trigger.element)
      closeButton = await findByText(document.body, CLOSE_TEXT)
    })

    // todo: Warning when title/description/aria-describeby not provided
    // https://github.com/radix-ui/primitives/blob/main/packages/react/dialog/src/Dialog.test.tsx#L84C1-L90C8

    it('should open the content', () => {
      expect(document.body.innerHTML).toContain(closeButton.innerHTML)
    })

    it('should focus the close button', () => {
      expect(closeButton).toBe(document.activeElement)
    })

    describe('when pressing escape', () => {
      beforeEach(() => {
        fireEvent.keyDown(document.activeElement!, { key: 'Escape' })
      })

      it('should close the content', () => {
        expect(document.body.innerHTML).not.toContain(closeButton.innerHTML)
      })
    })
  })
})
