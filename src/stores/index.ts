import { defineStore } from 'pinia'

export const useStore = defineStore('mian', {
  state: () => {
    return ({
      pokemon1: {
        name: '',
        ability: '',
        abilityOn: false,
        gender: '',
        item: '',
        teraType: undefined,
        nature: '',
        status: undefined,
        toxicCounter: 0,
        isSaltCure: false,
        curHP: 0,
        moves: [
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
        ],
        level: 50,
        ivs: {
          hp: 31,
          atk: 31,
          def: 31,
          spa: 31,
          spd: 31,
          spe: 31
        },
        evs: {
          hp: 0,
          atk: 0,
          def: 0,
          spa: 0,
          spd: 0,
          spe: 0
        },
        boosts: {
          hp: 0,
          atk: 0,
          def: 0,
          spa: 0,
          spd: 0,
          spe: 0
        }
      },
      pokemon2: {
        name: '',
        ability: '',
        abilityOn: false,
        gender: '',
        item: '',
        teraType: undefined,
        nature: '',
        status: undefined,
        toxicCounter: 0,
        isSaltCure: false,
        curHP: 999,
        moves: [
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
          {
            name: '',
            isCrit: false
          },
        ],
        level: 50,
        ivs: {
          atk: 31,
          def: 31,
          hp: 31,
          spa: 31,
          spd: 31,
          spe: 31
        },
        evs: {
          atk: 0,
          def: 0,
          hp: 0,
          spa: 0,
          spd: 0,
          spe: 0
        },
        boosts: {
          hp: 0,
          atk: 0,
          def: 0,
          spa: 0,
          spd: 0,
          spe: 0
        }
      },
      Field: {
        gameType: "Singles",
        isAuraBreak: false,
        isBeadsOfRuin: false,
        isDarkAura: false,
        isFairyAura: false,
        isGravity: false,
        isMagicRoom: false,
        isSwordOfRuin: false,
        isTabletsOfRuin: false,
        isVesselOfRuin: false,
        isWonderRoom: false,
        terrain: undefined,
        weather: undefined,
        attackerSide: {
          cannonade: false,
          isAuroraVeil: false,
          isBattery: false,
          isFlowerGift: false,
          isForesight: false,
          isFriendGuard: false,
          isHelpingHand: false,
          isLightScreen: false,
          isPowerSpot: false,
          isProtected: false,
          isReflect: false,
          isSR: false,
          isSeeded: false,
          isSwitching: undefined,
          isTailwind: false,
          spikes: 0,
          steelsurge: false,
          vinelash: false,
          volcalith: false,
          wildfire: false,
        },
        defenderSide: {
          cannonade: false,
          isAuroraVeil: false,
          isBattery: false,
          isFlowerGift: false,
          isForesight: false,
          isFriendGuard: false,
          isHelpingHand: false,
          isLightScreen: false,
          isPowerSpot: false,
          isProtected: false,
          isReflect: false,
          isSR: false,
          isSeeded: false,
          isSwitching: undefined,
          isTailwind: false,
          spikes: 0,
          steelsurge: false,
          vinelash: false,
          volcalith: false,
          wildfire: false,
        }
      }
    })
  }
})