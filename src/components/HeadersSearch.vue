<template>
  <div class="header-search">
    <Input
      @on-focus="showFocus()"
      @on-blur="showBlur()"
      @on-search="pushto(keyword)"
      search
      v-model="keyword"
      enter-button
      size="large"
      placeholder="搜索商家或地址"
    />
    <div v-if="show&&list.length===0" class="searching">
      <div>热门搜索</div>
      <div v-for="item in hotPlace" @click="pushto(item.name)" :key="item.id">{{ item.name }}</div>
    </div>
    <div v-if="show&&list.length>0" class="searching">
      <div v-for="item in list" :key="item.id" @click="pushto(item.name)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeadersSearch",
  props: {},
  data() {
    return {
      show: false,
      keyword: "",
      list: []
    };
  },
  components: {},
  methods: {
    searchSug() {},
    pushto(name) {
      this.keyword = name;
      console.log(this.$route);
      if (this.$route.params.name !== name) {
        this.$router.push({ name: "descs", params: { name: name } });
      }
    },
    showFocus() {
      this.show = true;
      // this.getSearchHotPlace();
    },
    showBlur() {
      setTimeout(() => {
        this.show = false;
      }, 200);
    }
  },
  mounted() {
    if (this.$route.params.name) {
      this.keyword = this.$route.params.name;
    }
  },
  filters: {},
  watch: {
    keyword(val) {
      if (val === "") {
        this.list = [];
      } else {
        this.$api.searchSug(this.$store.state.city, val).then(res => {
          if (res.code === 200) {
            this.list = res.data.top.slice(0, 10);
          }
        });
      }
    }
  },
  computed: {
    hotPlace() {
      return this.$store.state.hotPlace;
    }
  }
};
</script>

<style scoped lang='scss'>
.header-search {
  padding-top: 28px;
  height: 40px;
  width: 550px;
  position: relative;
  /deep/ input {
    border: 1px solid rgb(226, 226, 226);
    font-size: 14px;
    outline: none;
    box-shadow: none;
  }
  /deep/ input:hover {
    border: 1px solid rgb(226, 226, 226);
    outline: none;
    box-shadow: none;
  }
  /deep/ .ivu-input-group-append {
    width: 80px;
    background: #ffc300 !important;
    border: 1px solid #ffc300 !important;
    box-shadow: none;
    .ivu-icon-ios-search {
      color: black;
      font-size: 26px;
    }
  }
  .search-box {
    position: absolute;
    top: 69px;
    left: 0;
    width: 470px;
    height: 70px;
    background: white;
    border: 1px solid #e5e5e5;
    z-index: 999;
  }
  .searching {
    position: absolute;
    top: 69px;
    left: 0;
    width: 470px;
    background: white;
    border: 1px solid #e5e5e5;
    z-index: 999;
    div {
      padding-left: 10px;
    }
  }
}
</style>