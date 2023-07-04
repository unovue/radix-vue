<script setup lang="ts">
const { page } = useContent()
const { config, tree } = useDocus()
const route = useRoute()

const fallbackValue = (value: string, fallback = true) => {
  if (typeof page.value?.[value] !== 'undefined') { return page.value[value] }
  return fallback
}

const hasBody = computed(() => !page.value || page.value?.body?.children?.length > 0)
const hasToc = computed(() => page.value?.toc !== false && page.value?.body?.toc?.links?.length >= 2)

const hasAside = computed(() => page.value?.aside !== false && (tree.value?.length > 1 || tree.value?.[0]?.children?.length))
const bottom = computed(() => fallbackValue('bottom', true))
const isOpen = ref(false)

/*
** This below is a workaround until Nuxt has a proper support for layouts and Suspense
*/
const asideNav = ref<any>(null)

const getParentPath = () => route.path.split('/').slice(0, 2).join('/')
const asideScroll = useState('asideScroll', () => {
  return {
    parentPath: getParentPath(),
    scrollTop: asideNav.value?.scrollTop || 0
  }
})

function watchScrollHeight () {
  if (!asideNav.value) { return }
  if (asideNav.value.scrollHeight === 0) {
    setTimeout(watchScrollHeight, 0)
  }
  asideNav.value.scrollTop = asideScroll.value.scrollTop
}

onMounted(() => {
  if (asideScroll.value.parentPath !== getParentPath()) {
    asideScroll.value.parentPath = getParentPath()
    asideScroll.value.scrollTop = 0
  } else {
    watchScrollHeight()
  }
})

onBeforeUnmount(() => {
  if (!asideNav.value) { return }
  asideScroll.value.scrollTop = asideNav.value.scrollTop
})
</script>

<template>
  <Container
    :fluid="config?.main?.fluid"
    :padded="config?.main?.padded"
    class="docs-page-content"
    :class="{
      fluid: config?.main?.fluid,
      'has-toc': hasToc,
      'has-aside': hasAside,
    }"
  >
    <!-- Aside -->
    <aside
      v-if="hasAside"
      ref="asideNav"
      class="aside-nav"
    >
      <DocsAside class="app-aside" />
    </aside>

    <!-- Page Body -->
    <article class="page-body max-w-4xl px-6">
      <slot v-if="hasBody" />
      <Alert
        v-else
        type="info"
      >
        Start writing in <ProseCodeInline>content/{{ page._file }}</ProseCodeInline> to see this page taking shape.
      </Alert>
      <template v-if="hasBody && page && bottom">
        <DocsPageBottom />
        <DocsPrevNext />
      </template>
    </article>

    <!-- TOC -->
    <div
      class="toc"
    >
      <div class="toc-wrapper">
        <button @click="isOpen = !isOpen">
          <span class="title">Table of Contents</span>
          <Icon
            name="heroicons-outline:chevron-right"
            class="icon"
            :class="[isOpen && 'rotate']"
          />
        </button>

        <div
          class="docs-toc-wrapper"
          :class="[isOpen && 'opened']"
        >
          <DocsToc @move="isOpen = false" />
        </div>
      </div>
    </div>
  </Container>
</template>

<style scoped lang="ts">
css({
  '.docs-page-content': {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column-reverse',
    '@lg': {
      display: 'grid',
      gap: '{space.8}',
    },
    '&.has-toc': {
      '@xl': {
        gridTemplateColumns: 'minmax(320px, 1fr) minmax(250px, 250px)'
      }
    },
    '&.has-aside': {
      '@lg': {
        gridTemplateColumns: 'minmax(250px, 250px) minmax(320px, 1fr)'
      }
    },
    '&.has-aside.has-toc': {
      '@xl': {
        gridTemplateColumns: 'minmax(250px, 250px) minmax(320px, 1fr) minmax(250px, 250px)'
      }
    },
  },
  '.aside-nav': {
    display: 'none',
    overflowY: 'auto',
    '@lg': {
      display: 'block',
      position: 'sticky',
      top: '{docus.header.height}',
      // gridColumn: 'span 2/span 2',
      alignSelf: 'flex-start',
      height: 'calc(100vh - {docus.header.height})',
      py: '{space.8}',
      paddingRight: '{space.8}',
      '.fluid &&': {
        borderRight: '1px solid {elements.border.primary.static}',
      }
    }
  },
  '.page-body': {
    position: 'relative',
    display: 'flex',
    flexDirection: "column",
    flex: '1 1 0%',
    py: '{space.8}',
    width: '100%',
    // maxWidth: '{docus.readableLine}',
    mx: 'auto',
    '.has-toc &&': {
      paddingTop: '{space.12}',
      '@lg': {
        paddingTop: '{space.8}',
      }
    },
    '@lg': {
      marginTop: 0,
      // gridColumnStart: 2,
    },
    // `.not-prose` can be useful if creating <h1> with a component (404 page is an example)
    ':deep(h1:not(.not-prose):first-child)': {
      marginTop: 0,
      fontSize: '{text.4xl.fontSize}',
      lineHeight: '{text.4xl.lineHeight}',
      '@sm': {
        fontSize: '{text.5xl.fontSize}',
        lineHeight: '{text.5xl.lineHeight}',
      }
    },
    // `.not-prose` can be useful if creating <h1> with a component (404 page is an example)
    ':deep(h1:not(.not-prose)first-child + p)': {
      marginTop: 0,
      marginBottom: '{space.8}',
      paddingBottom: '{space.8}',
      borderBottom: '1px solid {elements.border.primary.static}',
      color: '{color.gray.500}',
      '@sm': {
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
      },
      '@dark': {
        color: '{color.gray.400}',
      },
      a: {
        color: '{color.gray.700}',
        '@dark': {
          color: '{color.gray.200}',
        },
        "&:hover": {
          borderColor: '{color.gray.700}'
        }
      }
    },
    '.docs-prev-next': {
      marginTop: '{space.4}'
    }
  },
  '.toc': {
    position: 'sticky',
    top: '{docus.header.height}',
    display: 'none',
    mx: 'calc(0px - {space.4})',
    overflow: 'auto',
    borderBottom: '1px solid {elements.border.primary.static}',
    '@sm': {
      mx: 'calc(0px - {space.6})',
    },
    '@xl': {
      mx: 0,
      alignSelf: 'flex-start',
      py: '{space.8}',
      px: '{space.8}',
      display: 'flex',
      height: 'calc(100vh - {docus.header.height})',
      maxHeight: 'none',
      borderBottom: 'none',
      '.fluid &&': {
        borderLeft: '1px solid {elements.border.primary.static}',
      }
    },
    '.toc-wrapper': {
      width: '100%',
      height: '100%',
      backdropFilter: '{elements.backdrop.filter}',
      backgroundColor: '{elements.backdrop.background}',
      '@lg': {
        backgroundColor: 'transparent',
        backdropFilter: 'none'
      },
      button: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        py: '{space.4}',
        px: '{space.4}',
        '@sm': {
          px: '{space.6}',
        },
        '@lg': {
          display: 'none'
        },
        '.title': {
          fontSize: '{text.sm.fontSize}',
          lineHeight: '{text.sm.lineHeight}',
          fontWeight: '{fontWeight.semibold}',
          marginRight: '{space.1}',
        },
        '.icon': {
          width: '{space.4}',
          height: '{space.4}',
          transition: 'transform 100ms',
          '&.rotate': {
            transform: 'rotate(90deg)'
          }
        }
      },
      '.docs-toc-wrapper': {
        display: 'none',
        marginBottom: '{space.4}',
        '&.opened': {
          display: 'block',
          px: '{space.4}',
          maxHeight: '50vh',
          overflow: 'auto',
          '@sm': {
            px: '{space.6}',
          },
          '@lg': {
            maxHeight: 'none',
            px: 0,
          },
        },
        '@lg': {
          marginTop: 0,
          display: 'block'
        }
      }
    }
  }
})
</style>