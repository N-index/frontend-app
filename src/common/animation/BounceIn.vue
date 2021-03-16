<template>
  <transition
    mode="out-in"
    appear
    appear-active-class="animate__animated animate__bounceInRight"
    enter-active-class="animate__animated animate__bounceInRight"
    leave-active-class="animate__animated animate__fadeOutLeft"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: "BounceIn",
};
</script>
<style scoped>
.animate__bounceInRight{
  --animate-duration: .2s;
}
.animate__fadeOutLeft {
  --animate-duration: .3s;
}
</style>