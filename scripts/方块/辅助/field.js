let i = 0;

let reload = 3 * 60, range = 15 * 8;

const field = extend(ForceProjector,"field",{
	updateTile(){
		this.super$updateTile();
		i += Time.delta
		if(i >= reload){
			indexer.eachBlock(this, range, other => other.block.canOverdrive, other => other.applyBoost(1.5, reload + 1));
			indexer.eachBlock(this, range, b => b.damaged(), other => {
				other.heal(50)
				Fx.healBlockFull.at(other);
			})
			
			i = 0
		}
	},
	
})