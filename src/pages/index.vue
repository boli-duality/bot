<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="pt100 dfc aic">
    <div class="i-carbon-bot fz100" />
    <p class="fz50">
      <a rel="noreferrer" href="https://github.com/boli-duality/vue3-template-normal" target="_blank">Bot</a>
    </p>
    <p class="fz20">
      <a rel="noreferrer" href="https://github.com/boli-duality" target="_blank">by BoLi</a>
    </p>
    <p>
      <em>{{ t('intro.desc') }}</em>
    </p>

    <div />

    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
