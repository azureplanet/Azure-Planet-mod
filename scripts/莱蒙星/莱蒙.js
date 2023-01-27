const lib = require("base/aplib");

const 莱蒙 = new Planet("莱蒙", Planets.sun, 1, 3);
Object.assign(莱蒙, {
	generator: extend(SerpuloPlanetGenerator,  {
		getDefaultLoadout() {
			return Schematics.readBase64("bXNjaAF4nGNgZmBmZmDJS8xNZWBOLM5g4E5JLU4uyiwoyczPY2BgYMtJTErNKWZgio5lZOBIKk0v1gWpYmBgBCEgAQDukg32");
		},
		allowLanding(sector){return false},
		getColor(position) {
			var depth = Simplex.noise3d(4, 4, 0.56, 1.7, position.x, position.y, position.z) / 2;
			return Color.valueOf("FFFFFF").write(Color.valueOf("FFFFFF")).lerp(Color.valueOf("FFFFFF"),Mathf.clamp(Mathf.round(depth, 0.25)));
		}
	}),
	meshLoader: prov(() => new HexMesh(莱蒙, 4)),
	cloudMeshLoader: () => new MultiMesh(
		new HexSkyMesh(莱蒙, 2, 0.15, 0.14, 5, Color.valueOf("FFFFFF"), 2, 0.42, 1, 0.45)
	),
	atmosphereColor: Color.valueOf("FFFFFF"),
	landCloudColor: Color.valueOf("FFFFFF"),
	atmosphereRadIn: 0.02,
	atmosphereRadOut: 0.3,
	visible: true,
	bloom: false,
	accessible: true,
	alwaysUnlocked: true,
	startSector: 1,
	camRadius: 0.5,
	orbitRadius: 75,
	orbitSpacing: 2,
	orbitTime: 240 * 60,
	rotateTime: 15 * 60,
//	defaultCore: core.coreShard,
	iconColor: Color.valueOf("00BDFF"),
})
莱蒙.ruleSetter = r => {
	r.attributes.set(Attribute.heat, -0.3);
	r.attributes.set(Attribute.light, -0.3);
}
莱蒙.totalRadius += 2.6;
莱蒙.hiddenItems.addAll(
	Items.scrap,
	Items.copper,
	Items.lead,
	Items.titanium,
	Items.thorium,
	Items.silicon,
	Items.plastanium,
	Items.phaseFabric,
	Items.surgeAlloy,
	Items.sporePod,
	Items.sand,
	Items.blastCompound,
	Items.pyratite,
	Items.metaglass,
	Items.beryllium,
	Items.tungsten,
	Items.oxide,
	Items.carbide,
	Items.fissileMatter,
	Items.dormantCyst
);
exports.莱蒙 = 莱蒙;

/*Planets.serpulo.hiddenItems.addAll(
	item.organosand,
	item.biomass,
	item.ossature,
	item.nickel,
	item.manganese,
	item.crystal,
	item.biomassSteel,
	item.organosilicon,
	item.neoplasmSteel,
	item.methylSulfone
);
Planets.erekir.hiddenItems.addAll(
	item.organosand,
	item.biomass,
	item.ossature,
	item.nickel,
	item.manganese,
	item.crystal,
	item.biomassSteel,
	item.organosilicon,
	item.neoplasmSteel,
	item.methylSulfone
);
*/
