<script lang="ts" setup>
import { EditableCancelTrigger, EditableEditTrigger, EditableInput, EditablePreview, EditableRoot, EditableSubmitTrigger } from '../'
</script>

<template>
  <Story title="Editable/Default" :layout="{ type: 'single' }">
    <Variant title="default">
      <EditableRoot v-slot="{ isEditing }" data-testid="root">
        <EditablePreview data-testid="preview" />
        <EditableInput data-testid="input" />
        <EditableEditTrigger v-if="!isEditing" data-testid="edit" />
        <div v-else class="flex flex-col gap-4">
          <EditableSubmitTrigger data-testid="submit" />
          <EditableCancelTrigger data-testid="cancel" />
        </div>
      </EditableRoot>
    </Variant>
  </Story>
</template>
