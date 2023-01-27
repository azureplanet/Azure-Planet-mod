//作者VSHES/荔枝 qq2595168568 未经允许禁止私自使用

//使用时在你文件根目录中创建"sounds"文件夹,导入文件格式应为xxx.ogg(在mblock的31和37行处更改)
const mblock = new Block('音乐盒-注意事项看介绍');
mblock.size = 1;
mblock.health = 100;
mblock.description="(使用时应当遵守使用教程)\n 1如果在使用中出现音频重复叠加请按下暂停并重新按一次开始按钮\n 2切歌时应当先暂停此时播放的音乐再进行切歌\n [red]3播放时不能切歌使用教程1只针对于bug时";
//要先把configurable设置为true，才能触发buildConfiguration
mblock.configurable = true;
mblock.buildVisibility = BuildVisibility.shown;
mblock.category = Category.power;
mblock.solid = true;
mblock.destructible = true;
mblock.requirements = ItemStack.with(
  Items.copper, 1
);
mblock.buildType = prov(() => extend(Building, {
	mumber: 1,
	play: false,
	updateTile() {
		Vars.ui.showLabel("[yellow]" + this.mumber, 0.01, this.x, this.y);
	},
	buildConfiguration(table) {
		table.button(Icon.pencil, Styles.cleari, run(() => {
			if (this.mumber <= 2) this.mumber += 1;
			if (this.mumber > 2) this.mumber = 1;
		})).size(45).update(b => {
			b.setDisabled(this.play);
		});
		table.button(Icon.play, Styles.cleari, run(() => {
			Vars.tree.loadSound("sound" + this.mumber).play();
			this.play = true;
		})).size(45).update(b => {
			b.setDisabled(this.play);
		});
		table.button(Icon.pause, Styles.cleari, run(() => {
			Vars.tree.loadSound("sound" + this.mumber).stop();
			this.play = false;
		})).size(45).update(b => {
			b.setDisabled(!this.play);
		});
	}
}));
exports.mblock = mblock;