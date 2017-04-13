<template>
  <div class='solt' :style="styleObject">
    {{layout.id}}
  </div>
</template>

<script>
export default {
  props: ['layout', 'scale'],
  name: 'image-solt',
  data () {
    return {
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
}
</style>
