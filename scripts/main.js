require("物品");
require("bullet");
require("科技树");
require("方块/生产/沙化机");
require("方块/物流/石墨一家亲");
require("方块/矿物");
require("单位/MissileUnit");
require("node");
require("方块/辅助/fblock");
require("方块/核心/恢复核心");
require("音乐盒/mblock");
require("方块/城墙");
require("莱蒙星/莱蒙");
require("multi-crafter/lib");

//以下注释为VSHES荔枝独立完成为了让其他蔚蓝开发者同样可以更新开屏显示窗口插件
Events.on(EventType.ClientLoadEvent, cons(e => {
	var dialog = new BaseDialog("AzurePlant");//新建一个显示窗口
       var dialogo = new BaseDialog("蔚蓝");//新建一个显示窗口
	dialogo.buttons.button("@close", run(() => {
		dialogo.hide()//退出此界面
	})).size(210, 64);//按钮用原版@close贴图

       dialogo.buttons.button("物品更新作者介绍", run(() => {
		dialogo.hide()
		dialog.show()//退出此界面
	})).size(210, 64);//按钮用原版@close贴图

	dialog.cont.pane(table => {//滑动显示
		table.add(Core.bundle.get("mod.ap.displayName")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();//获取翻译文件并增加显示窗口

		table.image(Core.atlas.find("ap-logo")).left().size(620, 200).pad(3).row();//显示logo图片

		table.add(Core.bundle.get("block.ap-铬.name") + "\n" + Core.bundle.get("item.ap-铬.description")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();//获取物品翻译文件并添加窗口

		table.image(Core.atlas.find("ap-铬")).size(64).pad(3).row();//增加图片

		table.add(Core.bundle.get("block.ap-钴.name") + "\n" + Core.bundle.get("item.ap-钴.description")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();//获取物品翻译文件并添加窗口

		table.image(Core.atlas.find("ap-钴")).size(64).pad(3).row();//增加图片
		
				table.add(Core.bundle.get("block.ap-铀.name") + "\n" + Core.bundle.get("item.ap-铀.description")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();//获取物品翻译文件并添加窗口

		table.image(Core.atlas.find("ap-铀")).size(64).pad(3).row();//增加图片
		
		table.add(Core.bundle.get("mod.ap.update")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left).row();//新增窗口读取翻译文件并显示更新日志

		table.add(Core.bundle.get("mod.ap.mapMaker")).left().growX().wrap().width(620).maxWidth(620).pad(4).labelAlign(Align.left)//读取翻译文件
	}).grow().center().maxWidth(620)
	
	dialog.cont.button("@close",run(() => {
               dialog.hide()
               dialogo.show()
             })).size(70,70);
	
	 dialogo.cont.button("加入蔚蓝qq群",run(() => {
               Core.app.openURI("https://jq.qq.com/?_wv=1027&k=sEIHp3QY");
             })).size(100,70).pad(2);//添加qq群功能为荔枝VSHES添加
             dialogo.show();
}))