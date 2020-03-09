<template>
  <div>
    <div class="relative h-screen w-screen bg-cover bg-center shadow-2xl" 
    :style="`background-image:url(${bgImage})`"></div>
  </div>
</template>

<script>
import bgImage from "../assets/bg.jpg"
export default {
  name: "Home",
  data() {
    return{
      bgImage
    }
  }
  }
</script>
