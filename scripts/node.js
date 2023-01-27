const 反 = new PowerNode("反射塔");//()里填名字
Object.assign(反, {
	size: 1,
	maxNodes: 2,
	laserRange: 16,
	update: true,//强制开更新
	category: Category.power,//这行别动
	buildVisibility: BuildVisibility.shown,//这行别动
	requirements: ItemStack.with(
		Items.silicon, 5,//材料,量
	)
})
反.consumePower(1 / 60)//耗电量

const 高 = new PowerNode("高能塔");//()里填名字
Object.assign(高, {
	size: 2,
	maxNodes: 2,
	laserRange: 114,
	update: true,//强制开更新
	category: Category.power,//这行别动
	buildVisibility: BuildVisibility.shown,//这行别动
	requirements: ItemStack.with(
		Items.copper, 1,//材料,量
	)
})
高.consumePower(60 / 60)//耗电量

const 折 = PowerNode("折射塔");//()里填名字
Object.assign(折, {
	size: 2,
	maxNodes: 15,
	laserRange: 16,
	update: true,//强制开更新
	category: Category.power,//这行别动
	buildVisibility: BuildVisibility.shown,//这行别动
	requirements: ItemStack.with(
		Items.copper, 1,//材料,量
	)
})
折.consumePower(30 / 60)//耗电量