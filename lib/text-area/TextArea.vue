<script lang="ts" setup>
import { ref } from "vue";

const areaRef = ref<HTMLTextAreaElement | null>(null);
defineProps({
  placeholder: {
    type: String,
    default: "",
  },
  modelValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits<(e: "update:modelValue", v: string) => void>();

function handleInputChange() {
  emit("update:modelValue", areaRef.value.value);
  areaRef.value.style.height = "auto";
  areaRef.value.style.height = areaRef.value.scrollHeight + "px";
}
</script>

<template>
  <div
    class="max-h-72 overflow-auto w-full flex items-center min-h-[3rem]"
    @click="areaRef.focus()"
  >
    <textarea
      :value="modelValue"
      contenteditable="true"
      @input="handleInputChange"
      ref="areaRef"
      :placeholder="placeholder"
      cols="20"
      rows="1"
      class="text-gray-400 leading-6 bg-transparent w-full outline-none resize-none"
    ></textarea>
  </div>
</template>
