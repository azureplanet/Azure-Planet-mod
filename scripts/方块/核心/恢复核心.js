//作者VSHES/荔枝 qq2595168568 未经允许禁止私自使用别删此行如果在其他mod见到此文件切未经过授权后果自负
const HealCore = new Effect(100, e =>{
     Draw.color(Color.valueOf('8BE8AAFF'));
     Fill.square(e.x,e.y,e.fslope() * 1.5 + 0.14, 45);
});

const 恢复核心 = new CoreBlock('core-恢复核心');
恢复核心.size = 3;
恢复核心.health = 1500;
恢复核心.configurable = true;
恢复核心.buildVisibility = BuildVisibility.shown;
恢复核心.category = Category.effect;
恢复核心.solid = true;
恢复核心.update = true;
恢复核心.unitType = UnitTypes.evoke;
恢复核心.itemCapacity = 3000;
恢复核心.unitCapModifier = 10;
恢复核心.destructible = true;
恢复核心.requirements = ItemStack.with(
    Items.graphite, 1500,
    Items.silicon, 1200,
);
恢复核心.buildType = prov(() =>
    extend(CoreBlock.CoreBuild, 恢复核心,{
      i : 0,
        update() {
            this.super$update();
            this.i += Time.delta;
            if(this.health < 1500){
                    this.health += 1500/18000;
                    if(this.i == 0.5){
                    HealCore.at(this.x + Mathf.range(3 * Vars.tilesize / 2 - 1), this.y + Mathf.range(3 * Vars.tilesize / 2 - 1));
                      }
                    if(this.i >= 8.5){
                    HealCore.at(this.x + Mathf.range(3 * Vars.tilesize / 2 - 1), this.y + Mathf.range(3 * Vars.tilesize / 2 - 1));
                    this.i = 0;
                      }
                    }
               else{
                           this.health = 1500;
               }
        },
}));
exports.恢复核心 = 恢复核心;