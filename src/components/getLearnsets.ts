import { learnSets } from "@/stores/learnsets"
import { AllMoves } from "@/stores/moves"

var learnsets = learnSets()
var allmoves = AllMoves()
function LEARNSETS(gen: any, id: any) {
  const allLearnsets = learnsets[id].learnset

  const updatedlearnsets: { [key: string]: string[] } = {}

  for (const key of Object.keys(allLearnsets)) {
    if (allLearnsets[key].some((val: any) => val.includes(gen))) {
      updatedlearnsets[key] = allLearnsets[key]
    }
  }

var learnsetid = Object.keys(updatedlearnsets)
var moves: any = [{},{}]
for (var i = 0; i < learnsetid.length ; i++) {
  moves[i] = allmoves[learnsetid[i]]
}
  return moves
}

export {
  LEARNSETS
}