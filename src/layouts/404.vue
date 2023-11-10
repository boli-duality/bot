<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="pt100 dfc jcc aic">
    <div class="i-carbon-warning c-#e5a146 fz200" />
    <RouterView />
    <button class="btn w200 h50 bg-#09f c-#fff rad50 fz18" @click="router.back()">
      {{ t('button.back') }}
    </button>
  </main>
</template>

<style>
button{
  border:none;
}
</style>
