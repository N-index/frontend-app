<template>
  <div>
    <h6 >两天相差的天数</h6>
    <animated-integer :originalValue="betweenDays"></animated-integer>
    <div class="input-group">
      <span>起始日期：</span>
      <date-input v-model="startDate"></date-input>
    </div>
    <div class="input-group">
      <span>结束日期：</span>
      <date-input v-model="endDate"></date-input>
    </div>
  
    <circle-progress :outProgress="outProgress"></circle-progress>
  </div>
</template>

<script>
import DateInput from "../components/DateInput";
import { getBetweenDays } from "../utils/getBetweenDays";
import AnimatedInteger from "../common/animation/AnimatedInteger"
import CircleProgress from "../components/CircleProgress"
export default {
  name:"between",
  data() {
    return {
      startDate: "2017-07-04",
      endDate: "2019-02-22",
      outProgress: 0
    };
  },
  computed: {
    betweenDays() {
      return getBetweenDays(this.startDate, this.endDate);
    },
  },
  methods:{
    increaseProgress(){
      this.outProgress += 20;
      setTimeout(this.increaseProgress,2000);
    }
  },
  mounted(){
    this.increaseProgress();
  },
  components: {
    DateInput,
    AnimatedInteger,
    CircleProgress
  },
};
</script>
