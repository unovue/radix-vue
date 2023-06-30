const { blackA, green, mauve, violet, red } = require('@radix-ui/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...mauve,
        ...violet,
        ...green,
        ...red,
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              'h1, h2, h3, h4': {
                fontWeight: theme('fontWeight.bold'),
                'scroll-margin-top': 'var(--scroll-mt)'
              },
              'h1 a, h2 a, h3 a, h4 a': {
                borderBottom: 'none !important',
                color: 'inherit',
                fontWeight: 'inherit'
              },
              a: {
                fontWeight: theme('fontWeight.medium'),
                textDecoration: 'none',
                borderBottom: '1px solid transparent'
              },
              'a:hover': {
                borderColor: 'var(--tw-prose-links)'
              },
              'a:has(> code)': {
                borderColor: 'transparent !important'
              },
              'a code': {
                color: 'var(--tw-prose-code)',
                border: '1px dashed var(--tw-prose-pre-border)'
              },
              'a:hover code': {
                color: 'var(--tw-prose-links)',
                borderColor: 'var(--tw-prose-links)'
              },
              pre: {
                margin: '0',
                borderRadius: '0.375rem',
                border: '1px solid var(--tw-prose-pre-border)',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word'
              },
              code: {
                backgroundColor: 'var(--tw-prose-pre-bg)',
                padding: '0.25rem 0.375rem',
                borderRadius: '0.375rem',
                border: '1px solid var(--tw-prose-pre-border)'
              },
              'code::before': {
                content: ''
              },
              'code::after': {
                content: ''
              },
              'blockquote p:first-of-type::before': {
                content: ''
              },
              'blockquote p:last-of-type::after': {
                content: ''
              },
              'input[type="checkbox"]': {
                color: 'rgb(var(--color-primary-500))',
                borderRadius: theme('borderRadius.DEFAULT'),
                borderColor: 'rgb(var(--color-gray-300))',
                height: theme('spacing.4'),
                width: theme('spacing.4'),
                marginTop: '-3.5px !important',
                marginBottom: '0 !important',
                '&:focus': {
                  '--tw-ring-offset-width': 0
                }
              },
              'input[type="checkbox"]:checked': {
                borderColor: 'rgb(var(--color-primary-500))'
              },
              'input[type="checkbox"]:disabled': {
                opacity: 0.5,
                cursor: 'not-allowed'
              },
              'ul.contains-task-list': {
                marginLeft: '-1.625em'
              },
              'ul ul': {
                paddingLeft: theme('padding.6')
              },
              'ul ol': {
                paddingLeft: theme('padding.6')
              },
              'ul > li.task-list-item': {
                paddingLeft: '0 !important'
              },
              'ul > li.task-list-item input': {
                marginRight: '7px'
              },
              'ul > li.task-list-item > ul.contains-task-list': {
                marginLeft: 'initial'
              },
              'ul > li.task-list-item a': {
                marginBottom: 0
              },
              'ul > li.task-list-item::marker': {
                content: 'none'
              },
              'ul > li > p': {
                margin: 0
              },
              'ul > li > span.issue-badge, p > span.issue-badge': {
                verticalAlign: 'text-top',
                margin: '0 !important'
              },
              'ul > li > button': {
                verticalAlign: 'baseline !important'
              },
              table: {
                wordBreak: 'break-all'
              }
            }
          },
          primary: {
            css: {
              '--tw-prose-body': 'rgb(var(--color-gray-700))',
              '--tw-prose-headings': 'rgb(var(--color-gray-900))',
              '--tw-prose-lead': 'rgb(var(--color-gray-600))',
              '--tw-prose-links': 'rgb(var(--color-primary-500))',
              '--tw-prose-bold': 'rgb(var(--color-gray-900))',
              '--tw-prose-counters': 'rgb(var(--color-gray-500))',
              '--tw-prose-bullets': 'rgb(var(--color-gray-300))',
              '--tw-prose-hr': 'rgb(var(--color-gray-100))',
              '--tw-prose-quotes': 'rgb(var(--color-gray-900))',
              '--tw-prose-quote-borders': 'rgb(var(--color-gray-200))',
              '--tw-prose-captions': 'rgb(var(--color-gray-500))',
              '--tw-prose-code': 'rgb(var(--color-gray-900))',
              '--tw-prose-pre-code': 'rgb(var(--color-gray-900))',
              '--tw-prose-pre-bg': 'rgb(var(--color-gray-50))',
              '--tw-prose-pre-border': 'rgb(var(--color-gray-200))',
              '--tw-prose-th-borders': 'rgb(var(--color-gray-300))',
              '--tw-prose-td-borders': 'rgb(var(--color-gray-200))',
              '--tw-prose-invert-body': 'rgb(var(--color-gray-200))',
              '--tw-prose-invert-headings': theme('colors.white'),
              '--tw-prose-invert-lead': 'rgb(var(--color-gray-400))',
              '--tw-prose-invert-links': 'rgb(var(--color-primary-400))',
              '--tw-prose-invert-bold': theme('colors.white'),
              '--tw-prose-invert-counters': 'rgb(var(--color-gray-400))',
              '--tw-prose-invert-bullets': 'rgb(var(--color-gray-600))',
              '--tw-prose-invert-hr': 'rgb(var(--color-gray-800))',
              '--tw-prose-invert-quotes': 'rgb(var(--color-gray-100))',
              '--tw-prose-invert-quote-borders': 'rgb(var(--color-gray-700))',
              '--tw-prose-invert-captions': 'rgb(var(--color-gray-400))',
              '--tw-prose-invert-code': theme('colors.white'),
              '--tw-prose-invert-pre-code': theme('colors.white'),
              '--tw-prose-invert-pre-bg': 'rgb(var(--color-gray-800))',
              '--tw-prose-invert-pre-border': 'rgb(var(--color-gray-700))',
              '--tw-prose-invert-th-borders': 'rgb(var(--color-gray-700))',
              '--tw-prose-invert-td-borders': 'rgb(var(--color-gray-800))'
            }
          },
          invert: {
            css: {
              '--tw-prose-pre-border': 'var(--tw-prose-invert-pre-border)',
              'input[type="checkbox"]': {
                backgroundColor: 'rgb(var(--color-gray-800))',
                borderColor: 'rgb(var(--color-gray-700))'
              },
              'input[type="checkbox"]:checked': {
                backgroundColor: 'rgb(var(--color-primary-400))',
                borderColor: 'rgb(var(--color-primary-400))'
              }
            }
          }
        }
      },
    },
  },
  plugins: [],
}