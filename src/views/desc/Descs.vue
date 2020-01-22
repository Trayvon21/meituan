<template>
  <div>122222</div>
</template>

<script>
export default {
  name: "Descs",
  props: {},
  data() {
    return { keyWord: "" };
  },
  components: {},
  methods: {
    mapInit() {
      AMapUI.loadUI(["misc/MarkerList"], function(MarkerList) {
        //启动页面
        initPage(MarkerList);
      });

      function initPage(MarkerList) {
        //创建一个实例
        var markerList = new MarkerList({
          map: map, //关联的map对象
          listContainer: "my-list", //列表的dom容器的节点或者id, 用于放置getListElement返回的内容
          getDataId: function(dataItem, index) {
            //返回数据项的Id
            return dataItem.id;
          },
          getPosition: function(dataItem) {
            //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
            return dataItem.position;
          },
          getMarker: function(dataItem, context, recycledMarker) {
            var content = "标注: " + (context.index + 1) + "",
              label = {
                offset: new AMap.Pixel(16, 18),
                content: content
              };

            if (recycledMarker) {
              //存在可回收利用的marker,直接setLabel返回
              recycledMarker.setLabel(label);
              return recycledMarker;
            }
            //返回一个新的Marker
            return new AMap.Marker({
              label: label
            });
          },
          getInfoWindow: function(dataItem, context, recycledInfoWindow) {
            var tpl = "<p><%- dataItem.id %>：<%- dataItem.desc %><p>";
            //MarkerList.utils.template支持underscore语法的模板
            var content = MarkerList.utils.template(tpl, {
              dataItem: dataItem,
              dataIndex: context.index
            });
            if (recycledInfoWindow) {
              //存在可回收利用的infoWindow, 直接setContent返回
              recycledInfoWindow.setContent(content);
              return recycledInfoWindow;
            }
            //返回一个新的InfoWindow
            return new AMap.InfoWindow({
              offset: new AMap.Pixel(0, -23),
              content: content
            });
          },
          getListElement: function(dataItem, context, recycledListElement) {
            var tpl = "<p><%- dataItem.id %>：<%- dataItem.desc %><p>";
            var content = MarkerList.utils.template(tpl, {
              dataItem: dataItem,
              dataIndex: context.index
            });
            if (recycledListElement) {
              //存在可回收利用的listElement, 直接更新内容返回
              recycledListElement.innerHTML = content;
              return recycledListElement;
            }
            //返回一段html，MarkerList将利用此html构建一个新的dom节点
            return "<li>" + content + "</li>";
          }
        });

        //监听选中改变
        markerList.on("selectedChanged", function(event, info) {});

        //监听Marker和ListElement上的点击，详见markerEvents，listElementEvents
        markerList.on("markerClick listElementClick", function(
          event,
          record
        ) {});

        //构建数据源，数据项本身没有格式要求，但需要支持getDataId和getPosition
        var data = [
          {
            id: "A",
            position: [116.020764, 39.904989],
            desc: "数据_1"
          },
          {
            id: "B",
            position: [116.405285, 39.904989],
            desc: "数据_2"
          },
          {
            id: "C",
            position: [116.789806, 39.904989],
            desc: "数据_3"
          }
        ];

        //绘制数据源，Let's go!
        markerList.render(data);

        //清除数据
        //markerList.render([]);
      }
    },
    BySearchSug() {
      this.$api.searchResults(this.$store.state.city,this.keyWord).then(res => {
        console.log(res);
      });
    }
  },
  mounted() {
    this.keyWord = this.$route.path.split("/")[2];
    console.log(this.keyWord);
    this.BySearchSug();
  },
  filters: {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>