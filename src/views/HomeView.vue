<template>
  <div class="home">
     <HeaderArif />
  <HeroArif />
  <WomenItem />
  <InstaArif />
  <PartnerLogo />
  <FotherBawah />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderArif from '@/components/HeaderArif.vue';
  import HeroArif from '@/components/HeroArif.vue';
  import WomenItem from '@/components/WomenItem.vue';
  import InstaArif from '@/components/InstaArif.vue';
  import PartnerLogo from '@/components/PartnerLogo.vue';
  import FotherBawah from '@/components/FotherBawah.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderArif,
      HeroArif,
      WomenItem,
      InstaArif,
      PartnerLogo,
      FotherBawah
  }
}
</script>
