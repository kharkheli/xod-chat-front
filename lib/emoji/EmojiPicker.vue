<script setup lang="ts">
import EmojiPopup from "./EmojiPopup.vue";
import EmojiIcon from "~icons/fluent/emoji-laugh-16-regular";
import { OnClickOutside } from "@vueuse/components";
import { ref } from "vue";

const isPopupVisible = ref(false);
</script>

<template>
  <div class="relative w-8 h-8">
    <EmojiIcon
      @click="isPopupVisible = !isPopupVisible"
      class="cursor-pointer text-gray-400 hover:text-blue-400 w-8 h-8"
    />
    <div
      v-if="isPopupVisible"
      @click="isPopupVisible = true"
      class="emoji-cont rounded w-72 h-80 absolute right-0 bg-gray-700 shadow-lg"
    >
      <OnClickOutside @trigger="isPopupVisible = false">
        <EmojiPopup />
      </OnClickOutside>
    </div>
  </div>
</template>

<style>
.emoji-cont {
  bottom: 2rem;
}
</style>
