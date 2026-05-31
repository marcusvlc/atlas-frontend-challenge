<template>
  <div class="w-full h-full">
    <div
      v-if="professionals.length"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 gap-x-7"
    >
      <CardProfessional
        v-for="professional in professionals"
        :key="professional.id"
        :professional="professional"
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
defineProps<{
  professionals: Professional[];
}>();
</script>
