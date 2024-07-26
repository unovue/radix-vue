<script setup lang="ts">
import { computed, ref } from 'vue'
import { ComboboxAnchor, ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport, useFilter } from 'reka-ui'
import { Icon } from '@iconify/vue'
import './styles.css'

const { contains } = useFilter({ sensitivity: 'base' })

const v = ref('')
const query = ref('')
const options = [
  { name: 'Fruit', children: [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Honeydew' },
    { name: 'Grapes' },
    { name: 'Watermelon' },
    { name: 'Cantaloupe' },
    { name: 'Pear' },
  ] },
  { name: 'Vegetable', children: [
    { name: 'Cabbage' },
    { name: 'Broccoli' },
    { name: 'Carrots' },
    { name: 'Lettuce' },
    { name: 'Spinach' },
    { name: 'Bok Choy' },
    { name: 'Cauliflower' },
    { name: 'Potatoes' },
  ] },
]

const filteredOptions = computed(() =>
  options
    .map(group => ({ name: group.name, children: group.children.filter(option => contains(option.name, query.value)) }))
    .filter(group => group.children.length),
)
</script>

<template>
  <ComboboxRoot
    v-model="v"
    class="ComboboxRoot"
  >
    <ComboboxAnchor class="ComboboxAnchor">
      <ComboboxInput
        class="ComboboxInput"
        placeholder="Placeholder..."
      />
      <ComboboxTrigger>
        <Icon
          icon="radix-icons:chevron-down"
          class="ComboboxIcon"
        />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="ComboboxContent">
      <ComboboxViewport class="ComboboxViewport">
        <template
          v-for="(group, index) in filteredOptions"
          :key="group.name"
        >
          <ComboboxGroup v-if="group.children.length">
            <ComboboxSeparator
              v-if="index !== 0"
              class="ComboboxSeparator"
            />

            <ComboboxLabel class="ComboboxLabel">
              {{ group.name }}
            </ComboboxLabel>

            <ComboboxItem
              v-for="option in filteredOptions"
              :key="option.name"
              :value="option.name"
              class="ComboboxItem"
            >
              <ComboboxItemIndicator
                class="ComboboxItemIndicator"
              >
                <Icon icon="radix-icons:check" />
              </ComboboxItemIndicator>
              <span>
                {{ option }}
              </span>
            </ComboboxItem>
          </ComboboxGroup>
        </template>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
</template>
