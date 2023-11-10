<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div>
    <div>
      <div class="i-carbon-campsite fz100" />
    </div>
    <p class="fz50">
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
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
