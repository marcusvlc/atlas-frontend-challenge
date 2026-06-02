<template>
  <UCard class="bg-slate-800 border border-slate-700">
    <div class="flex items-center flex-col text-center gap-3">
      <UIcon :name="icon" :class="iconClass" />

      <div class="flex flex-col gap-2">
        <span class="text-sm text-gray-400">{{ title }}</span>
        <span class="text-xs font-bold">{{ value }}</span>
      </div>
    </div>
  </UCard>
</template>

<script lang="ts" setup>
defineProps<{
  title: string;
  value: string;
  icon: string;
  iconClass?: string;
}>();
</script>
