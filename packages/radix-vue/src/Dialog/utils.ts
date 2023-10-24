import { onMounted } from 'vue'
import { injectDialogRootContext } from './DialogRoot.vue'

export function useWarning() {
  const CONTENT_NAME = 'DialogContent'
  const TITLE_NAME = 'DialogTitle'

  const rootContext = injectDialogRootContext()

  const TITLE_MESSAGE = `Warning: \`${CONTENT_NAME}\` requires a \`${TITLE_NAME}\` for the component to be accessible for screen reader users.

If you want to hide the \`${TITLE_NAME}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://www.radix-vue.com/components/dialog.html#title;`

  const DESCRIPTION_MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby="undefined"\` for ${CONTENT_NAME}.`

  onMounted(() => {
    const hasTitle = document.getElementById(rootContext.titleId)
    if (!hasTitle)
      console.warn(TITLE_MESSAGE)

    const describedById = rootContext.contentElement.value?.getAttribute('aria-describedby')
    // if we have an id and the user hasn't set aria-describedby="undefined"
    if (rootContext.descriptionId && describedById) {
      const hasDescription = document.getElementById(rootContext.descriptionId)
      if (!hasDescription)
        console.warn(DESCRIPTION_MESSAGE)
    }
  })
}
