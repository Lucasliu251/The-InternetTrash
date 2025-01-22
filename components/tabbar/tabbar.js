Component({
    properties: {
      activeIndex: {
        type: Number,
        value: 0
      }
    },
    data: {
      tabbarList: [
        { text: "首页", iconPath: "/images/home.png", selectedIconPath: "/images/home_active.png", pagePath: "/pages/home/home" },
        { text: "探索", iconPath: "/images/explore.png", selectedIconPath: "/images/explore_active.png", pagePath: "/pages/explore/explore" },
        { text: "我的", iconPath: "/images/user.png", selectedIconPath: "/images/user_active.png", pagePath: "/pages/user/user" }
      ]
    },
    methods: {
      onTabChange(e) {
        const index = e.detail;
        const { pagePath } = this.data.tabbarList[index];
        wx.redirectTo({ url: pagePath }); // 跳转页面
        this.triggerEvent("changeTab", { index }); // 通知页面更新
      }
    }
  });
  