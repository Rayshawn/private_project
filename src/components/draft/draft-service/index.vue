<template src="./draft-service.html"></template>
<script>
  import items from './index-item'
  export default {
    components: {
      items
    },
    created () {
    },
    data () {
      document.title = '票据服务'
      return {
        itemsList: [{'img': '../../../assets/logo.png', title: 'demo1'},
                    {'img': '../../../assets/logo.png', title: 'demo1'},
                    {'img': '../../../assets/logo.png', title: 'demo1'},
                    {'img': '../../../assets/logo.png', title: 'demo1'}]
      }
    },
    methods: {
      itemClick (index) {
        alert('点击>' + index)
      }
    }
  }
</script>
