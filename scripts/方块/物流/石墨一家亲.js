const item = require('物品');

const 石墨传送带 = new Conveyor("石墨传送带");
exports.石墨传送带 = 石墨传送带;
Object.assign(石墨传送带, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 1
	),
	health: 50,
	speed: 0.04,
	displayedSpeed: 5.6,
});

const 隔离阀 = new Junction("隔离阀");
exports.隔离阀 = 隔离阀;
Object.assign(隔离阀, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 5
	),
	health: 50,
	speed: 3,
})

const 分配阀 = new DuctRouter("分配阀");
exports.分配阀 = 分配阀;
Object.assign(分配阀, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 5
	),
	health: 50,
	speed: 3,
	regionRotated1: 1,
	solid: false,
})

const 传送桥 = new ItemBridge("传送桥");
exports.传送桥 = 传送桥;
Object.assign(传送桥, {
	requirements: ItemStack.with(
		Items.graphite, 10,
		item.钴, 5
	),
	fadeIn: false,
	moveArrows: false,
	range: 5,
	arrowSpacing: 6,
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
})

const 溢流阀 = new OverflowGate("溢流阀");
exports.溢流阀 = 溢流阀;
Object.assign(溢流阀, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 5,
		item.钴, 5
	),
})

const 反向溢流阀 = new OverflowGate("反向溢流阀");
exports.反向溢流阀 = 反向溢流阀;
Object.assign(反向溢流阀, {
	buildVisibility: BuildVisibility.shown,
	category: Category.distribution,
	requirements: ItemStack.with(
		Items.graphite, 5,
		item.钴, 5
	),
	invert: true
})