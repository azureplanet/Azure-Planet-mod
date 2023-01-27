const fblock = new ForceProjector("fblock");
const lib = require("base/aplib");
const realRange = 80, speedBoost = 2, speedBoostPhase = 8, reload = 0;
fblock.buildType = prov(() => {
	return extend(ForceProjector.ForceBuild, fblock, {
		updateTile() {
			this.super$updateTile();
			if (this.efficiency == 0 || !this.enabled) return;
			Vars.indexer.eachBlock(this, this.healRange(), b => b.damaged() && !b.isHealSuppressed(), other => {
				other.heal(other.maxHealth * this.realHeat() / 100);
				other.recentlyHealed();
				Fx.healBlockFull.at(other.x, other.y, other.block.size, Color.valueOf("84F491"), other.block);
				other.applyBoost(this.realBoost(), reload + 1)
			});
			Vars.indexer.eachBlock(this, realRange, other => other.block.canOverdrive, other => other.applyBoost(this.realBoost(), reload + 1));
		},
		phase() {
			return this.items.get(Items.phaseFabric) > 0 ? 1 : 0;
		},
		healRange() {
			return this.phase() > 0 ? 170 : 120;
		},
		boostRange() {
			return this.phase() > 0 ? 200 : 120;
		},
		realHeat() {
			return (speedBoost + this.phase() * speedBoostPhase) * this.efficiency;
		},
		realBoost() {
			return (2 + this.phase() * speedBoostPhase) * this.efficiency;
		},
		drawSelect() {
			Drawf.dashCircle(this.x, this.y, this.healRange(), Color.valueOf("84F491"));
			Drawf.dashCircle(this.x, this.y, this.boostRange(), Color.valueOf("FEB380"));
		}
	})
})

Object.assign(fblock, {
	health: 360,
	size: 3,
	itemCapacity: 10,
	canOverdrive: false,
	radius: 120,
	shieldHealth: 1000,
	phaseUseTime: 120,
	phaseRadiusBoost: 120,
	phaseShieldBoost: 550,
	cooldownNormal: 2,
	cooldownLiquid: 1.2,
	cooldownBrokenBase: 6.25,
	buildVisibility: BuildVisibility.shown,
	category: Category.power
});
fblock.itemConsumer = fblock.consumeItems(ItemStack.with(Items.phaseFabric, 1)).boost();