<template>
  <div>
    <div class="box" v-for="(indexItems, index) in itemsList" @click="itemClick( index )">
      <div class="itemImg" >
        <img :src="indexItems.img" alt=""/>
      </div>
      <p>{{ indexItems.title }}--{{ indexItems.img }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['itemClick', 'itemsList']
  }
</script>
