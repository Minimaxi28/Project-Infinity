ServerEvents.recipes(event => {
  event.remove({
    type: 'draconicevolution:fusion_crafting',
    output: 'draconicevolution:chaotic_chestpiece'
  })
  event.remove({
    type: 'draconicevolution:fusion_crafting',
    output: 'draconicevolution:draconic_chestpiece'
  })
  event.remove({
    type: 'draconicevolution:fusion_crafting',
    output: 'draconicevolution:wyvern_chestpiece'
  })
  event.remove({
    type: 'draconicevolution:fusion_crafting',
    output: 'draconicevolution:chaotic_staff'
  })
  event.remove({
    type: 'draconicevolution:fusion_crafting',
    output: 'draconicevolution:draconic_staff'
  })
})