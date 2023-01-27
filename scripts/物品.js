/*本模组所有的物品都在这里，可以直接作为模板QAQ
详细注释看下面a*/
function newItem(name, color, obj) {
	Object.assign(exports[name] = new Item(name,
		Color.valueOf(color)), obj);
}
newItem("金刚石", "2DC45AFF", {
	cost: 1.5,
})

newItem("钴", "6977BFFF", {
	hardness: 1,
	cost: 0.7,
})

newItem("铀", "2DC45AFF", {
	hardness: 3,
	radioactivity: 2,
	explosiveness: 0.7,
	cost: 1,
})

newItem("铬", "ABABABFF", {
	hardness: 5,
	cost: 1.2,
})

newItem("钴钢", "3D75F7FF", {
	explosiveness: 0.3,
	cost: 1.0,
})

newItem("氮化硅", "3D75F7FF", {
	cost: 1,
})

newItem("生物质", "3D75F7FF", {
	cost: 0.5,
})

//注释在这里a
newItem("矢量合金", "DF824DFF", { //物品详细信息
	hardness: 0, //硬度，只有矿物有，与挖掘速度、挖掘等级有关
	radioactivity: 0, //放射性
	explosiveness: 1, //爆炸性
	flammability: 0, //燃烧性
	charge: 1.5, //放电性
	cost: 1.5, //建筑时间消耗倍率
})
