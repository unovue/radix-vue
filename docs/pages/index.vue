<script setup lang="ts">
import { Icon } from "@iconify/vue";

definePageMeta({
  colorMode: "dark",
});
</script>

<template>
  <div class="flex flex-col items-center px-5 min-h-screen -mt-20">
    <div class="z-[-1] bg-black fixed h-screen w-screen" />
    <div
      class="max-w-7xl relative w-full flex flex-col items-center overflow-y-clip h-full py-20"
    >
      <div
        class="gradient-ball-small absolute"
        style="
          left: 30%;
          top: 5%;
          transform: translateX(-50%) translateY(-50%);
          z-index: -1;
        "
      />
      <div
        class="gradient-ball absolute"
        style="
          right: 16%;
          top: 30%;
          transform: translateX(50%) translateY(-50%);
          z-index: -1;
        "
      />
      <div
        class="gradient-ball absolute"
        style="
          left: 10%;
          bottom: 20%;
          transform: translateX(-50%) translateY(50%);
          z-index: -1;
        "
      />
      <div class="mt-[90px] flex flex-col items-center">
      <h1
        class="font-bold text-center text-5xl md:text-[58px] break-words max-w-[680px] md:leading-[55.8px] tracking-tight"
      >
        Build Production Grade Components, in an Instant.
      </h1>
      <p class="hero-description">
      <span class="text-green-400 underline underline-offset-4">Unstyled,</span> <span class="text-green-400 underline underline-offset-4">accessible</span> components for building <span class="text-green-400 underline underline-offset-4">high‑quality</span> design systems and web
        apps in Vue.
      </p>
    </div>
      <div class="mt-11 w-full flex gap-2 justify-center">
        <NuxtLink
          to="/overview/getting-started"
          class="rounded-2xl px-10 py-4 text-xl font-medium bg-gradient-to-r from-green-600 to-teal-500 items-center hover:from-green-600 hover:to-teal-400 transition-colors duration-200 justify-center flex"
        >
          Quick Start
        </NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-28 w-full max-w-5xl gap-x-6 gap-y-5">
        <HomeCard
          title="Accordion"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAccordion />
        </HomeCard>
        <HomeCard
          title="Aspect Ratio"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAspectRatio />
        </HomeCard>
        <HomeCard
          title="Avatar"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAvatar />
        </HomeCard>
        <HomeCard
          title="Slider"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosSlider />
        </HomeCard>
        <HomeCard
          title="Switch"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosSwitch />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
        <HomeCard
          title="Dialog"
          description="With modal and non-modal modes, fine-grained focus control, accessible to screen readers."
        >
          <HomeDemosAlertDialog />
        </HomeCard>
      </div>
    </div>
  </div>
</template>

<style>
.hero-description {
  margin-top: 17px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: -0.01em;
  opacity: 70%;
  max-width: 720px;
}

.gradient-ball-small {
  width: 1020px;
  height: 1020px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(22, 102, 83, 0.47) 0%,
    rgba(17, 51, 101, 0.15) 75%,
    rgba(17, 51, 101, 0) 100%
  );
  user-select: none;
}

.gradient-ball {
  width: 1480px;
  height: 1480px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(22, 102, 83, 0.47) 0%,
    rgba(17, 51, 101, 0.15) 75%,
    rgba(17, 51, 101, 0) 100%
  );
  user-select: none;
}
</style>
