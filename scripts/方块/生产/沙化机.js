Attribute.add("invertedSand");

const 沙化机 = new AttributeCrafter("沙化机");
exports.沙化机 = 沙化机;
沙化机.consumePower(90/60);
Object.assign(沙化机, {
	size: 2,
	hasPower: true,
	hasLiquids: true,
	hasItems: true,
	craftTime: 60,
	itemCapacity: 20,
	updateEffect: Fx.smeltsmoke,
	attribute: Attribute.get("invertedSand"),
	baseEfficiency: 0,
	outputLiquid: new LiquidStack(Liquids.water, 1 / 60),
	outputItem: new ItemStack(Items.sand, 1),
	buildVisibility: BuildVisibility.shown,
	category: Category.crafting,
	requirements: ItemStack.with(
		Items.graphite, 25,
		Items.copper, 45,
	),
})

function Sand(floor, amount){
	return floor.attributes.set(Attribute.get("invertedSand"), amount / 4);
}

Sand(Blocks.mud,2);
Sand(Blocks.grass,2);
Sand(Blocks.iceSnow,0.8);
Sand(Blocks.ice,0);
Sand(Blocks.salt,1.5);
Sand(Blocks.stone,0.2);
Sand(Blocks.metalFloor,1);
Sand(Blocks.metalFloor2,1);
Sand(Blocks.metalFloor3,1);
Sand(Blocks.metalFloor4,1);
Sand(Blocks.metalFloor5,1);
Sand(Blocks.metalFloorDamaged,1);
Sand(Blocks.shale,0.2);

//地形影响：
//沙子类/冰：0%效率（有沙子谁用这玩意啊）
//岩石类：20%效率
//冰雪地：80%效率
//金属地板类：100%效率
//盐碱地/雪地：150%效率
//草地/泥土类：200%效率