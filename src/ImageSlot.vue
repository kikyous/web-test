<template>
  <div class='solt' :style="styleObject" @click='choosefile'>
    <span class='placeholder' v-if='!src'>+</span>
    <vue-core-image-upload
      v-bind:class="['hide']" 
      v-bind:crop="false" url="https://sm.ms/api/upload"
                          extensions="png,gif,jpeg,jpg"
                          inputOfFile='smfile'
                          text=''
                          v-on:imageuploaded="imageuploaded">
    </vue-core-image-upload>
    <img :src='src' :style="imgStyle">
  </div>
</template>

<script>
import VueCoreImageUpload  from 'vue-core-image-upload';
export default {
  props: ['layout', 'scale'],
  name: 'image-solt',
  data () {
    return {
      src: null,
      imgStyle: {}
    }
  },
  components: {
    VueCoreImageUpload
  },
  methods: {
    imageuploaded(res) {
      if (res.code == 'success') {
        if ((res.data.width / res.data.height) > (this.$el.offsetWidth / this.$el.offsetHeight)){
          this.imgStyle['height'] = '100%';
        } else {
          this.imgStyle['width'] = '100%';
        }
        this.src = res.data.url;
      }
    },
    choosefile(){
      this.$el.querySelector('input').click();
    }
  },
  computed: {
    styleObject (){
      return {
        left: (this.layout.center_x - this.layout.width / 2) * this.scale + 'px',
        top: (this.layout.center_y - this.layout.height / 2) * this.scale + 'px',
        width: this.layout.width * this.scale + 'px',
        height: this.layout.height * this.scale + 'px',
      }
    }
  },
  mounted () {
  },
}
</script>

<style>
.solt{
  position: absolute;
  border:1px dashed #000;
  overflow: hidden;
}
.placeholder{
  font-size: 50px;
}
</style>
