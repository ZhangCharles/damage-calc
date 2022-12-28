import { Pokemon, Move, Field } from "@smogon/calc"

function createPokemon(gen: any, pokeInfo: any) {
  return new Pokemon(gen, pokeInfo.name, {
    level: pokeInfo.level,
    ability: pokeInfo.ability,
    abilityOn: pokeInfo.abilityOn,
    item: pokeInfo.item,
    gender: pokeInfo.gender,
    nature: pokeInfo.nature,
    evs: pokeInfo.evs,
    ivs: pokeInfo.ivs,
    boosts: pokeInfo.boosts,
    teraType: pokeInfo.teraType,
    status: pokeInfo.status,
    toxicCounter: pokeInfo.toxicCounter,
    curHP: pokeInfo.curHP,
    isSaltCure: pokeInfo.isSaltCure,
    moves: [
      Object(getMoveDetails(gen, pokeInfo.moves[0])),
      Object(getMoveDetails(gen, pokeInfo.moves[1])),
      Object(getMoveDetails(gen, pokeInfo.moves[2])),
      Object(getMoveDetails(gen, pokeInfo.moves[3])),
    ],

  })
}

function getMoveDetails(gen: any, moveInfo: any) {
  return new Move(gen, moveInfo.name, {
    isCrit: moveInfo.isCrit
  })
}

function createField(fieldInfo: any) {
  var createSide = [{}, {}]
  createSide[0] = fieldInfo.attackerSide
  createSide[1] = fieldInfo.defenderSide
  return new Field({
    gameType: fieldInfo.gameType,
    isAuraBreak: fieldInfo.isAuraBreak,
    isBeadsOfRuin: fieldInfo.isBeadsOfRuin,
    isDarkAura: fieldInfo.isDarkAura,
    isFairyAura: fieldInfo.isFairyAura,
    isGravity: fieldInfo.isGravity,
    isMagicRoom: fieldInfo.isMagicRoom,
    isSwordOfRuin: fieldInfo.isSwordOfRuin,
    isTabletsOfRuin: fieldInfo.isTabletsOfRuin,
    isVesselOfRuin: fieldInfo.isVesselOfRuin,
    isWonderRoom: fieldInfo.isWonderRoom,
    terrain: fieldInfo.terrain,
    weather: fieldInfo.weather,
    attackerSide: createSide[0],
    defenderSide: createSide[1]
  })
}

export {
  createPokemon,
  createField
}