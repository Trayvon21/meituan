import service from './index'
export default {
    // ###  获取定位
    // http://localhost:8888/position
    getPosition() {
        return service.req('/position')
    },

    // ### 获取所有省份
    // http://localhost:8888/province
    getProvince() {
        return service.req('/province')
    },
    // ### 获取省份所有城市
    // http://localhost:8888/citys/省份id
    getCities(provinceId) {
        return service.req(`/citys/${provinceId}`)
    },
    // ### 获取城市具体信息
    // http://localhost:8888/crumbs?city=城市名
    getCityName(cityName) {
        return service.req(`/crumbs?city=${cityName}`)
    },
    // ### 省市关联
    // http://localhost:8888/city
    relateProvince() {
        return service.req('/city')
    },
    // ### 热门城市
    // http://localhost:8888/hotCity
    getHotCity() {
        return service.req('/hotCity')
    },
    // ### 全部分类
    // http://localhost:8888/menu
    getMenu() {
        return service.req('/menu')
    },
    // ### 热门搜索
    // http://localhost:8888/hotPlace?city=城市名
    searchHotPlace(cityName) {
        return service.req(`/hotPlace?city=${cityName}`)
    },
    // ### 搜索建议
    // http://localhost:8888/searchTop?city=城市名input=关键词
    searchSug(cityName, keyWord) {
        return service.req(`/searchTop?city=${cityName}&input=${keyWord}`)
    },
    // ### 根据关键词搜索
    // http://localhost:8888/results?city=城市名&keyword=关键词
    BySearchSug(cityName, keyWord) {
        return service.req(`/results?city=${cityName}&keyword=${keyWord}`)
    },
    // ### 商铺详情
    // http://localhost:8888/products?keyword=商铺名称&city=城市名
    getProducts(Products, cityName) {
        return service.req(`/products?keyword=${Products}&city=${cityName}`)
    },

    // ### 有格调 (调关键词搜索接口)
    // #### 对应的tab
    // - 约会聚餐 => 美食
    // - 丽人spa => 丽人
    // - 电影演出 => 电影
    // - 品质出游 => 旅游
    // - 全部 => 景点

    // ### 登录
    // http://localhost:8888/users/login  (post)
    // 参数: - username: 用户名 - password: 密码
    login(username, password) {
        return service.req('/users/login', {
            username,
            password
        })
    },
    // ### 注册
    // http://localhost:8888/users/register  (post)
    // 参数:- username: 用户名- password: 密码- email: 邮箱
    register(username, password, email) {
        return service.req('/users/login', {
            username,
            password,
            email
        })
    }
}