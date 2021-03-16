<template>
  <div>
    <home-header />
    <ul class="tabs">
      <li
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab', { 'tab-active': isCurrentTab(item) }]"
      >
        <button
          class="tab-button"
          @click="changeTab(item)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
    <transition
      mode="out-in"
      appear="true"
    >
      <component
        :is="currentTabComputed"
        :news-list="listFromHome"
      />
    </transition>
  </div>
</template>
<script>
import NewsHeader from "./components/NewsHeader";
import MainSection from "./components/MainSection";
import HotSection from "./components/HotSection";
import NearSection from "./components/NearSection";

export default {
  data() {
    return {
      currentTab: "main-section",
      tabs: [
        { componentId: "main-section", title: "主页" },
        { componentId: "hot-section", title: "热门" },
        { componentId: "near-section", title: "附近" },
      ],
      listFromHome: [
        {
          title: "Central Solutions Orchestrator",
          description:
            "Consequatur odit assumenda similique rerum. Aliquid ipsum dolore in possimus molestiae eum nobis. Ducimus aliquid velit officia sapiente repellendus ut. Animi similique sit illum incidunt ex saepe.",
        },
        {
          title: "Dynamic Infrastructure Administrator",
          description:
            "Odit ipsa quia nesciunt qui. Nobis ea voluptas sed architecto ipsum quod sed. Alias dolore minima molestias quis occaecati dolor et repellat. Quos recusandae nihil unde.",
        },
        {
          title: "Customer Factors Manager",
          description:
            "Consequuntur ratione dolores alias sed consequatur non sunt. Consequatur ea modi non. Ut sapiente deleniti.",
        },
        {
          title: "District Factors Architect",
          description:
            "Tempore officia iusto quo magni commodi libero et voluptas voluptates. Inventore omnis consequatur et odit eum ad inventore. Quos reprehenderit blanditiis magnam vitae. Molestias quis quia nulla. Soluta corrupti unde qui quia explicabo voluptates ab.",
        },
        {
          title: "Direct Functionality Planner",
          description:
            "Sed voluptatum error dolor eius accusantium. Aliquam quas est eaque neque omnis. Omnis assumenda odio ut voluptatem sint eligendi et. Animi facere amet velit incidunt. Et est minus atque eos voluptatem laboriosam. Soluta natus placeat laborum eaque doloremque iusto.",
        },
      ],
    };
  },
  mounted() {
    // axios.get('/api/')
  },
  components: {
    NewsHeader,
    MainSection,
    HotSection,
    NearSection,
  },
  computed: {
    currentTabComputed() {
      return this.currentTab;
    },
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab.componentId;
    },
    isCurrentTab(item) {
      return item.componentId === this.currentTabComputed;
    },
  },
};
</script>
<style>
.tabs {
  margin: 3rem auto;
  display: flex;
  justify-content: center;
  font-size: 2.2rem;
}
.tab {
  margin: 0.2rem;
  border-radius: 5px;
  transition: 0.3s;
}
.tab:hover {
  background-color: #e3e3e3;
}
.tab-active {
  background-color: #e3e3e3;
}
.tab-button {
  padding: 0.8rem;
  background-color: transparent;
  font-size: 2.2rem;
  font-weight: 500;
  cursor: pointer;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s;
}
</style>