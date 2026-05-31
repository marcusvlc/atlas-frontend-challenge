<template>
  <div class="grid grid-cols-4 gap-2">
    <SkeletonCard v-for="n in numberOfSkeletons" :key="n" />
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    numberOfSkeletons?: number;
  }>(),
  {
    numberOfSkeletons: 8,
  },
);
</script>
