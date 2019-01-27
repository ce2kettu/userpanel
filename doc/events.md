When a map has been purchased:
mta.triggerEvent('onMapBuyButton', <javascript object>); 

When settings have been changed
mta.triggerEvent('onSettingsChanged', <javascript object>);

When player equips an item in the shop
mta.triggerEvent('onItemEquipped', <type>, <unique id>);

When player equips an item in the shop
mta.triggerEvent('onItemUnequipped', <type>, <unique id>);

When player sells a map/player in stats
mta.triggerEvent('onPlayerSellItem', <type>, <javscript object>);