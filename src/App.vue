<template>
  <css-doodle class="background-pattern">
    @grid: 1 / 180px; background: @shaders( texture_0 { @grid: 1 / 100%;
    background: linear-gradient(45deg, @stripe.@m20.@p( #d62828, #fcbf49,
    #eae2b7, #000 )); } fragment { void main() { vec2 uv = gl_FragCoord.xy /
    u_resolution.xy; gl_FragColor = texture2D(texture_0, uv); } } );
  </css-doodle>

  <navbar></navbar>

  <router-view v-slot="{ Component }">
    <fade-animation>
        <keep-alive exclude="between"> <component :is="Component" /> </keep-alive>
    </fade-animation>
  </router-view>
</template>

<script>
import Navbar from "./components/Navbar";
import FadeAnimation from "./common/animation/FadeAnimation";
import BounceIn from "./common/animation/BounceIn";

export default {
  name: "App",
  components: {
    Navbar,
    FadeAnimation,
    BounceIn,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";

#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  min-height: 110vh;
}
.background-pattern {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
