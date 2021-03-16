<template lang="">
  <main>
    <ul>
      <li 
        v-for="(item,index) in newsList"
        :key="index"
      >
        <transition appear="true">
          <h2> {{ item.title }} </h2>        
        </transition>
        <p> {{ item.description }} </p>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
    name: 'MainSection',
    props:{
        newsList: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>

<style scoped>
.v-enter-from,
.v-leave-to{
  transform: scaleY(0.3);
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transform-origin: left top;
  transition: opacity .3s,transform 1s;
}
main{
    padding: 2.5rem 6rem;
    background-color: var(--grayscale1-50);
}
h2{
    /* display: inline-block; */
    position:relative;
    font-size:3.2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-decoration: var(--grayscale1-800) underline;
}
p{
    font-size: 1.6rem;
    padding: 2.5rem 0;
    line-height: 2.5rem;
    color: var(--grayscale1-800)
}
p::first-letter{
    font-size: 1.5em;
    margin-right: .1rem;
    color:var(--grayscale1-700)
}
</style>