<template>
  <div>
    <div class="stage">
      <div class="monster">
        <h2>{{ monsterName }}</h2>
        <div class="monster__health">
          <div
            class="monster__health-progress"
            :style="monsterHealthStyle"
          ></div>
          <span class="monster__health-text">{{ monsterHealth }}</span>
        </div>
      </div>
      <div class="player">
        <h2>{{ playerName }}</h2>
        <div class="player__health">
          <div class="player__health-progress" :style="playerHealthStyle"></div>
          <span class="player__health-text">{{ playerHealth }}</span>
        </div>
      </div>
    </div>

    <div class="operation">
      <button @click="attackMonster" :disabled="!canAttack">普通攻击</button>
      <button @click="specialAttackMonster" :disabled="!canSpecialAttack">
        蓄能攻击
      </button>
    </div>

    <div class="battle-log">
      <ul>
        <li v-for="(log, index) in logs" :key="index">{{ log.content }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: 0,
      monsterHealth: 250,
      monsterName: "monster!",
      monsterAttackStrength: 6,
      playerHealth: 100,
      playerName: "jason",
      playerAttackStrength: 10,
      logs: [],
    };
  },
  methods: {
    attackMonster() {
      this.monsterHealth -= this.playerAttackStrength;
      const that = this;
      // 怪兽反击！
      setTimeout(() => {
        that.attackPlayer();
      }, 500);
      this.round++;
    },
    specialAttackMonster() {
      this.monsterHealth -= this.playerAttackStrength;
      const that = this;
      // 怪兽反击！
      setTimeout(() => {
        that.attackPlayer();
      }, 500);
      this.round++;
    },
    attackPlayer() {
      this.playerHealth -= this.monsterAttackStrength;
    },
  },
  watch: {
    monsterHealth(value) {
      if (value <= 0) {
        this.monsterHealth = 0;
      }
    },
    playerHealth(value) {
      if (value <= 0) {
        this.playerHealth = 0;
      }
    },
  },
  computed: {
    monsterHealthStyle() {
      return {
        width: `${(this.monsterHealth / 250) * 100}%`,
      };
    },
    playerHealthStyle() {
      return {
        width: `${(this.playerHealth / 100) * 100}%`,
      };
    },
    canAttack() {
      return this.monsterHealth > 0 && this.playerHealth > 0;
    },
    canSpecialAttack() {
      return (
        this.round % 3 == 2 && this.monsterHealth > 0 && this.playerHealth > 0
      );
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/_mixins";

.stage {
  margin: 0 auto;
  background-color: bisque;
  width: 50%;
  padding: 25px;
  border-radius: 8px;
}
%health {
  overflow: hidden;
  position: relative;
  height: 45px;
  @include flexCenter(row);
  font-size: 25px;
  font-weight: 500;
  border-radius: 8px;
}
.monster__health,
.player__health {
  @extend %health;
}

%health-progress {
  transform-origin: left center;
  transition: width 0.3s ease-out;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: crimson;
}

.monster__health-progress,
.player__health-progress {
  @extend %health-progress;
}

%health-text {
  position: relative;
  color: #fff;
  z-index: 2;
  font-weight: 700;
  -webkit-text-stroke: 1px black;
}

.monster__health-text,
.player__health-text {
  @extend %health-text;
}
</style>