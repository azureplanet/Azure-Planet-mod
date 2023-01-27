const nodeProduce = TechTree.nodeProduce;
const nodeRoot = TechTree.nodeRoot;
const node = TechTree.node;

const item = require('物品');
const planet = require("莱蒙星/莱蒙");
const 传送带 = require('方块/物流/石墨一家亲');
const 墙 = require('方块/城墙');
const {恢复核心} = require('方块/核心/恢复核心');

planet.莱蒙.techTree = nodeRoot("Limen", 恢复核心, () => {
    node(传送带.石墨传送带, () => {
        node(传送带.隔离阀, () => {
            node(传送带.传送桥, () => {});
            node(传送带.分配阀, () => {});
            node(传送带.溢流阀, () => {
                node(传送带.反向溢流阀, () => {});
            });
        });
    });
    node(墙.钴墙, () => {
        node(墙.大型钴墙, () => {});
        node(墙.金刚石墙, () => {
            node(墙.大型金刚石墙, () => {});
            node(墙.铀墙, () => {
                node(墙.大型铀墙, () => {});
            });
        });
    });
    nodeProduce(Items.graphite, () => {
		nodeProduce(item.钴, () => {
		    nodeProduce(Items.silicon, () => {
    	        nodeProduce(item.氮化硅, () => {
        	        nodeProduce(Items.surgeAlloy, () => {
    	                nodeProduce(item.矢量合金, () => {});
        	        });
    	        });
    	    });
			nodeProduce(item.金刚石, () => {
			    nodeProduce(item.铬, () => {
			        nodeProduce(item.钴钢, () => {});
			    });
			});
			nodeProduce(item.生物质, () => {});
		});
	    nodeProduce(item.铀, () => {
	        nodeProduce(Items.phaseFabric, () => {});
	    });
	    nodeProduce(Items.sand, () => {});
	    nodeProduce(Liquids.water, () => {
		    nodeProduce(Liquids.hydrogen, () => {});
		    nodeProduce(Liquids.cryofluid, () => {});
		});
	    nodeProduce(Liquids.nitrogen, () => {});
    });
});

恢复核心.alwaysUnlocked = true;