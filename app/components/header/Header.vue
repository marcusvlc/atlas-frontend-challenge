<template>
  <div class="flex items-center justify-between p-4">
    <div class="flex items-center gap-3">
      <div
        class="bg-[#0D231C] rounded-[0.5rem] flex items-center justify-center w-10 h-10 border border-[#03AA66]"
      >
        <UIcon name="i-lucide-briefcase" class="size-5 bg-[#00DC82]" />
      </div>
      <div>
        <h2 class="text-xl font-bold">Profissionais</h2>
        <span class="text-xs text-gray-400"
          >Encontre o profissional ideal para você</span
        >
      </div>
    </div>

    <div>
      <UBadge variant="subtle" color="neutral"
        >{{ professionalsTotalCount }} Profissionais registrados</UBadge
      >
    </div>
  </div>
</template>

<script setup lang="ts">
const { professionalsTotalCount } = useProfessionalsStore();
</script>
