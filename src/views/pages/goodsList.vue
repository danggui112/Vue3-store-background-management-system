<template>
    <div>
        ---商品列表---
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    name: "goods",
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

<style lang="scss" scoped>

</style>