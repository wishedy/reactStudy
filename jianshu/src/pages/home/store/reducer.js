import {fromJS} from 'immutable';
const defaultState = fromJS({
    topicList:[{
        id:1,
        title:"社会热点",
        imageUrl:"http://b-ssl.duitang.com/uploads/blog/201404/13/20140413085901_GsSdw.jpeg"
    },{
        id:111,
        title:"绘画",
        imageUrl:"http://img4.imgtn.bdimg.com/it/u=3715405552,2612840062&fm=26&gp=0.jpg"
    }],
    articleList:[
        {
            id:13211,
            author:"阮一峰",
            title:"前后端分离开发个人网站—夜幕（持续更新中）",
            imageUrl:"https://upload-images.jianshu.io/upload_images/15449003-b9456f632f66952b?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content:"宋人有闵其苗之不长而揠之者，芒芒然归，谓其人曰：“今日病矣！予助苗长矣！”其子趋而往视之，苗则槁矣。天下之不助苗长者寡矣。以为无益而舍之者，不耘苗者也；助之长者，揠苗者也，非徒无益，而又害之"
        },
        {
            id:12,
            author:"张小龙",
            title:"vue还是react？小孩子才做选择题！",
            imageUrl:"https://upload-images.jianshu.io/upload_images/2484592-b97ebc2903be4e27.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content:"晏子使楚。楚人以晏子短，楚人为小门于大门之侧而延晏子。晏子不入，曰：“使狗国者从狗门入，今臣使楚，不当从此门入。”傧者更道，从大门入。见楚王。王曰：“齐无人耶？”晏子对曰：“齐之临淄三百闾，张袂成阴，挥汗成雨，比肩继踵而在，何为无人？"
        },
        {
            id:1211,
            title:"无性婚姻你接受的了么？",
            author:"吉克隽逸",
            imageUrl:"https://upload-images.jianshu.io/upload_images/19205567-2fd428a96a793156.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            content:"叶公子高好龙，钩以写龙，凿以写龙，屋室雕文以写龙。于是天龙闻而下之，窥头于牖，施尾于堂。 叶公见之，弃而还走，失其魂魄，五色无主。是叶公非好龙也，好夫似龙而非龙者也"
        }
    ],
    recommendList:[
        {
            id:1,
            imageUrl:'http://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
        },
        {
            id:12,
            imageUrl:'http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
        },
        {
            id:123,
            imageUrl:'http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
        },
        {
            id:1234,
            imageUrl:'http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
        }
    ]
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        default:
            break;
    }
    return state;
}