<template>
  <nav class="nav">
    <ul class="nav__list">
      <span class="nav__bg" ref="nav__bg"></span>
      <li
        class="nav__item"
        v-for="item in comps"
        :key="item"
        @click="
          changeTab(item);
          moveBg($event.target);
        "
        :ref="item"
      >
        <router-link class="nav__link" :to="{ path: '/' + item }">{{
          item
        }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "navbar-component",
  data() {
    return {
      comps: ["monster", "between", "self","news"],
      compId: "between",
    };
  },
  mounted() {
    console.log(this.$route.path);
    console.log(this.$route);
    
    // this.changeTab("monster");
    // this.moveBg(this.$refs["monster"]);
  },
  computed: {
    currentTab() {
      return this.compId;
    },
  },
  methods: {
    changeTab(item) {
      this.compId = item;
    },
    moveBg(target) {
      this.$refs["nav__bg"].style.left = target.offsetLeft + "px";
      this.$refs["nav__bg"].style.width = target.offsetWidth + "px";
    },
  },
};
</script>
<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height:10rem;
  font-size: 2rem;
  font-weight: 500;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // text-decoration: ;
  text-transform: capitalize;

  // padding:3rem;
  // overflow: hidden;

  &__list {
    display: flex;
    flex-shrink: 0;

    list-style: none;
    border-radius: 15px;
    position: relative;
    background: rgba(221, 211, 211, 0.603);
    padding: 1.5rem 2.5rem ;
  }

  &__bg {
    pointer-events: none;
    transition: 0.3s;
    position: absolute;
    top: 25%;
    bottom: 25%;
    left: 5px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.3);
  }
  
  &__item {
    flex-grow: 1;
    flex-shrink: 0;
    border-radius: 15px;
    margin: .5rem;
    z-index: 1;
  }

  &__link {
    display: inline-block;
    padding: 1.2rem 2rem;
    text-decoration: none;
    color: #000;
  }
}
</style>