<template>
  <div class="w-full h-full">
    <div v-if="professionals.length" class="card-list">
      <CardProfessional
        v-for="professional in professionals"
        :key="professional.id"
        :professional="professional"
        @on-see-profile="emit('onSeeProfile', professional)"
      />
    </div>

    <UEmpty
      v-else
      class="h-full"
      title="Nenhum profissional encontrado"
      description="Não foi localizado nenhum profissional para a configuração fornecida"
      icon="i-lucide-briefcase"
    />
  </div>
</template>

<script setup lang="ts">
import type { Professional } from "~~/shared/types/professionals";

const emit = defineEmits<{
  onSeeProfile: [professional: Professional];
}>();

defineProps<{
  professionals: Professional[];
}>();
</script>
