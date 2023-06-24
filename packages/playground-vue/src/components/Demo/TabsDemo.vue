<script setup lang="ts">
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "radix-vue";
import { Icon } from "@iconify/vue";
import { ref } from "vue";

const toggleState = ref(true);
const toggleStateSingle = ref("tab1");
const toggleStateMultiple = ref(["1"]);

const toggleGroupItemClasses =
  "hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";
</script>

<template>
  <p>{{ toggleStateSingle }}</p>
  <TabsRoot
    class="flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4"
    v-model="toggleStateSingle"
  >
    <TabsList class="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab1"
      >
        Account
      </TabsTrigger>
      <TabsTrigger
        class="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
        value="tab2"
      >
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab1"
    >
      <p class="mb-5 text-mauve11 text-[15px] leading-normal">
        Make changes to your account here. Click save when you're done.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
          Name
        </label>
        <input
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="name"
          value="Pedro Duarte"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label class="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">
          Username
        </label>
        <input
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="username"
          value="@peduarte"
        />
      </fieldset>
      <div class="flex justify-end mt-5">
        <button class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Save changes
        </button>
      </div>
    </TabsContent>
    <TabsContent
      class="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
      value="tab2"
    >
      <p class="mb-5 text-mauve11 text-[15px] leading-normal">
        Change your password here. After saving, you'll be logged out.
      </p>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="currentPassword"
        >
          Current password
        </label>
        <input
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="currentPassword"
          type="password"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="newPassword"
        >
          New password
        </label>
        <input
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="newPassword"
          type="password"
        />
      </fieldset>
      <fieldset class="mb-[15px] w-full flex flex-col justify-start">
        <label
          class="text-[13px] leading-none mb-2.5 text-violet12 block"
          htmlFor="confirmPassword"
        >
          Confirm password
        </label>
        <input
          class="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
          id="confirmPassword"
          type="password"
        />
      </fieldset>
      <div class="flex justify-end mt-5">
        <button class="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
          Change password
        </button>
      </div>
    </TabsContent>
  </TabsRoot>
</template>
