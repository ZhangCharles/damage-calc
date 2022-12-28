import { createPokemon } from './createPokemon'
import { Stats, SPECIES, ITEMS, ABILITIES, TYPE_CHART } from '@smogon/calc'

function ExportPokemon(gen: any, pokeInfo: any) {
  var pokemon: any = createPokemon(gen, pokeInfo);
  var EV_counter = 0;
  var finalText = "";
  finalText = pokemon.name + (pokemon.item ? " @ " + pokemon.item : "") + "\n";
  finalText += "Level: " + pokemon.level + "\n";
  finalText += pokemon.nature && gen > 2 ? pokemon.nature + " Nature" + "\n" : "";
  finalText += pokemon.teraType && gen > 8 ? "Tera Type: " + pokemon.teraType + "\n" : "";
  finalText += pokemon.ability ? "Ability: " + pokemon.ability + "\n" : "";

	var stat:any
  var EVs_Array = [];
  for (stat in pokemon.evs) {
    var ev = pokemon.evs[stat] ?pokemon.evs[stat] : 0;
    if (ev > 0) {
      EVs_Array.push(ev + " " + Stats.displayStat(stat));
    }
    EV_counter += ev;
    if (EV_counter > 510) break;
  }
  if (EVs_Array.length > 0) {
    finalText += "EVs: ";
    finalText += serialize(EVs_Array, " / ");
    finalText += "\n";
  }

	var stat:any
  var IVs_Array = [];
  for (stat in pokemon.ivs) {
    var iv = pokemon.ivs[stat] ? pokemon.ivs[stat] : 0;
    if (iv < 31) {
      IVs_Array.push(iv + " " + Stats.displayStat(stat));
    }
  }
  if (IVs_Array.length > 0) {
    finalText += "IVs: ";
    finalText += serialize(IVs_Array, " / ");
    finalText += "\n";
  }

  for (var i = 0; i < 4; i++) {
    var moveName = pokemon.moves[i].name;
    if (moveName !== "(No Move)") {
      finalText += "- " + moveName + "\n";
    }
  }
  finalText = finalText.trim();
  return finalText
}

function serialize(array: any, separator: any) {
  var text = "";
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      text += array[i] + separator;
    } else {
      text += array[i];
    }
  }
  return text;
}

function addSets(pokes: any) {
	var rows = pokes.split("\n");
	var currentRow;
	var currentPoke: any;
	for (var i = 0; i < rows.length; i++) {
		currentRow = rows[i].split(/[()@]/);
		for (var j = 0; j < currentRow.length; j++) {
			currentRow[j] = checkExeptions(currentRow[j].trim());
			if (SPECIES[9][currentRow[j].trim()] !== undefined) {
				currentPoke = SPECIES[9][currentRow[j].trim()];
				currentPoke.name = currentRow[j].trim();
				currentPoke.item = getItem(currentRow, j + 1);
				currentPoke.isCustomSet = true;
				currentPoke.ability = getAbility(rows[i + 1].split(":"));
				currentPoke.teraType = getTeraType(rows[i + 1].split(":"));
				currentPoke = getStats(currentPoke, rows, i + 1);
				currentPoke = getMoves(currentPoke, rows, i);
			}
		}
	}
  return currentPoke
}

function checkExeptions(poke: any) {
	switch (poke) {
	case 'Aegislash':
		poke = "Aegislash-Blade";
		break;
	case 'Basculin-Blue-Striped':
		poke = "Basculin";
		break;
	case 'Gastrodon-East':
		poke = "Gastrodon";
		break;
	case 'Mimikyu-Busted-Totem':
		poke = "Mimikyu-Totem";
		break;
	case 'Mimikyu-Busted':
		poke = "Mimikyu";
		break;
	case 'Pikachu-Belle':
	case 'Pikachu-Cosplay':
	case 'Pikachu-Libre':
	case 'Pikachu-Original':
	case 'Pikachu-Partner':
	case 'Pikachu-PhD':
	case 'Pikachu-Pop-Star':
	case 'Pikachu-Rock-Star':
		poke = "Pikachu";
		break;
	case 'Vivillon-Fancy':
	case 'Vivillon-Pokeball':
		poke = "Vivillon";
		break;
	case 'Florges-White':
	case 'Florges-Blue':
	case 'Florges-Orange':
	case 'Florges-Yellow':
		poke = "Florges";
		break;
	}
	return poke;
}

function statToLegacyStat(stat: any) {
	switch (stat) {
	case 'hp':
		return "hp";
	case 'atk':
		return "atk";
	case 'def':
		return "def";
	case 'spa':
		return "spa";
	case 'spd':
		return "spd";
	case 'spe':
		return "spe";
	}
}

function getItem(currentRow: any, j: any) {
	for (;j < currentRow.length; j++) {
		var item = currentRow[j].trim();
		if (ITEMS[9].indexOf(item) != -1) {
			return item;
		}
	}
}

function getAbility(row: any) {
	var ability = row[1] ? row[1].trim() : '';
	if (ABILITIES[9].indexOf(ability) !== -1) return ability;
}

function getTeraType(row: any) {
	var teraType = row[1] ? row[1].trim() : '';
	if (Object.keys(TYPE_CHART[9]).slice(1).indexOf(teraType) !== -1) return teraType;
}

function getStats(currentPoke: any, rows: any, offset: any) {
	currentPoke.nature = "Serious";
	var currentEV;
	var currentIV;
	var currentAbility;
	var currentTeraType;
	var currentNature;
	currentPoke.level = 100;
	for (var x = offset; x < offset + 9; x++) {
		var currentRow = rows[x] ? rows[x].split(/[/:]/) : '';
		var evs: any = {};
		var ivs: any = {};
		var j;

		switch (currentRow[0]) {
		case 'Level':
			currentPoke.level = parseInt(currentRow[1].trim());
			break;
		case 'EVs':
			for (j = 1; j < currentRow.length; j++) {
				currentEV = currentRow[j].trim().split(" ");
				currentEV[1] = statToLegacyStat(currentEV[1].toLowerCase());
				evs[currentEV[1]] = parseInt(currentEV[0]);
			}
			currentPoke.evs = evs;
			break;
		case 'IVs':
			for (j = 1; j < currentRow.length; j++) {
				currentIV = currentRow[j].trim().split(" ");
				currentIV[1] = statToLegacyStat(currentIV[1].toLowerCase());
				ivs[currentIV[1]] = parseInt(currentIV[0]);
			}
			currentPoke.ivs = ivs;
			break;

		}
		currentAbility = rows[x] ? rows[x].trim().split(":") : '';
		if (currentAbility[0] == "Ability") {
			currentPoke.ability = currentAbility[1].trim();
		}

		currentTeraType = rows[x] ? rows[x].trim().split(":") : '';
		if (currentTeraType[0] == "Tera Type") {
			currentPoke.teraType = currentTeraType[1].trim();
		}

		currentNature = rows[x] ? rows[x].trim().split(" ") : '';
		if (currentNature[1] == "Nature") {
			currentPoke.nature = currentNature[0];
		}
	}
	return currentPoke;
}

function getMoves(currentPoke: any, rows: any, offset: any) {
	var movesFound = false;
	var moves = [];
	for (var x = offset; x < offset + 12; x++) {
		if (rows[x]) {
			if (rows[x][0] == "-") {
				movesFound = true;
				var move = rows[x].substr(2, rows[x].length - 2).replace("[", "").replace("]", "").replace("  ", "");
				moves.push(move);
			} else {
				if (movesFound == true) {
					break;
				}
			}
		}
	}
	currentPoke.moves = moves;
	return currentPoke;
}

export {
  ExportPokemon,
  addSets
}