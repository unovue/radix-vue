<script lang="ts">
import PrimitiveProps from "@/Primitive";

// export interface ToggleGroupRootProps extends PrimitiveProps {
//   value?: string;
//   defaultValue?: string;
//   //onValueChange?: void;
//   disabled?: boolean;
//   rovingFocus?: boolean;
//   loop: boolean;
//   modelValue?: string | string[];
// }
</script>

<script setup lang="st">
import { computed } from "vue";
import { useVModel } from "@vueuse/core";

const emits = defineEmits(["update:modelValue"]);

const modelValue = useVModel(props, "modelValue", emits, {
  defaultValue: props.defaultValue,
  passive: true,
});
</script>
