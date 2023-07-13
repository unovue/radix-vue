---
metaTitle: Server side rendering
metaDescription: Radix Primitives can be rendered on the server.
---

<script setup>
import Description from '../../components/Description.vue'
</script>

# Server side rendering

<Description>
Radix Primitives can be rendered on the server.
</Description>

## Overview

Server side rendering or `SSR`, is a technique used to render components to HTML on the server, as opposed to rendering them only on the client.

Static rendering is another similar approach. Instead it pre-renders pages to HTML at build time rather than on each request.

You should be able to use all of our primitives with both approaches, for example with [Nuxt.js](https://nuxt.com/).

::: info
Some components' state might not rendered correctly in server-side, we are working on fixing it. If you encoutered any issue, feel free to open a ticket.
:::
