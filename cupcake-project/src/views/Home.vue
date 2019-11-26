<template>
  <div class="body">
      <Carousel />
    <span class="lists">
      Small texts (component)
    </span>
    <span class="test-button">
      Test button and text.
    </span>
  </div>
</template>

<script>

import Carousel from '@/components/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Carousel
  }
};
</script>
