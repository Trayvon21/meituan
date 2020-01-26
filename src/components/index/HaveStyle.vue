<template>
  <div class="style-container">
    <ul class="style-title">
      <li>有格调</li>
      <li v-for="item in titles" :key="item.id" @mouseenter="changeItem(item.key)">
        {{item.name}}
        <i :class="keyWord===item.key?'active':''"></i>
      </li>
    </ul>
    <div class="style-main" v-if="list.length>0">
      <div v-for="items in showList" :key="items.id" class="style-each">
        <div class="each-pic" @click="$goDetail(items.name)">
          <img :src="items.photos[0].url" v-if="items.photos.length>0" alt />
          <img src="../../assets/none.jpg" alt v-else />
        </div>
        <div class="each-title">{{items.name}}</div>
        <div class="each-type">{{items.type}}</div>
        <div class="each-cost" v-if="items.biz_ext.cost.length >0">
          <div>
            <span>￥</span>
            <span>{{items.biz_ext.cost}}</span>
            <span class="top">/起</span>
          </div>
          <div class="each-adname">{{items.adname}}</div>
        </div>
        <div class="each-cost" v-else>
          <div class="each-cost">价格未知</div>
          <div class="each-adname">{{items.adname}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HaveStyle",
  props: {},
  data() {
    return {
      titles: [
        { name: "全部", key: "景点" },
        { name: "约会聚餐", key: "美食" },
        { name: "丽人SPA", key: "丽人" },
        { name: "电影演出", key: "电影" },
        { name: "品质出游", key: "旅游" }
      ],
      keyWord: "景点",
      list: []
    };
  },
  components: {},
  methods: {
    changeItem(keyWord) {
      this.keyWord = keyWord;
    },
    getData() {
      this.titles.map(item => {
        this.$api.searchResults(this.$store.state.city, item.key).then(res => {
          if (res.code === 200) {
            this.list.push({
              name: item.key,
              list: res.data.pois.slice(0, 6)
            });
          }
        });
      });
    }
  },
  mounted() {},
  updated() {},
  filters: {},
  watch: {
    city(val) {
      if (val !== "") {
        this.getData();
      }
    }
  },
  computed: {
    showList() {
      let count = this.list.filter(item => item.name === this.keyWord);
      if (count.length > 0) {
        return count[0].list;
      } else return;
    },
    city() {
      return this.$store.state.city;
    }
  }
};
</script>

<style scoped lang='scss'>
.style-container {
  width: 1192px;
  margin: 0 auto;
}
.style-title {
  display: flex;
  height: 44px;
  width: 100%;
  background: rgb(190, 164, 116);
  border-radius: 5px 5px 0 0;
  line-height: 44px;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  li {
    padding: 0 5px;
    color: white;
    cursor: pointer;
    position: relative;
    &:nth-child(1) {
      font-size: 18px;
      margin-left: 13px;
      margin-right: 10px;
    }
    .active {
      width: 2px;
      position: absolute;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-bottom: 7px solid white;
      bottom: 0;
      left: 0px;
      right: 0;
      margin: auto;
    }
  }
}
.style-main {
  width: 1192px;
  height: 650px;
  background: white;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
  .style-each {
    width: 390px;
    height: 314px;
    padding: 10px;
    .each-pic {
      width: 370px;
      height: 208px;
      overflow: hidden;
      border-radius: 4px;
      img {
        cursor: pointer;
        width: 370px;
      }
    }
    .each-title {
      color: #222;
      height: 22px;
      line-height: 22px;
      margin-bottom: 8px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
    }
    .each-type {
      font-size: 12px;
      color: #999;
      line-height: 18px;
      height: 18px;
      margin-bottom: 7px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .each-cost {
      font-size: 22px;
      color: #be9e4d;
      margin-right: 6px;
      display: flex;
      justify-content: space-between;
      .top {
        font-size: 12px;
        letter-spacing: -0.6px;
      }
    }
    .each-adname {
      font-size: 12px;
      color: #999;
      float: right;
      margin-top: 10px;
    }
  }
  .style-each:hover {
    background: #f4f4f4;
    transition: background-color 500ms;
    border-radius: 4px;
  }
}
</style>