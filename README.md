# 美团

- [x] View UI

  https://www.iviewui.com/docs/introduce

- [ ] ...











## API

###  获取定位

```js
http://localhost:8888/position
```

### 获取所有省份

```js
http://localhost:8888/province
```

### 获取省份所有城市

``` js
http://localhost:8888/citys/省份id
```

### 获取城市具体信息

``` js
http://localhost:8888/crumbs?city=城市名
```

### 省市关联

``` js
http://localhost:8888/city
```

### 热门城市

``` js
http://localhost:8888/hotCity
```

### 全部分类

``` js
http://localhost:8888/menu
```

### 热门搜索

``` js
http://localhost:8888/hotPlace?city=城市名
```

### 搜索建议

``` js
http://localhost:8888/searchTop?city=城市名input=关键词
```

### 根据关键词搜索

``` js
http://localhost:8888/results?city=城市名&keyword=关键词
```

### 商铺详情

``` js
http://localhost:8888/products?keyword=商铺名称&city=城市名
```

### 有格调 (调关键词搜索接口)

#### 对应的tab

- 约会聚餐 => 美食
- 丽人spa => 丽人
- 电影演出 => 电影
- 品质出游 => 旅游
- 全部 => 景点

### 登录

``` js
http://localhost:8888/users/login  (post)
```

参数:

  - username: 用户名
  - password: 密码

### 注册

``` js
http://localhost:8888/users/register  (post)
```

参数:

  - username: 用户名
  - password: 密码
  - email: 邮箱

### 需要用到的图片路径

+ 头像

- //s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg
- 端午酒店
- //p0.meituan.net/codeman/843d7347cb20d945e4bc39b6403f0515182965.png
- 涨知识
- //p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg
- 我是商家
- //p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg
- 休闲生活
- //p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg
- 二维码
- //s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png
- 登录注册
- //s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg

### 协议链接

http://www.meituan.com/about/terms
