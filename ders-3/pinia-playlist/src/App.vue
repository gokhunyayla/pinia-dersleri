<template>
  <header>
    <div class="container">
      <img src="@/assets/pinia-logo.svg" alt="Pinia" title="Pinia">
      <h1>Kişisel Günlüğüm</h1>
    </div>
  </header>

  <main>
    <div class="container">
      <div class="gunluk-listesi" v-for="gunluk in gunlukStore.diary">

        <gunluk-details :gunluk="gunluk"></gunluk-details>

      </div>
    </div>
  </main>
</template>

<script>
import GunlukDetails from './components/gunluk-details.vue'
import { useDiaryStore } from './stores/DiaryStore'

export default {
  components: {
    "gunluk-details": GunlukDetails
  },
  setup(){
    const gunlukStore = useDiaryStore();
    return { gunlukStore }
  }
}
</script>