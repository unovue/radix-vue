<script setup lang="ts">
import { EditableArea, EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from 'radix-vue'
import './styles.css'
</script>

<template>
  <EditableRoot v-slot="{ isEditing }" placeholder="Enter text..." class="EditableRoot">
    <EditableArea class="EditableArea">
      <EditablePreview />
      <EditableInput />
    </EditableArea>
    <EditableEditTrigger
      v-if="!isEditing"
      class="EditableTrigger"
    />
    <div v-else class="EditableWrapper">
      <EditableSubmitTrigger
        class="EditableSubmitTrigger"
      />
      <EditableCancelTrigger
        class="EditableTrigger"
      />
    </div>
  </EditableRoot>
</template>
