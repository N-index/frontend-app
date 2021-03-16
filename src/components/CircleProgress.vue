<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <div class="progress-group">
    <div class="progress" :style="outlineStyle">
      <span class="progress__center"></span>

      <transition>
        <span class="progress__dot" :style="styleOfDot" v-show="showDot"></span>
      </transition>

      <span class="progress__text">
        <animated-integer :originalValue="progress"></animated-integer>%
      </span>
    </div>

    <!-- <input type="range" min="0" max="100" v-model="progress" id="range" /> -->
  </div>
</template>

<script>
import AnimatedInteger from "../common/animation/AnimatedInteger";
import gsap from "gsap";
export default {
  name: "CircleProgress",
  props: ["outProgress"],
  data() {
    return {
      progress: 0,
    };
  },
  components: {
    AnimatedInteger,
  },
  watch: {
    outProgress(value) {
      if (value > 100) {
        value = 100;
      }
      gsap.to(this.$data, { duration: 0.5, progress: value });
    },
  },
  computed: {
    showDot() {
      return this.progress > 0 && this.progress < 100 ? true : false;
    },
    leftOfDot() {
      return (
        50 + 48 * Math.cos((2 * Math.PI * this.progress) / 100 + Math.PI / 2)
      );
    },
    topOfDot() {
      return (
        50 - 49 * Math.sin((2 * Math.PI * this.progress) / 100 + Math.PI / 2)
      );
    },
    styleOfDot() {
      return {
        left: `${this.leftOfDot}%`,
        top: `${this.topOfDot}%`,
      };
    },
    positionOfWhite() {
      return 360 * (1 - this.progress / 100);
    },
    outlineStyle() {
      return {
        background: `conic-gradient(#dfdfdf 0  ${this.positionOfWhite}deg, #286bd7 ${this.positionOfWhite}deg, #42b4fc )`,
      };
    },
  },
};
</script>

<!-- Use preprocessors via the lang attribute! e.g. <style lang="scss"> -->
<style lang="scss" scoped>
@import "@/assets/scss/mixins";
@import "@/assets/scss/variables";
.v-leave-active {
  transition: opacity 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.progress-group {
  @include flexCenter(column);
}
.progress {
  position: relative;
  background: conic-gradient(#fff 0deg 180deg, #3eb9fd, #3d4cc8, #fff);
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin-bottom: 45px;

  &__center {
    width: 95%;
    height: 95%;
    border-radius: 50%;

    @include transformCenter();
    background-color: #fff;
    z-index: 1;
  }

  &__dot {
    width: 8%;
    height: 8%;
    border-radius: 50%;

    @include transformCenter();
    background-color: $dot-color;
    z-index: 1;
  }

  &__text {
    z-index: 2;
    @include transformCenter();
    color: $dot-color;
    font-size: 28px;
    font-weight: 500;
  }
}
</style>
