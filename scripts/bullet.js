let i = 0;

const bullet = extend(PointLaserBulletType,{
	hitEntity(b, entity, health){
		this.super$hitEntity(b, entity, health);
		if(entity instanceof Unit){
			var unit = entity;
			if(unit.team != b.team){
				i += 5;
				this.damage = 32 + i / 10
				if(i >= 3 * 60){
					unit.health -= b.damage * 19
					Fx.scatheExplosion.at(unit);
				
					i = 0;
				}
			}
		}
	},
	hitTile(b,build,x,y,initialHealth,direct){
		this.super$hitTile(b,build,x,y,initialHealth,direct);
		if(build.team != b.team){
			i += 5;
			this.damage = 32 + i / 10
			if(i >= 3 * 60){
				build.health -= b.damage * 19
				Fx.scatheExplosion.at(build);
			
				i = 0;
			}
		}
	},
	damage: 32,
	pierceArmor: true,
})

const t = new ContinuousTurret("滋崩");
t.shootType = bullet