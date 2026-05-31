<template>
  <UCard
    class="flex flex-col justify-center bg-slate-800 border border-slate-700 hover:border-primary"
    :ui="{
      body: 'p-3!',
    }"
  >
    <div class="text-center flex flex-col justify-center items-center">
      <img
        class="w-30 h-30 rounded-full mb-4"
        src="https://stories.cnnbrasil.com.br/wp-content/uploads/sites/9/2025/02/zoe-saldana-neytiri-avatar-2009-avatar-the-way-of-water-v0-vbjx7fv0qoed1.webp"
      />
      <div class="flex flex-col justify-center gap-3">
        <h2 class="text-lg font-bold">{{ professional.name }}</h2>
        <p class="text-sm text-gray-500">{{ professional.profession }}</p>

        <div class="flex items-center justify-center gap-1">
          <UIcon name="i-lucide-star" class="text-yellow-300" />
          <span class="text-xs font-semibold"
            >{{ professional.rating }} ({{ professional.reviews.length }})</span
          >
        </div>

        <div class="flex items-center justify-center gap-1">
          <UIcon name="i-lucide-map-pin" class="text-gray-500" />
          <span class="text-xs text-gray-500"
            >{{ professional.distance }} km de distância</span
          >
        </div>

        <div class="flex flex-wrap justify-center gap-2">
          <UBadge
            v-for="service in professional.services"
            :key="service"
            variant="soft"
            class="self-start"
            color="primary"
          >
            {{ service }}
          </UBadge>
        </div>
      </div>

      <hr class="text-slate-700 h-px w-full mt-5" />
    </div>

    <template #footer>
      <div class="flex flex-col gap-5 items-center justify-center">
        <div>
          <span class="text-xs text-gray-500 flex items-center">
            <h2 class="text-lg text-primary font-bold">
              R$ {{ professional.hourlyRate }}
            </h2>
            /hora
          </span>
        </div>

        <UButton block class="w-full" @click="emit('onSeeProfile')">
          Ver Perfil
        </UButton>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  onSeeProfile: [];
}>();

defineProps<{
  professional: Professional;
}>();
</script>
