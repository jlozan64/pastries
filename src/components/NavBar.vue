<template>
  <nav class="nav w-screen z-20 bg-purple-800 text-black">
    <div class="left">
        <span class="font-semibold">Tina's Pastries</span>
    </div>
    <div class="right">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/About">About</router-link> |
      <router-link class="link" to="/Products">Products</router-link> | 
      <router-link class="link" to="/Locations">Locations</router-link> |
      <router-link class="link" to="/Checkout">Checkout</router-link> |
      <router-link class="link" to="/Login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style lang="scss" scoped>
.nav {
  @apply h-24 fixed px-12 flex justify-between items-center;
}
.link {
  @apply px-2 font-semibold;
  &:hover {
    @apply text-yellow-500;
  }
}
</style>