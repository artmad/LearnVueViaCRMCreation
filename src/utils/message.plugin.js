export default {
    install(Vue) {
        Vue.prototype.$message = function (html) {
            window.M.toast({ html });
        }

        Vue.prototype.$error = function (errMessage) {
            window.M.toast({ html: `[Ошибка] - ${errMessage}` });
        }
    }
}