Page({
    data: { 
      activeIndex: 2, 
    },

    onLoad(){
      const currentPage = getCurrentPages().pop().route;
      const tabbarList = [
        "/pages/home/home",
        "/pages/explore/explore",
        "/pages/user/user"
      ];
      this.setData({
        activeIndex: tabbarList.indexOf(`/${currentPage}`)
      });
    },

    handleTabChange(e){
      this.setData({ activeIndex: e.detail.index });
    }
  });
  