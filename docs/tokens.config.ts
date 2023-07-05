import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: '#0B0A0A',
    // Primary is modified lightblue
    primary: {
      100: '#E6FAF2',
      200: '#BFF3E0',
      300: '#99EBCD',
      400: '#4DDCA7',
      500: '#00CD81',
      600: '#00B974',
      700: '#007B4D',
      800: '#005C3A',
      900: '#003E27'
    },
    gray: {
      50: '#FBFBFB',
      100: '#F6F5F4',
      200: '#ECEBE8',
      300: '#DBD9D3',
      400: '#ADA9A4',
      500: '#97948F',
      600: '#67635D',
      700: '#36332E',
      800: '#201E1B',
      900: '#121110'
    },
    red: {
      50: '#FFF9F8',
      100: '#FFF3F0',
      200: '#FFDED7',
      300: '#FFA692',
      400: '#FF7353',
      500: '#FF3B10',
      600: '#BB2402',
      700: '#701704',
      800: '#340A01',
      900: '#1C0301'
    },
    blue: {
      50: '#F2FAFF',
      100: '#DFF3FF',
      200: '#C6EAFF',
      300: '#A1DDFF',
      400: '#64C7FF',
      500: '#1AADFF',
      600: '#0069A6',
      700: '#014267',
      800: '#002235',
      900: '#00131D'
    },
    green: {
      50: '#ECFFF7',
      100: '#DEFFF1',
      200: '#C3FFE6',
      300: '#86FBCB',
      400: '#3CEEA5',
      500: '#0DD885',
      600: '#00B467',
      700: '#006037',
      800: '#002817',
      900: '#00190F'
    },
    yellow: {
      50: '#FFFCEE',
      100: '#FFF6D3',
      200: '#FFF0B1',
      300: '#FFE372',
      400: '#FFDC4E',
      500: '#FBCA05',
      600: '#CBA408',
      700: '#614E02',
      800: '#292100',
      900: '#1B1500'
    },
    shadow: {
      initial: '{color.gray.400}',
      dark: '{color.gray.800}'
    }
  },
  shadow: {
    xs: '0px 1px 2px 0px {color.shadow}',
    sm: '0px 1px 3px 0px {color.shadow}, 0px 1px 2px -1px {color.shadow}',
    md: '0px 4px 6px -1px {color.shadow}, 0px 2px 4px -2px {color.shadow}',
    lg: '0px 10px 15px -3px {color.shadow}, 0px 4px 6px -4px {color.shadow}',
    xl: '0px 20px 25px -5px {color.shadow}, 0px 8px 10px -6px {color.shadow}',
    '2xl': '0px 25px 50px -12px {color.shadow}',
    none: '0px 0px 0px 0px transparent'
  },
  docus: {
    $schema: {
      title: 'All the configurable tokens from Docus.',
      tags: [
        '@studioIcon material-symbols:docs'
      ]
    },
    body: {
      backgroundColor: {
        initial: '{color.white}',
        dark: '{color.gray.900}'
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}'
      },
      fontFamily: '{font.sans}'
    },
    header: {
      height: '64px',
      logo: {
        height: {
          initial: '{space.6}',
          sm: '{space.7}'
        }
      },
      title: {
        fontSize: '{fontSize.2xl}', 
        fontWeight: '{fontWeight.bold}', 
        color: {
          static: {
            initial: '{color.gray.900}', 
            dark: '{color.gray.100}', 
          },
          hover: '{color.primary.500}', 
        }
      }
    },
    footer: { height: { initial: '145px', sm: '100px' }, padding: '{space.4} 0' },
    readableLine: '78ch',
    loadingBar: {
      height: '3px',
      gradientColorStop1: '#00dc82',
      gradientColorStop2: '#34cdfe',
      gradientColorStop3: '#0047e1'
    }
  },
  typography: {
    color: {
      primary: {
        50: '{color.primary.50}',
        100: '{color.primary.100}',
        200: '{color.primary.200}',
        300: '{color.primary.300}',
        400: '{color.primary.400}',
        500: '{color.primary.500}',
        600: '{color.primary.600}',
        700: '{color.primary.700}',
        800: '{color.primary.800}',
        900: '{color.primary.900}'
      },
      secondary: {
        50: '{color.gray.50}',
        100: '{color.gray.100}',
        200: '{color.gray.200}',
        300: '{color.gray.300}',
        400: '{color.gray.400}',
        500: '{color.gray.500}',
        600: '{color.gray.600}',
        700: '{color.gray.700}',
        800: '{color.gray.800}',
        900: '{color.gray.900}'
      }
    }
  }
})
