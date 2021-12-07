<template>
  <div id="app">
    <div class="row">
      <gh-button @click="login">登录</gh-button>
      <gh-button type="primary">注册</gh-button>
      <gh-button type="success">删除</gh-button>
      <gh-button type="info">删除</gh-button>
      <gh-button type="warning">删除</gh-button>
      <gh-button type="danger">删除</gh-button>
    </div>
    <div class="row">
      <gh-button>登录</gh-button>
      <gh-button plain type="primary">注册</gh-button>
      <gh-button plain type="success">删除</gh-button>
      <gh-button plain type="info">删除</gh-button>
      <gh-button plain type="warning">删除</gh-button>
      <gh-button plain type="danger">删除</gh-button>
    </div>
    <div class="row">
      <gh-button>登录</gh-button>
      <gh-button round type="primary">注册</gh-button>
      <gh-button round type="success">删除</gh-button>
      <gh-button round type="info">删除</gh-button>
      <gh-button round type="warning">删除</gh-button>
      <gh-button circle type="danger">删除</gh-button>
    </div>
    <div class="row">
      <gh-button>登录</gh-button>
      <gh-button icon="gh-icon-alert" type="primary"></gh-button>
      <gh-button type="success"></gh-button>
      <gh-button type="info">删除</gh-button>
      <gh-button type="warning">删除</gh-button>
      <gh-button @click="deleteFn" disabled type="danger">删除</gh-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  },
  methods: {
    login(data) {
      console.log('login', data)
    },
    deleteFn() {
      console.log('delete')
    }
  }
};
</script>

<style lang="less">
.row {
  margin: 20px;
  .gh-button {
    margin-right: 20px
  }
}
</style>
