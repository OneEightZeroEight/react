<template>
  <div>
    <Xheader/>
    <Search/>
    <Pannel/>
    <Xfooter />
  </div>
</template>
<script>
import Header from "./Header.vue";
import Search from "./Search.vue";
import Pannel from "./Pannel.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    Xheader: Header,
    Search,
    Pannel,
    Xfooter: Footer
  }
};
</script>
