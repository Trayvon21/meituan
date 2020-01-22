<template>
  <div class="hotcity-box">
   <div>热门城市：</div>
   <div v-for="item in hostCities" :key="item.id" class="hotcity" @click="$emit('changeCity',item)">
     {{ item }}
   </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      hostCities:[]
    };
  },
  props: {},
  components: {

  },
  methods: {
      getHotCities(){
          this.$api.getHotCity().then(res=>{
              if(res.code===200){
                res.data.hots.map(item=>{
                  if(item.name==='市辖区'){
                    
                    this.hostCities.push(item.province.substr(0,item.province.length-1))
                  }else{
                    this.hostCities.push(item.name.substr(0,item.name.length-1))
                  }
                })
              }
          })
      },
      // changeCity(item){
      //    localStorage.setItem('city',city)
      // this.$store.state.city = city;
      // this.$router.push("/");
      // }
  },
  mounted() {
      this.getHotCities()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.hotcity-box{
  display: flex;
  .hotcity{
    margin:0 20px;
    cursor: pointer;
  }
}
</style>