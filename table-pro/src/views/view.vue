<script setup lang="ts">
  import { ref, reactive } from 'vue'
  import TablePro from '@/components/TablePro'
  const tableProps = reactive({
    columns: [],
    data: [],
    height: '400px'
  })
</script>

<template>
  <TablePro v-bind="tableProps" />
</template>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
