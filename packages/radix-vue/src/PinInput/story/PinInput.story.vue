<script setup lang="ts">
import { ref } from 'vue'
import { PinInputInput, PinInputRoot } from '..'
import { Label } from '@/Label'

const value = ref<string[]>([])
const button = [
  'mt-4 text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px]',
  'bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none',
]
</script>

<template>
  <Story
    title="PinInput/Default"
    :layout="{ type: 'single', iframe: false }"
  >
    <Variant title="default">
      <div>
        <Label for="otp">Input label</Label>

        <PinInputRoot
          id="otp"
          v-model="value"
          placeholder="○"
          class="flex gap-2 items-center"
          @complete="e => console.log(e.join(''))"
        >
          <PinInputInput
            v-for="(id, index) in 5"
            :key="id"
            class="w-10 h-10 rounded text-center text-green10 placeholder:text-mauve5"
            :index="index"
          />
        </PinInputRoot>

        <button
          :class="button"
          @click="value = []"
        >
          Reset value
        </button>
      </div>
    </Variant>
  </Story>
</template>
