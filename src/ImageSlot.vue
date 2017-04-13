<template>
  <div class='solt' :style="styleObject" @click='choosefile'>
    <div class='placeholder' v-if='!imageData' :style="{'line-height': styleObject.height}">+</div>
    <input type="file" @change="previewImage" class='hide' accept="image/*" ref='input'>
    <img :src='imageData' :style="imgStyle" ref='img'>
  </div>
</template>

<script>
export default {
  props: ['layout', 'scale'],
  name: 'image-solt',
  data () {
    return {
      imageData: null,
      imgStyle: {}
    }
  },
  methods: {
    previewImage(event) {
      var self = this;
      var input = event.target;
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = (e) => {
          this.imageData = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);

        var img = self.$refs.img;
        img.onload = ()=>{
          if (img.width / img.height > self.$el.offsetWidth / self.$el.offsetHeight){
            self.imgStyle = {'height': '100%'};
          } else {
            self.imgStyle = {'width': '100%'};
          }
        }
      }
    },
    choosefile(){
      this.$refs.input.click();
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
}
</script>

<style>
.solt{
  position: absolute;
  border:2px dashed #000;
  overflow: hidden;
}
.placeholder{
  font-size: 100px;
  color: rgb(138, 138, 138);
}
.hide{
  display: none;
}
</style>
