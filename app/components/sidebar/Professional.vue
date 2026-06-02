<template>
  <USlideover
    :ui="{ content: 'max-w-3xl' }"
    title="Perfil do profissional"
    v-model:open="open"
  >
    <template #body>
      <div class="h-full flex flex-col gap-4">
        <SidebarProfessionalProfile
          :name="profesional.name"
          :photo="profesional.photo"
          :profession="profesional.profession"
          :services="profesional.services"
        />

        <hr class="h-px text-slate-800 w-full" />

        <section class="flex gap-3">
          <CardMetric
            icon="i-lucide-star"
            icon-class="bg-yellow-500"
            title="Avaliação"
            :value="`${profesional.rating} (${profesional.reviews.length})`"
            class="flex-1"
          />
          <CardMetric
            icon="i-lucide-map-pin"
            icon-class="bg-blue-500"
            title="Localização"
            :value="`${profesional.distance} km`"
            class="flex-1"
          />
          <CardMetric
            icon="i-lucide-briefcase"
            icon-class="bg-green-500"
            title="Experiência"
            :value="`${profesional.experienceYears} anos`"
            class="flex-1"
          />
        </section>

        <section
          class="flex flex-col gap-4 bg-primary/10 p-4 rounded-lg border border-primary/15 text-center"
        >
          <span class="text-sm text-gray-400">Valor do serviço</span>
          <h1 class="text-primary font-bold text-2xl">
            R$ {{ profesional.hourlyRate }}
            <span class="text-xs! text-gray-600">/hora</span>
          </h1>
        </section>

        <section class="flex flex-col gap-2">
          <h2 class="text-md font-bold">Sobre</h2>
          <p class="text-sm text-slate-500">{{ profesional.description }}</p>
        </section>

        <hr class="h-px text-slate-800 w-full" />

        <section class="flex flex-col gap-2">
          <h2 class="text-md font-bold">Galeria de trabalhos</h2>

          <div class="grid grid-cols-3 gap-2">
            <NuxtImg
              v-for="(image, index) in profesional.gallery"
              :key="index"
              :src="image"
              class="rounded-lg object-cover w-full h-48"
            ></NuxtImg>
          </div>
        </section>

        <hr class="h-px text-slate-800 w-full" />

        <section>
          <h2 class="text-md font-bold mb-4">Avaliações recentes</h2>

          <div class="flex flex-col gap-3">
            <CardReview
              v-for="review in recentReviews"
              :key="review.id"
              :review="review"
            />
          </div>
        </section>
      </div>
    </template>
  </USlideover>
</template>

<script lang="ts" setup>
import type { Professional } from "~~/shared/types/professionals";

const NUMBER_OF_RECENT_REVIEWS = 3;

const open = defineModel<boolean>("open");

const props = defineProps<{
  profesional: Professional;
}>();

const recentReviews = computed(() => {
  return props.profesional.reviews.slice(0, NUMBER_OF_RECENT_REVIEWS);
});
</script>
