// 自定义配置，参考 ./default/setting.config.js，需要自定义的属性在这里配置即可
module.exports = {
    lang: 'CN',
    theme: {
        color: '#409eff', //主题色
        mode: 'light', //主题模式 可选 dark、 light 和 night
        success: '#52c41a', //成功色
        warning: '#faad14', //警告色
        error: '#f5222f', //错误色
    },
    layout: 'mix', //导航布局设置，可选 side:侧边导航,head:顶部导航,mix:顶部一级导航，侧边一级级以下菜单导航
    fixedHeader: true, //固定头部状态栏，true:固定，false:不固定
    fixedSideBar: true, //固定侧边栏，true:固定，false:不固定
    fixedTabs: true, //固定页签头，true:固定，false:不固定
    pageWidth: 'fixed', //内容区域宽度，fixed:固定宽度，fluid:流式宽度
    weekMode: false, //色弱模式，true:开启，false:不开启
    multiPage: true, //多页签模式，true:开启，false:不开启
    cachePage: true, //是否缓存页面数据，仅多页签模式下生效，true 缓存, false 不缓存
    hideSetting: false, //隐藏设置，true:隐藏，false:不隐藏
    systemName: 'XXX管理平台', //系统名称
    asyncRoutes: false, //异步加载路由，true:开启，false:不开启
    showPageTitle: true, //是否显示页面标题（PageLayout 布局中的页面标题），true:显示，false:不显示
    filterMenu: true, //根据权限过滤菜单，true:过滤，false:不过滤
    animate: { //动画设置
        disabled: true, //禁用动画，true:禁用，false:启用
        name: 'bounce', //动画效果，支持的动画效果可参考 ./animate.config.js
        direction: 'left' //动画方向，切换页面时动画的方向，参考 ./animate.config.js
    }
}
