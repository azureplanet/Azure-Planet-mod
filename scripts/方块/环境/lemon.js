const 柠檬 = new Item("柠檬",Color.valueOf("ffff00"))

const lemon = new Wall("lemon");
Object.assign(lemon,{
    requirements: ItemStack.with(
        柠檬, 2
    ),
    update: true,
    solid: false,
})

let i = 0 , create = true;

const tree = new TreeBlock("tree");
Object.assign(tree,{
    update: true,
    solid: true,
    health: 200,
    buildVisibility: BuildVisibility.shown,
	category: Category.effect,
	requirements: ItemStack.with(
        柠檬, 50
    ),
})
tree.buildType = prov(() => extend(Building,{
	updateTile(){
	    i += Time.delta
	    
	    if(i >= 60 * 60){
	        create = true
	        this.tile.circle(5, cons(tile => {
	            if(Mathf.chance(0.0625) && tile.block() == Blocks.air && create){
	                tile.setBlock(lemon,this.team);
	                create = false
	            }
	        }))
	        
	        i = 0
	    }
	this.heal(20 / 60);
	if(this.health < this.maxHealth && Mathf.chance(0.02)) Fx.heal.at(this);
	}
}))