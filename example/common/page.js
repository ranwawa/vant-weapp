export default function(options = {}) {
  return Page({
    onShareAppMessage() {
      return {
        title: 'Vant Weapp 组件库演示'
      };
    },
    test1(e) {
      console.log(222)
    },
    ...options
  });
}
