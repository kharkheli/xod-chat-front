<script setup lang="ts">
import EmojiPicker from "@lib/emoji/EmojiPicker.vue";
import { OnClickOutside } from "@vueuse/components";
import EmojiIcon from "~icons/fluent/emoji-24-regular";
</script>

<template>
  <div class="h-full flex flex-row">
    <div class="w-80 border-r border-gray-600"></div>
    <div class="flex flex-col w-full">
      <div
        class="text-gray-400 px-5 flex items-center h-14 shrink-0 border-b border-gray-600"
      >
        hello
      </div>
      <div class="h-full overflow-auto">
        <div
          class="h-[200vh] bg-gradient-to-t from-indigo-900 to-amber-600"
        ></div>
      </div>
      <div
        class="relative items-end flex px-5 shrink-0 min-h-[3.5rem] bg-gray-700 border-t border-gray-600"
      >
        <div class="w-full">
          <textarea
            type="text"
            class="bg-transparent w-full"
            placeholder="Write a message..."
          />
        </div>
        <div
          class="h-[3.5rem] w-10 relative overflow-visible flex items-center justify-center"
        >
          <EmojiPicker />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
