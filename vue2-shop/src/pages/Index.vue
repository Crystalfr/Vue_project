<template>
  <div class="index-wrap">
    <div class="index-left">
      <div class="index-left-block">
        <h2>全部产品</h2>

        <!-- 一类产品的开始 -->
        <template v-for="product in productList">
          <h3>{{ product.title }}</h3>
          <ul>
            <li v-for="item in product.list">
              <a target="_blank" :href="item.url">{{ item.name }}</a>
              <span v-if="item.hot">HOT</span>
            </li>
          </ul>
          <div v-if="!product.last" class="hr"></div>
        </template>
        <!-- 一类产品的结束 -->
      </div>
      <!-- news start -->
      <div class="index-left-block lastest-news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="news-item">{{item.title}}</a>
          </li>
        </ul>
      </div>
      <!-- news end -->
      <!-- index-left-block -->
    </div>
    <!-- index-left E -->
    <div class="index-right">

    </div>
    <!-- index-right E -->
  </div>
</template>

<script type="text/javascript">
  export default {
    created () {
      this.$http.get('http://localhost:3000/getNewsList')
      .then(response => {
        console.log(response)
        this.newsList = response.data
      }, error => {
        console.log(error)
      })
    },
    data () {
      return {
        newsList: [],
        productList: {
          pc: {
            title: 'PC产品',
            list: [
              {
                name: '数据统计',
                url: 'http://bbs.duchengjiu.top'
              },
              {
                name: '数据预测',
                url: 'http://bbs.duchengjiu.top'
              },
              {
                name: '流量分析',
                url: 'http://bbs.duchengjiu.top',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://bbs.duchengjiu.top'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://bbs.duchengjiu.top'
              },
              {
                name: '产品助手',
                url: 'http://bbs.duchengjiu.top',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://bbs.duchengjiu.top'
              },
              {
                name: '团队语音',
                url: 'http://bbs.duchengjiu.top'
              }
            ]
          }
        }
        // product list end
      }
    }
  }
</script>

<style media="screen" scoped>
.index-wrap {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}
.index-left {
  float: left;
  width: 300px;
  text-align: left;
}
.index-right {
  float: right;
  width: 900px;
}
.index-left-block {
  margin: 15px;
  background: #fff;
  box-shadow: 0 0 1px #ddd;
}
.index-left-block .hr {
  margin-bottom: 20px;
}
.index-left-block h2 {
  background: #4fc08d;
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 20px;
}
.index-left-block h3 {
  padding: 0 15px 5px 15px;
  font-weight: bold;
  color: #222;
}
.index-left-block ul {
  padding: 10px 15px;
}
.index-left-block ul li {
  padding: 5px;
}
/*news style S*/
/*news style S*/
.news-item {
  display: inline-block;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
