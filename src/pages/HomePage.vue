<template>
  <a-layout class="page-whole-content" :style="{ height: `${pageHeight}px`}">
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        v-model:selectedKeys="selectedKeys1"
        theme="dark"
        mode="horizontal"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          basic
        </a-menu-item>
        <a-menu-item key="2">advanced</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout class="page-content">
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            v-model:selectedKeys="selectedKeys2"
            v-model:openKeys="openKeys"
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <template #title>
              <span>
                <user-outlined />
                subnav 1
              </span>
            </template>
            <a-menu-item key="1">
              <router-link to="/">首页</router-link>
            </a-menu-item>
            <a-menu-item key="2">
              <router-link to="/about">关于</router-link>
            </a-menu-item>
            <a-menu-item key="3">
              <router-link to="/hello">欢迎</router-link>
            </a-menu-item>
            <a-menu-item key="4">
              <router-link to="/news">新闻</router-link>
            </a-menu-item>
            <a-menu-item key="5">
              <router-link to="/newFeature">setup</router-link>
            </a-menu-item>
            <a-menu-item key="6">
              <router-link to="/lifecycleSetup">setup生命周期</router-link>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <template #title>
              <span>
                <laptop-outlined />
                subnav 2
              </span>
            </template>
            <a-menu-item key="5">option5</a-menu-item>
            <a-menu-item key="6">option6</a-menu-item>
            <a-menu-item key="7">option7</a-menu-item>
            <a-menu-item key="8">option8</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <template #title>
              <span>
                <notification-outlined />
                subnav 3
              </span>
            </template>
            <a-menu-item key="9">option9</a-menu-item>
            <a-menu-item key="10">option10</a-menu-item>
            <a-menu-item key="11">option11</a-menu-item>
            <a-menu-item key="12">option12</a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
    <a-layout-footer class="page-footer">
      <div>Tag1</div>
      <div>Tag2</div>
      <div>Tag3</div>
      <div>Tag4</div>
    </a-layout-footer>
  </a-layout>
</template>

<script>
  import { checkLogin } from '@/utils/utils'
  import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons-vue';
  import { defineComponent, ref, onBeforeMount } from 'vue';

  export default defineComponent({
    components: {
      UserOutlined,
      LaptopOutlined,
      NotificationOutlined,
    },
    setup() {
      const pageHeight = ref(document.body.scrollHeight)
      onBeforeMount(()=>{
        checkLogin()
      })
      return {
        pageHeight: pageHeight,
        selectedKeys1: ref(['1']),
        selectedKeys2: ref(['2']),
        collapsed: ref(false),
        openKeys: ref(['sub1']),
      };
    }
  })
</script>

<style scoped>
  .page-content {
    flex-grow: 1;
  }
  .page-footer {
    min-height: 50px;
    padding: 0 50px !important;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .page-footer > div {
    font-size: 12px;
    font-weight: normal;
    color: rgba(0, 0, 0, 0.45);
    cursor: pointer;
  }
  .page-footer > div:hover {
    color: #000;
    text-decoration: underline;
  }
  .page-footer > :not(:last-child)::after {
    content: '|';
    padding: 0 10px;
    font-size: 12px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.45);
  }
</style>
