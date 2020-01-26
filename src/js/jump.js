import Vue from 'vue'
Vue.prototype.$goDetail = function(name) {
    this.$router.push({
        name: "detail",
        query: {
            city: this.$store.state.city,
            id: name
        }
    });
}
Vue.prototype.$goResult = function(name) {
    this.$router.push({
        name: "result",
        params: {
            name: name
        }
    });
}