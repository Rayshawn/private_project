<template>
  <div class="contain-box">
    <div class="box-index" @click="itemClick(0)">
      <img src="../../../assets/logo.png" alt="">
      <p>挂失查询</p>
    </div>
    <div class="box-index" @click="itemClick(1)">
      <img src="../../../assets/logo.png" alt="">
      <p>挂失监控</p>
    </div>
    <div class="box-index" @click="itemClick(2)">
      <img src="../../../assets/logo.png" alt="">
      <p>大额行号</p>
    </div>
    <div class="box-index" @click="itemClick(3)">
      <img src="../../../assets/logo.png" alt="">
      <p>拒付保障</p>
    </div>
    <div class="box-index" @click="itemClick(4)">
      <img src="../../../assets/logo.png" alt="">
      <p>智能报价</p>
    </div>
    <div class="box-index" @click="itemClick(6)">
      <img src="../../../assets/logo.png" alt="">
      <p>门店查询</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['itemClick', 'itemsList'],
    computed: {
      // alert('执行computed')
      title () {
        return false
      }
    },
  }
</script>
<style>
.contain-box {

}
.box-index {
  margin-top: 10px;
  /*margin-left: 0.10rem;*/
  margin-left: 2.666%;
  float: left;
  width: 46%;
  background-color: #fff;
}
p {
  text-align: center;
  font-size: 0.18rem;
  color: #333;
  margin-top: 0.12rem;
  margin-bottom: 0.25rem;
}
img {
  margin-top: 0.25rem;
  margin-left: 25%;
  width: 50%;
}

</style>
