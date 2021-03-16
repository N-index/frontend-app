<template>
  <transition appear mode="out-in">
    <slot />
  </transition>
</template>
<script>
export default {
  name: "FadeAnimation",
};
</script>
<style scoped>
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s;
}
</style>