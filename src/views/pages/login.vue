<template>
    <div class="login_wrap">
        <div class="form_wrap">
            <el-form ref="formRef" :model="loginData" label-width="120px" class="demo-dynamic">
                <el-form-item prop="username" label="用户名" :rules="[
                    {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                    },
                
                ]">
                    <el-input v-model="loginData.username" />
                </el-form-item>
                <el-form-item prop="password" label="密码" :rules="[
                    {
                        required: true,
                        message: '此项为必填项',
                        trigger: 'blur',
                    },
                
                ]">
                    <el-input type="password" v-model="loginData.password" />
                </el-form-item>
            </el-form>
            <el-button type="primary" class="login_btn" @click="handleLogin">登录</el-button>
            <p>{{ num }}</p>
        </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { Store, useStore } from 'vuex'
export default {
    name: "login",
    setup() {
        const store = useStore()
        const count = store.state.number.count
        const data = reactive({
            loginData: {
                username: "",
                password: "",
            },
            num: count,
            
            
        })
        console.log('修改前getters',store.getters["number/countStatus"]);
        const handleLogin = () => {
            store.dispatch('number/setCountPromise', -100)
                .then((res) => {
                    alert('修改成功')
                }).catch(err => {
                    alert(err)
                })
            console.log(store.state.number.count);
            console.log('修改后getters',store.getters["number/countStatus"]);
        }
        return {
            ...toRefs(data),
            handleLogin

        }
    }
}
</script>

<style  scoped>
.login_wrap {
    width: 100%;
    height: 100vh;
    background: rgb(56, 86, 139);
    position: relative;
}

.form_wrap {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 30px 50px;
    border-radius: 6px;
}

.login_btn {
    /* 块级元素居中 */
    display: block;
    margin: 0 auto;
}
</style>