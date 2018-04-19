<template>
<div class="PublicLayout">
  <AppHeader></AppHeader>
  <div class=" p-0 main">
    <nuxt/>
  </div>
  <AppFooter></AppFooter>
</div>

</template>

<script>
import AppHeader from '@/components/tmd/landing/layout/Header';
import AppFooter from '@/components/FooterDropbox';
export default {
  name: 'PublicLayout',
  components: {
    AppHeader,
    AppFooter
  }
}

</script>

<style lang="scss" scoped="">
.PublicLayout {
  min-height: 700px;
  min-width: 100%;
}
</style>
