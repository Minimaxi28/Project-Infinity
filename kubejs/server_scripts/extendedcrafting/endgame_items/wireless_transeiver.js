ServerEvents.recipes((event) => {
  //Wireless Transeiver
  event
    .custom({
      type: 'extendedcrafting:shaped_table',
      pattern: [
        'AA   AA',
        'ABB BBA',
        ' BCDEB ',
        ' FGHIF ',
        ' BEJCB ',
        'ABB BBA',
        'AA   AA',
      ],
      key: {
        A: {
          item: 'ae2:quantum_ring',
        },
        B: {
          item: 'ae2:quantum_link',
        },
        C: {
          item: 'extendedae_plus:infinity_core',
        },
        D: {
          item: 'ae2omnicells:spent_nuclear_waste_singularity',
        },
        E: {
          item: 'extendedae_plus:infinity_core',
        },
        F: {
          item: 'botanicalextramachinery:crimson_dragonstone',
        },
        G: {
          item: 'ae2:quantum_entangled_singularity',
        },
        H: {
          item: 'crazyae2addons:super_singularity',
        },
        I: {
          item: 'extendedae_plus:oblivion_singularity',
        },
        J: {
          item: 'ae2omnicells:singularity_block',
        },
      },
      result: {
        item: 'extendedae_plus:wireless_transceiver',
      },
    })
    .id('extendedae_plus:wireless_transceiver');
});
