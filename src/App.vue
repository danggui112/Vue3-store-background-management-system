<template>
  <!-- <nav>
   -- 相当于a标签 to="路由path"--
    <router-link to="/">Home</router-link> |
  </nav> -->


  <!-- 展示路由对应的组件内容 -->
  <router-view />
</template>

<style>
/* flex布局类名 */
body,
html {
  padding: 0;
  margin: 0;

}

.flex-float {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex {
  display: flex;
  align-items: center;
}
</style>
