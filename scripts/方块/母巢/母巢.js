let i = 0, j = 0, k = 0, unit = {};

const 锹甲 = new UnitType("锹甲");//legs
锹甲.constructor = () => new LegsUnit.create();
const 隐翅 = new UnitType("隐翅");//legs
隐翅.constructor = () => new LegsUnit.create();
const 瘟蚊 = new UnitType("瘟蚊");//fly
瘟蚊.constructor = () => new UnitEntity.create();

const 毒蜂 = new UnitType("毒蜂");
毒蜂.constructor = () => new UnitEntity.create();
const 虎甲 = new UnitType("虎甲");
虎甲.constructor = () => new LegsUnit.create();

const units = [锹甲,隐翅,瘟蚊,毒蜂,虎甲];

const 初代母巢 = new Block("初代母巢");
Object.assign(初代母巢,{
	update: true,
	solid: false,
	size: 3,
	health: 1200,
	buildVisibility: BuildVisibility.sandboxOnly,
	category: Category.effect,
})
初代母巢.buildType = prov(() => extend(Building,{
	updateTile(){
		i += Time.delta
		j += Time.delta
		
		if(i >= 60 * 10){
			this.tile.circle(5, cons(tile => {
				if(Mathf.chance(1 / 16) && tile.block() == Blocks.air){
					k = Math.floor(Math.random() * 3);
					
					unit = units[k];
					
					let u = unit.create(this.team);
					u.set(tile.worldx(), tile.worldy());
					u.rotation = 90;
					u.add();
				}
			}))
			
			i = 0
		}
		
		if(j >= 60 * 25 - 1){
			this.tile.circle(5, cons(tile => {
				if(Mathf.chance(1 / 25) && tile.block() == Blocks.air){
					k = Math.floor(Math.random() * 2) + 3
					
					unit = units[k];
					
					let u = unit.create(this.team);
					u.set(tile.worldx(), tile.worldy());
					u.rotation = 90;
					u.add();
				}
			}))
			
			j = 0
		}
		this.heal(0.5);
		if(this.health < this.maxHealth && Mathf.chance(0.1))  Fx.neoplasmHeal.at(
			this.x + Mathf.range(11),
			this.y + Mathf.range(11),
		);
	}
}))