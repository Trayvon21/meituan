<template>
  <div>
    <div class="AZ-title">
      <div>按拼音首字母选择：</div>
      <div v-for="item in AZ" :key="item.id">
        <a class="AZ-each" :href="`#${item}`">{{ item }}</a>
      </div>
    </div>
    <div v-for="item in AZ" :key="item.id" class="AZ-box">
      <div>
        <a class="AZ-label" :name="item">{{item}}</a>
      </div>
      <div class="AZ-detail">
        <div
          class="detail-each"
          v-for="items in citiesList[item]"
          :key="items.id"
          @click="$emit('changeCity',items.name)"
          :class="show(items.name)?'light':''"
        >{{ items.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AZ: [],
      citiesData: []
    };
  },
  props: {
    citiesList: {
      type: Object,
      default: () => {}
    },
    hostCities: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {
    getData() {
      this.AZ = Object.keys(this.citiesList);
      console.log(this.AZ);
      this.AZ.map(item => {
        this.citiesData.push(this.citiesList[item]);
      });
      console.log(this.citiesData);
    },
    show(city) {
      console.log(this.hostCities.some(item => item === city));
      return this.hostCities.some(item => item === city);
    }
  },
  mounted() {
    console.log(this.hostCities);
    setTimeout(() => {
      this.getData();
    }, 20);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.AZ-title {
  display: flex;
  margin-right: 50px;
  white-space: nowrap;
  justify-content: space-between;
  .AZ-each {
    display: inline-block;
    font-size: 15px;
    // margin: 0 17px;
    color: #666;
    width: 25px;
    height: 25px;
    padding-top: 2px;
    cursor: pointer;
    text-align: center;
    border-radius: 50%;
  }
  .AZ-each:hover {
    font-weight: 500;
    color: #222222;
    background: #f8f8f8;
  }
}
.AZ-box {
  padding: 13px 30px 13px 10px;
  border-radius: 10px;
  transition: background-color 500ms;
  display: flex;
  .AZ-label {
    display: inline-block;
    padding-top: 10px;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #222222;
    background: #ffd000;
  }
  .AZ-detail {
    display: flex;
    flex-wrap: wrap;
    width: 1065px;
    .detail-each {
      margin: 10px 20px;
      color: #666;
      font-size: 14px;
      cursor: pointer;
    }
    .detail-each:hover {
      font-weight: 700;
    }
    .light {
      color: #ff6600 !important;
    }
  }
}
</style>