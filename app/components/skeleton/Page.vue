<template>
  <div class="flex flex-col gap-4">
    <div class="card-list">
      <SkeletonCard v-for="n in numberOfSkeletons" :key="n" />
    </div>
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
