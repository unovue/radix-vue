<script setup lang="ts"></script>

<template>
  <div class="flex flex-col items-center px-5 min-h-screen -mt-20">
    <div
      class="max-w-7xl relative w-full flex flex-col items-center overflow-y-clip h-full py-20"
    >
      <div
        class="gradient-ball-small absolute"
        style="
          left: 35%;
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
      <h1
        class="font-bold text-center text-[58px] break-words max-w-[684px] leading-[55.8px] mt-[100px]"
      >
        Production Grade Design System, in an instant.
      </h1>
      <p class="hero-description">
        Unstyled, accessible components for building high‑quality design systems and web
        apps in Vue.
      </p>
      <div class="mt-11 w-full flex justify-center">
        <NuxtLink to="/overview/getting-started"
          class="rounded-2xl px-10 py-4 text-xl font-semibold bg-gradient-to-r from-green-600 to-teal-600 items-center hover:from-green-700 hover:to-teal-700 transition-colors duration-200 justify-center flex"
        >
          Get Started
        </NuxtLink>
      </div>
      <div class="grid grid-cols-3 mt-20 w-full max-w-5xl gap-5">
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
  width: 620px;
  height: 620px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(22, 102, 83, 0.47) 10%,
    rgba(17, 51, 101, 0.1) 90%,
    rgba(17, 51, 101, 0) 100%
  );
  user-select: none;
}

.gradient-ball {
  width: 900px;
  height: 900px;

  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(22, 102, 83, 0.47) 0%,
    rgba(31, 93, 185, 0.05) 90%,
    rgba(31, 93, 185, 0) 100%
  );
  user-select: none;
}
</style>
