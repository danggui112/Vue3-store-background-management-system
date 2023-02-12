<template>

    <div class="common-layout">
        <el-container>
            <el-header class="common-header flex-float">

                <div class="flex">
                    <img class="logo" src="../../assets/logo.png" alt="">
                    <h1 class="title">商铺后台管理系统</h1>
                </div>
                <el-button type="danger">退出</el-button>

            </el-header>
            <el-container>
                <el-aside class="common-aside" width="200px">
                    <el-menu background-color="none" text-color="#fff" :router="true">
                        <el-sub-menu index="1">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>账号管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/user">账号列表</el-menu-item>
                            </el-menu-item-group>

                        </el-sub-menu>
                        <el-sub-menu index="2">
                            <template #title>
                                <el-icon>
                                    <location />
                                </el-icon>
                                <span>角色管理</span>
                            </template>
                            <el-menu-item-group>
                                <el-menu-item index="/roles">角色列表</el-menu-item>
                            </el-menu-item-group>


                        </el-sub-menu>

                    </el-menu>
                </el-aside>
                <el-main>



                    <router-view></router-view>

                </el-main>
            </el-container>
        </el-container>
    </div>



</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: 'layout',
    setup() {
        const state = reactive({
            count: 0,
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style scoped>
.el-container {
    height: 100vh;
    overflow: hidden;
}

.common-header {
    background: rgb(55, 62, 83);
    display: flex;
}

.common-aside {
    background: rgb(56, 62, 84);


}

.logo {
    width: 60px;
    object-fit: cover
}

.title {
    color: white;
    font-size: 30px;
}
</style>