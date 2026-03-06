<script setup lang="ts">
</script>

<template>
  <er-button type="primary" size="samll">test</er-button>
  <er-collapse :modelValue="['a']">
    <er-collapse-item title="标题A">
      <div>this is a content</div>
    </er-collapse-item>
  </er-collapse>
  <er-alert>
    <slot>
      this is content
    </slot>
  </er-alert>
</template>

<style scoped>
</style>
