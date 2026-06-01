<template>
  <div class="card-list">
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
