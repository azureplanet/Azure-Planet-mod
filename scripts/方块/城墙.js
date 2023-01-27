const item = require("物品")
const 辐射 = new StatusEffect("辐射")

const 铀墙 = new Wall("铀墙")
Object.assign(铀墙, {
    health: 800,
	size: 1,
	category: Category.defense,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.铀, 6,
	),
	});

铀墙.buildType = prov(() => extend(Building,{
              draw(){
              this.super$draw();
        Units.nearby(null,this.x,this.y,64,other => {
               if(other.team != this.team)
               {
                  other.apply(辐射,10);
               }
         })
        Draw.color(Color.valueOf('008000'));
        Draw.alpha(0.8);
        Draw.z(Layer.shields);
        Fill.poly(this.x, this.y, 12, 64);
  },
}));
exports.铀墙 = 铀墙;

const 大型铀墙 = new Wall("大型铀墙")
Object.assign(大型铀墙, {
    health: 3200,
	size: 2,
	category: Category.defense,
	buildVisibility: BuildVisibility.shown,
	requirements: ItemStack.with(
		item.铀, 24,
	),
	});
大型铀墙.buildType = prov(() => extend(Building,{
              draw(){
              this.super$draw();
        Units.nearby(null,this.x,this.y,128,other => {
               if(other.team != this.team)
               {
                  other.apply(辐射,200);
               }
         })
        Draw.color(Color.valueOf('008000'));
        Draw.alpha(0.8);
        Draw.z(Layer.shields);
        Fill.poly(this.x, this.y, 12, 128);
  },
}));
exports.大型铀墙 = 大型铀墙;

//金刚石墙
const 金刚石墙 = new Wall("金刚石墙");
exports.金刚石墙 = 金刚石墙;
Object.assign(金刚石墙, {
	health: 1000,
	size: 1,
	alwaysUnlocked: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.金刚石, 12,
	),
})

const 大型金刚石墙 = new Wall("大型金刚石墙");
exports.大型金刚石墙 = 大型金刚石墙;
Object.assign(大型金刚石墙, {
	health: 4000,
	size: 2,
	alwaysUnlocked: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.金刚石, 48,
	),
})

//钴墙
const 钴墙 = new Wall("钴墙");
exports.钴墙 = 钴墙;
Object.assign(钴墙, {
	health: 320,
	size: 1,
	alwaysUnlocked: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.钴, 6,
	),
})

const 大型钴墙 = new Wall("大型钴墙");
exports.大型钴墙 = 大型钴墙;
Object.assign(大型钴墙, {
	health: 1280,
	armor: 1,
	size: 2,
	alwaysUnlocked: false,
	buildVisibility: BuildVisibility.shown,
	category: Category.defense,
	requirements: ItemStack.with(
		item.钴, 24,
	),
})