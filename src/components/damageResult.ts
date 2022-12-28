import { createPokemon, createField } from "@/components/createPokemon"
import { calculate } from "@smogon/calc"

var damageResults: any
function performCalculations(gen: any, pm1: any, pm2: any, field: any) {
  var p1 = createPokemon(gen, pm1)
  var p2 = createPokemon(gen, pm2)
  var p1field = createField(field)
  var p2field = p1field.clone().swap()
  damageResults = calculateAllMoves(gen, p1, p1field, p2, p2field)
  return damageResults
}

function calculateAllMoves(gen: any, p1: any, p1field: any, p2: any, p2field: any) {
  var results: any = [{}, {}]
  for (var i = 0; i < 4; i++) {
    results[0][i] = calculate(gen, p1, p2, p1.moves[i], p1field)
    results[1][i] = calculate(gen, p2, p1, p2.moves[i], p2field)
  }
  return results
}

function getFullDesc(gen: any, pm1: any, pm2: any, field: any) {
  damageResults = performCalculations(gen, pm1, pm2, field)
  var result: any = [{},{}]
  for (var i =0; i < 4; i++) {
    result[0][i] = damageResults[0][i].fullDesc('%', false)
    result[1][i] = damageResults[1][i].fullDesc('%', false)
  }
  return result
}

function getMoveDesc(gen: any, pm1: any, pm2: any, field: any) {
  damageResults = performCalculations(gen, pm1, pm2, field)
  var result: any = [{},{}]
  for (var i =0; i < 4; i++) {
    result[0][i] = damageResults[0][i].moveDesc('%')
    result[1][i] = damageResults[1][i].moveDesc('%')
  }
  return result
}

export {
  performCalculations,
  getFullDesc,
  getMoveDesc
}