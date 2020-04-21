Hooks.on("ready", function () {
  console.log("Spell School Icons Module Loaded");
})

Hooks.on("preUpdateOwnedItem", (actor, item, updateData) => {
  if (item.type == "spell"){
    if (shouldChangeIcon(item.img)){      
      updateData.img = getIconPath(updateData.data.school);
    }
  }
});

function shouldChangeIcon(oldImgPath){
  // should change if it is the mystery man
  if (oldImgPath.replace(/^.*[\\\/]/, '') == "mystery-man.svg"){
   return true;
  }
  else if (oldImgPath.substring(0, oldImgPath.lastIndexOf("/")+1) == baseIconPath) {
    return true;
  } 
  else return false;
}

function getIconPath(school) {
  return baseIconPath + iconMap(school); 
}

const baseIconPath = "modules/5e-spell-school-icons/icons/";

const iconMap = (school) => ({
  "abj": "abjuration.png",
  "con": "conjuration.png",
  "div": "divination.png",
  "enc": "enchantment.png",
  "evo": "evocation.png",
  "ill": "illusion.png",
  "nec": "necromancy.png",
  "trs": "transmutation.png"
})[school]
