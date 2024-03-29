import { reactive } from 'vue'
import type { PACKAGE_MANAGERS } from './plugins/InstallationTabs'

export const store = reactive({
  packageManager: 'npm' as typeof PACKAGE_MANAGERS[number],
})
