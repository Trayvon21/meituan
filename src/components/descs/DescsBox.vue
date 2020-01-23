<template>
  <div class="box-container">
    <div class="left-pic">
      <img v-if="item.photos[0]" :src="item.photos[0].url" alt />
      <img v-else src="../../assets/none.jpg" alt />
    </div>
    <div class="right-desc">
      <div class="right-title">{{item.name}}</div>
      <div class="right-rate" v-if="item.biz_ext">
        <Rate disabled show-text :v-model="item.biz_ext.rating*1" />
        <span class="commit">0人评论</span>
      </div>
      <div class="right-main">
        <span class="type">{{item.type}}</span>
        <span class="address">{{item.address}}</span>
        <span class="show-map">查看地图</span>
      </div>
      <div>
        <div v-if="item.biz_ext.cost>0">人均￥{{item.biz_ext.cost}}</div>
        <div v-else>暂无数据</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescsBox",
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    console.log(this.item);
  },
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.box-container {
  margin: 11px 20px;
  padding: 20px 0 16px;
  display: flex;
  border-bottom: 1px solid #e9e9e9;
}
.left-pic {
  width: 220px;
  height: 125px;
  border-radius: 4px;
  overflow: hidden;
  img {
    width: 100%;
  }
}
.right-desc {
  margin-left: 20px;
  .right-title {
    font-weight: 500;
    font-size: 16px;
    color: #333;
    display: block;
  }
  .commit {
    color: #ff9900;
  }
  .right-main {
    height: 20px;
    display: flex;
    span {
      font-size: 12px;
      color: #666;
      display: block;
      margin-right: 10px;
      height: 20px;
      line-height: 20px;
    }
    .type {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 110px;
    }
    .address{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 450px;
    }
  }
}
</style>