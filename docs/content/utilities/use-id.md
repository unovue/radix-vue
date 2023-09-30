--- 
metaTitle: useId
metaDescription: Generate random id
---

<script setup>
import Description from '../../components/Description.vue'
</script>

# useId

<Description>
Generate random id
</Description>


## Usage

```ts
import { useId } from 'radix-vue'

const buttonId = useId() // radix-1
```


```ts
import { useId } from 'radix-vue'

const buttonId = useId('test-id') // test-id
```
