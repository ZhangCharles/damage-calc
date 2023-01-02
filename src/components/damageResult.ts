import { createPokemon, createField } from "@/components/createPokemon"
import { calculate } from "@smogon/calc"

var damageResults: any
function performCalculations(gen: any, pm1: any, pm2: any, field: any) {
  var p1 = createPokemon(gen, pm1)
  var p2 = createPokemon(gen, pm2)
  var p1field = createField(field)
  var p2field = p1field.clone().swap()
  damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field)
  
  var result: any = [{}, {}]
  for (var i = 0; i < 4; i++) {
    result[0][i] = damageResults[0][i]
    result[1][i] = damageResults[1][i]

    result[0][i].moveDesc = damageResults[0][i].moveDesc('%')
    result[1][i].moveDesc = damageResults[1][i].moveDesc('%')

    result[0][i].range = damageResults[0][i].range()
    result[1][i].range = damageResults[1][i].range()

    result[0][i].desc = getDesc(damageResults[0][i])
    result[1][i].desc = getDesc(damageResults[1][i])

    result[0][i].recoil = damageResults[0][i].recoil('%')
    result[1][i].recoil = damageResults[1][i].recoil('%')

    result[0][i].recovery = damageResults[0][i].recovery('%')
    result[1][i].recovery = damageResults[1][i].recovery('%')

    result[0][i].kochance = getKoChance(damageResults[0][i])
    result[1][i].kochance = getKoChance(damageResults[1][i])
    }
  return result
}

function calculateAllMoves(gen: any, p1: any, p1field: any, p2: any, p2field: any) {
  var results: any = [{}, {}]
  for (var i = 0; i < 4; i++) {
    results[0][i] = calculate(gen, p1, p2, p1.moves[i], p1field)
    results[1][i] = calculate(gen, p2, p1, p2.moves[i], p2field)
  }
  return results
}

function getKoChance(damageResults: any) {
  var kochance
  try {
    kochance = damageResults.kochance(true)
  } catch(e: any) {
    kochance = 0
  }
  return kochance
}

function getDesc(damageResults: any) {
  var desc
  try {
    desc = damageResults.desc(true)
  } catch(e: any) {
    desc = ''
  }
  return desc
}

export {
  performCalculations
}