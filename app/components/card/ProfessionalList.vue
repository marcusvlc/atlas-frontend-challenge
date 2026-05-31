<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-x-7 p-4">
    <CardProfessional
      v-for="professional in professionals"
      :key="professional.id"
      :professional="professional"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  professionals: Professional[];
}>();
</script>
