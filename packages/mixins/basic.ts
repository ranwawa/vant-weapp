export const basic = Behavior({
  methods: {
    $emit(...args) {
      this.triggerEvent(...args);
    },

    getRect(selector: string, all: boolean) {
      return new Promise(resolve => {
        // todo 加in时能否找到page和自身component以及其他components里面的内容
        // 去掉in之后呢?
        wx.createSelectorQuery()
          .in(this)[all ? 'selectAll' : 'select'](selector)
          .boundingClientRect(rect => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }

            if (!all && rect) {
              resolve(rect);
            }
          })
          .exec();
      });
    }
  }
});
