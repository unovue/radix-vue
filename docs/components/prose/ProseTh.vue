<template>
  <th class="h-10 pb-1 [&:not(:first-child)]:pl-4 text-left">
    <slot />
  </th>
</template>

<style>
th > * {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>
