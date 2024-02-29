import { type ComponentResolver } from 'unplugin-vue-components'
import { components } from '../../../radix-vue/constant/components'
import * as NamespacedComponents from '../namespaced'

export interface ResolverOptions {
  /**
   * prefix for components used in templates
   *
   * @defaultValue ""
   */
  prefix?: string
  /**
   * Enable the use of namespaced components
   *
   * @defaultValue false
   */
  namespaced?: boolean
}

export default function (options: ResolverOptions = {}): ComponentResolver {
  const { prefix = '', namespaced = false } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        const componentName = name.substring(prefix.length).split('.')[0]
        const isNamespacedComponent = Object.keys(NamespacedComponents).includes(componentName)
        const isComponent = Object.values(components).flat().includes(componentName)
        if (isNamespacedComponent || isComponent) {
          return {
            name: componentName,
            from: isNamespacedComponent && namespaced ? 'radix-vue/namespaced' : 'radix-vue',
          }
        }
      }
    },
  }
}
