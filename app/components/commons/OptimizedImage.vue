<template>
  <div
    class="relative overflow-hidden"
    :style="{ aspectRatio: `${width}/${height}` }"
  >
    <USkeleton
      v-if="isLoading"
      :ui="{ base: 'w-full h-full' }"
      class="absolute inset-0 z-10"
    />
    <NuxtImg
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :class="[customClass, 'object-cover']"
      loading="lazy"
      @load="onImageLoad"
      @error="onImageLoad"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Props {
  src: string;
  alt?: string;
  width: number | string;
  height: number | string;
  customClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  alt: "Image",
  customClass: "",
});

const isLoading = ref(true);

const onImageLoad = () => {
  isLoading.value = false;
};
</script>
