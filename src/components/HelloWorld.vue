<script setup lang="ts">
import { useCounterStore } from "@/store/modules/count";
import { makeNumberProp } from "@/utils/class";

const counterStore = useCounterStore();
type numberArr = 0 | 1 | 2;

// defineProps<{ msg: string }>();
defineProps({
  msg: String,
  number: makeNumberProp<numberArr>(0),
});
</script>

<template>
  <div class="card">
    <button type="button" @click="counterStore.increment">
      count is {{ counterStore.count }}

      {{ number }}
    </button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
