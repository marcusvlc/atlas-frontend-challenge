<template>
  <UCard>
    <div class="flex gap-2">
      <NuxtImg
        :src="review.avatar"
        width="15"
        height="15"
        class="w-15 h-15 rounded-full object-cover flex-shrink-0"
      />
      <div class="flex flex-col gap-2 flex-1">
        <h2 class="font-bold">{{ review.author }}</h2>

        <div class="flex flex-col gap-1">
          <span class="text-slate-500 text-xs">{{ review.comment }}</span>
          <span class="text-slate-400 text-xs">{{ review.date }}</span>
        </div>
      </div>

      <div class="flex ml-auto self-center">
        <UIcon
          name="i-lucide-star"
          class="bg-yellow-500"
          v-for="(_, index) in review.rating"
          :key="index"
        />
      </div>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
import type { Review } from "~~/shared/types/professionals";
defineProps<{
  review: Review;
}>();
</script>
