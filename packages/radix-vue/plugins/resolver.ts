import { type ComponentResolver } from 'unplugin-vue-components'
import { components } from '../constant'

export interface ResolverOptions {
  /**
   * prefix for components used in templates
   *
   * @default ""
   */
  prefix?: string
}

export function UnpluginVueComponentsResolver(options: ResolverOptions = {}): ComponentResolver {
  const { prefix = '' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.startsWith(prefix)) {
        const componentName = name.substring(prefix.length)
        if (Object.values(components).flat().includes(componentName)) {
          return {
            name: componentName,
            from: 'radix-vue',
          }
        }
      }
    },
  }
}
