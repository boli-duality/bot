<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div class="pt100 dfc aic">
    <div class="i-carbon-bot fz100" />
    <p class="fz50">
      <a rel="noreferrer">BoLi</a>
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
