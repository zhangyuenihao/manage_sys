<template>
    <div id="app" :style="'height:'+fullHeight+'px;'">
        <router-view :key="key"/>
    </div>
</template>
<script>

    export default {
        name: 'app',
        data() {
            return {
                fullHeight: document.documentElement.clientHeight
            }
        },
        watch: {
            fullHeight(val) {
                if (!this.timer) {
                    this.fullHeight = val
                    this.timer = true
                    let that = this
                    setTimeout(function () {
                        that.timer = false
                    }, 400)
                }
            }
        },
        components: {},
        computed: {
            key() {
                return this.$route.path + Math.random()
            }
        },
        methods: {
            get_bodyHeight() {//动态获取浏览器的高度
                window.onresize = () => {
                    return (() => {
                        window.fullHeight = document.documentElement.clientHeight
                        this.fullHeight = window.fullHeight
                    })()
                }
            }
        }

    }
</script>
<style lang="scss">
    @import "assets/css/common.css";

    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
