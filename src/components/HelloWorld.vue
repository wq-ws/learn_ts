<script setup lang="ts">
import { useCounterStore } from "@/store/modules/count";
import { type PropType } from "vue";

const counterStore = useCounterStore();
type numberArr = 0 | 1 | 2;

defineProps({
  msg: {
    type: String,
    default: "",
  },
  number: {
    type: Number as PropType<numberArr>,
    default: 0,
  },
});
// defineProps({keyof props});
// defineProps<props>();
// const props = withDefaults(defineProps<props>(), {
//   msg: "1",
//   number: 0,
// });
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
