<template>
  <div class="flex flex-col items-center gap-4">
    <CommonsOptimizedImage
      :src="photo"
      :width="150"
      :height="150"
      custom-class="rounded-full w-40 h-40"
    />
    <h2 class="text-2xl font-bold">{{ name }}</h2>
    <p class="text-gray-500">{{ profession }}</p>

    <div class="flex flex-wrap justify-center gap-2 w-full">
      <UBadge
        v-for="service in services"
        :key="service"
        variant="soft"
        class="self-start"
        color="primary"
      >
        {{ service }}
      </UBadge>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  name: string;
  profession: string;
  photo: string;
  services: string[];
}>();
</script>
