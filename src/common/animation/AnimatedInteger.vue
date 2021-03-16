<template>
<!-- todo：自定义渲染的tag类型: -->
  <span>{{ animatedValue }}</span>
</template>
<script>
import gsap from "gsap";

export default {
  data() {
    return {
      mediumValue: 0,
    };
  },
  props: ["originalValue"],
  computed: {
    animatedValue() {
      return this.mediumValue.toFixed(0);
    },
  },
  watch: {
    originalValue(value) {
      gsap.to(this.$data, { duration: 0.5, mediumValue: value });
    },
  },
};
</script>
