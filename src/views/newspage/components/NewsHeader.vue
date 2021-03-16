<template>
  <div class="home-header">
    <img
      class="home-header-img"
      src="http://germ.run/imgsizer/abc.jpg?m=fit&q=100&v=X4qThw&w=850&s=b%276CpN1OwTsIY7bFimb68jzVfbbWo%27"
      alt="图片未显示"
    >
  </div>
</template>
<script>
export default {
    name: 'HomeHeader'
    
}
</script>
<style scoped>
.home-header{
    overflow: hidden;
    height: 0;
    padding-bottom: 25%;
    background-color: rgb(170, 224, 224);
}
.home-header-img{
    display: block;
    margin: 0 auto;
    width: 100%;
}


    
</style>