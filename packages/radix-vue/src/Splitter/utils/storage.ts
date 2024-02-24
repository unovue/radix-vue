import type { PanelGroupStorage } from '../SplitterGroup.vue'

// PanelGroup might be rendering in a server-side environment where localStorage is not available
// or on a browser with cookies/storage disabled.
// In either case, this function avoids accessing localStorage until needed,
// and avoids throwing user-visible errors.
export function initializeDefaultStorage(storageObject: PanelGroupStorage) {
  try {
    if (typeof localStorage !== 'undefined') {
      // Bypass this check for future calls
      storageObject.getItem = (name: string) => {
        return localStorage.getItem(name)
      }
      storageObject.setItem = (name: string, value: string) => {
        localStorage.setItem(name, value)
      }
    }
    else {
      throw new TypeError('localStorage not supported in this environment')
    }
  }
  catch (error) {
    console.error(error)

    storageObject.getItem = () => null
    storageObject.setItem = () => {}
  }
}
