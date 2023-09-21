<script setup lang="ts">
import { useCounterStore } from "@/store/modules/count";

const counterStore = useCounterStore();

defineProps<{ msg: string }>();
</script>

<template>
  <div class="card">
    <button type="button" @click="counterStore.increment">
      count is {{ counterStore.count }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
