<template>
  <div id="page" :style="{height: page_height+'px'}">
    <image-slot v-for='i in layout.page.slots' :layout='i' :scale='scale' :key='i.id'></image-slot>
  </div>
</template>

<script>
import ImageSlot from './ImageSlot.vue'
export default {
  name: 'app',
  data () {
    return {
      layout_url: 'http://templates.shiyi.co/api/v1/layouts/2007',
      page_height: 300,
      layout: {
        page: {
          slots: []
        }
      },
      scale: 1
    }
  },
  components: {
    ImageSlot
  },
  mounted () {
    this.$http.get(this.layout_url).then(
      response => {
        this.layout = response.body;

        var width = this.$el.offsetWidth;
        var page = this.layout.page;
        this.page_height = width * (page.height / page.width);
        this.scale = width / page.width;
      },
      response => {
        alert('get layout failed')
      }
    );
  },
}
</script>

<style>
#page {
  margin: 0 auto;
  width: 90%;
  background-color: white;
  text-align: center;
  position: relative;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
