<template>
  <div class="profile">
    <header class="profile__header">
      <css-doodle class="profile__header-bg">
        @grid: 1 / 100vw 100vh; background-color: #0a0c27; background-size:
        200px 200px; background-image: @doodle( @grid: 6 / 100%; @size: 4px;
        font-size: 4px; color: hsl(@r240, 30%, 50%); box-shadow: @m3x5((
        calc(4em - @nx * 1em) calc(@ny * 1em) @p(@m3(currentColor),
        @m2(transparent)), calc(2em + @nx * 1em) calc(@ny * 1em) @lp )); );
      </css-doodle>
      <!-- <css-doodle >
        :doodle { flex: none; @grid: 12x16; @size: 800px 600px; overflow:
        hidden; background-color: #fff; } :container { animation: container 8s
        linear infinite both; } overflow: hidden; opacity: .85; @row(even) {
        animation: rowEven 8s ease both infinite @r(0, .15s); ::before {
        animation: before 8s ease both infinite @r(0, .15s); } ::after {
        animation: after 8s ease both infinite @r(0, .15s); } @odd { ::before {
        background-image: linear-gradient(#222052 50%, #ef4053 50%); } ::after {
        background-image: linear-gradient(#8D4024 50%, #fff 50%); } } @even {
        ::before { background-image: linear-gradient(90deg, #331610 50%, #D48835
        50%); } ::after { background-image: linear-gradient(90deg, #F36E55 50%,
        #fff 50%); } } } @row(odd) { animation: rowOdd 8s ease both infinite
        @r(2s, 2.15s); ::before { animation: before 8s ease both infinite @r(2s,
        2.15s); } ::after { animation: after 8s ease both infinite @r(2s,
        2.15s); } @odd { ::before { background-image: linear-gradient(#2589AD
        50%, #ef4053 50%); } ::after { background-image: linear-gradient(#066569
        50%, #0D2429 50%); } } @even { ::before { background-image:
        linear-gradient(90deg, #F3CE28 50%, #fff 50%); } ::after {
        background-image: linear-gradient(90deg, #EA9322 50%, #F36E55 50%); } }
        } ::before { content: ""; position: absolute; top: 0; left: 0; @size:
        100%; } ::after { content: ""; position: absolute; top: 50%; left: 50%;
        @size: 80%; margin-top: -40%; margin-left: -40%; border-radius: 100%; }
        @keyframes rowEven { 0% { transform: translate(50%, 0);} 6% { transform:
        translate(155%, 0);} 10% { transform: translate(150%, 0);} 50% {
        transform: translate(150%, 0);} 55% { transform: translate(45%, 0);} 60%
        { transform: translate(50%, 0);} 100% { transform: translate(50%, 0); }
        } @keyframes rowOdd { 0% { transform: translate(0%, 0);} 6% { transform:
        translate(105%, 0);} 10% { transform: translate(100%, 0);} 50% {
        transform: translate(100%, 0);} 55% { transform: translate(-5%, 0);} 60%
        { transform: translate(0%, 0);} 100% { transform: translate(0%, 0); } }
        @keyframes before { 0% { transform: rotate(0deg) } 6% { transform:
        rotate(95deg) } 10% { transform: rotate(90deg) } 50% { transform:
        rotate(90deg) } 55% { transform: rotate(-5deg) } 60% { transform:
        rotate(0deg) } } @keyframes after { 0% { transform: rotate(0deg) } 6% {
        transform: rotate(-95deg) } 10% { transform: rotate(-90deg) } 50% {
        transform: rotate(-90deg) } 55% { transform: rotate(5deg) } 60% {
        transform: rotate(0deg) } } @keyframes container { 0% { transform:
        scale(3) rotate(-45deg) translate3d(50px, -50px, 0); } 100% { transform:
        scale(3) rotate(-45deg) translate3d(-50px, 50px, 0); } }
      </css-doodle> -->
      <fade-animation>
        <img
          src="../../assets/avatar.jpg"
          alt="用户头像"
          class="profile__avatar"
        />
      </fade-animation>
    </header>
      <h2 class="profile__nickname" v-show="status">
        <span class="profile__nickname-text"> Matt Macejkovic</span>
      </h2>
  </div>
</template>
<script>
import FadeAnimation from "../../common/animation/FadeAnimation";
// import BounceIn from "../../common/animation/BounceIn";

export default {
  data() {
    return {
      status: true,
    };
  },
  components: {
    FadeAnimation,
    // BounceIn,
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/_mixins";

.profile {
  height: 180vh;

  &__header {
    position: relative;
    height: 45vh;
    box-shadow: -4px 2px 25px 5px rgba(60, 56, 92, 0.2);
    background-image: url(../../assets/self-header-bg.jpg);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    &-bg {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      content: "";
      position: absolute;
      display: inline-block;
      width: 2.5rem;
      height: 2.5rem;
      background: seashell;
      border-radius: 50%;
      top: 2rem;
      right: 2rem;
    }
  }

  &__avatar {
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    position: absolute;
    left: 15%;
    bottom: 0;
    border: dashed 3px #fff;
    transform: translateY(50%);
    box-shadow: 0 5px 25px 5px rgba(60, 56, 92, 0.2);
  }
  &__nickname {
    position: relative;
    display: inline-block;
    // margin-left: 15%;
    padding: 0.2rem 1.5rem;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: -4px 2px 25px 5px rgba(60, 56, 92, 0.2);

    &-text {
      font-weight: 700;
      @include textWithBg("../../assets/avatar.jpg");
    }
    &::before {
      z-index: -1;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(241, 241, 241, 0.89);
    }
  }
}
</style>