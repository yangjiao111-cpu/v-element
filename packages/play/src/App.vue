<script setup lang="ts">
const confirm = () => {
  console.log('确认')
}
const cancel = () => {
  console.log('取消')
}
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
  <er-popconfirm title="确认信息" @confirm="confirm" @cancel="cancel">
    <er-button>点击确认</er-button>
  </er-popconfirm>
</template>

<style scoped>
</style>
