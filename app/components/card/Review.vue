<template>
  <UCard>
    <div class="flex gap-2">
      <CommonsOptimizedImage
        :src="review.avatar"
        :width="60"
        :height="60"
        custom-class="rounded-full flex-shrink-0 w-15 h-15"
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
