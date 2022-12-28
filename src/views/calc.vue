<script lang="ts">
import { Generations } from '@smogon/calc'
import { ElMessage } from 'element-plus'
import { useStore } from '@/stores/index'
import { PokeDex } from '@/stores/pokedex'
import { performCalculations, getFullDesc, getMoveDesc } from '@/components/damageResult'
import { ExportPokemon, addSets } from '@/components/exportPokemon'

export default {
  setup() {
    // Stores
    const stores = useStore()
    const pokedex = PokeDex()

    const pokemons_list = pokedex.Pokedex
    const natures = Object(pokedex.Natures)
    const types = pokedex.Types
    const status = pokedex.Status
    const terrain = pokedex.Terrain
    const weather = pokedex.Weather
    const items = pokedex.Items.filter((item: any) => {
      // 过滤不合法的道具
      return item.isNonstandard !== "Past"
    })
    const moves = pokedex.Moves.filter((item: any) => {
      // 过滤不合法的技能
      return item.isNonstandard == undefined
    })

    const field = stores.Field
    const pokemon1 = stores.pokemon1
    const pokemon2 = stores.pokemon2
    const gen = 9 //Generations.get(9)
    return {
      gen,
      types,
      status,
      natures,
      pokemons_list,
      items,
      moves,
      pokemon1,
      pokemon2,
      field,
      terrain,
      weather
    }
  },
  data() {
    return {
      select_pm1: {
        abilities: '',
        baseStats: {
          hp: 0,
          atk: 0,
          spa: 0,
          def: 0,
          spd: 0,
          spe: 0,
        },
      },
      selected_pm1: '',
      select_pm2: {
        abilities: '',
        baseStats: {
          hp: 0,
          atk: 0,
          spa: 0,
          def: 0,
          spd: 0,
          spe: 0,
        },
      },
      selected_pm2: '',
      result: {
        attacker: {
          stats: {
            hp: 0,
            atk: 0,
            spa: 0,
            def: 0,
            spd: 0,
            spe: 0,
          },
        },
        damage: '',
        defender: {
          stats: {
            hp: 0,
            atk: 0,
            spa: 0,
            def: 0,
            spd: 0,
            spe: 0,
          },
        }
      },
      moveDesc: [
        {
          0: "0 - 0%",
          1: "0 - 0%",
          2: "0 - 0%",
          3: "0 - 0%"
        },
        {
          0: "0 - 0%",
          1: "0 - 0%",
          2: "0 - 0%",
          3: "0 - 0%"
        }
      ],
      fullDesc: [
        {
          0: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          1: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          2: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          3: "Charizard  vs. Charizard: 0-0 (0 - 0%)"
        },
        {
          0: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          1: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          2: "Charizard  vs. Charizard: 0-0 (0 - 0%)",
          3: "Charizard  vs. Charizard: 0-0 (0 - 0%)"
        }
      ],
      kochance: '',
      damage: '',
      results: [{}, {}],
      importpm1: false,
      importpm2: false,
      PSinfo1: '',
      PSinfo2: ''
    }
  },
  created() {
    this.pokemon1.name = "Charizard"
    this.pokemon1.nature = "Modest"
    this.pokemon2.name = "Charizard"
    this.pokemon2.nature = "Modest"
  },
  watch: {
    pokemon1: {
      handler(newVal) {
        try {
          const pm1 = this.pokemons_list.filter((item: any) => {
            return item.name == newVal.name
          })[0]
          if (pm1 == undefined) {
            this.pokemon1.name = this.selected_pm1
            ElMessage({
              message: '所选宝可梦不合法',
              type: 'error'
            })
          } else if (newVal.name == this.selected_pm1) {
            this.select_pm1 = Object(pm1)
            this.selected_pm1 = newVal.name
            this.getResult()
            this.SetCt()
            this.resetHP()
          } else if (newVal.name !== this.selected_pm1) {
            this.select_pm1 = Object(pm1)
            this.selected_pm1 = newVal.name
            this.pokemon1.ability = this.select_pm1.abilities[0]
            this.getResult()
            this.SetCt()
            this.resetHP()
          }
        } catch (e: any) {
          this.resetPM()
          ElMessage({
            message: '所选宝可梦不合法',
            type: 'error'
          })
        }
      },
      deep: true
    },
    pokemon2: {
      handler(newVal2) {
        try {
          const pm2 = this.pokemons_list.filter((item: any) => {
            return item.name == this.pokemon2.name
          })[0]
          if (pm2 == undefined) {
            this.pokemon2.name = this.selected_pm2
            ElMessage({
              message: '所选宝可梦不合法',
              type: 'error'
            })
          } else if (newVal2.name == this.selected_pm2) {
            this.select_pm2 = Object(pm2)
            this.selected_pm2 = newVal2.name
            this.getResult()
            this.SetCt()
            this.resetHP()
          } else if (newVal2.name !== this.selected_pm2) {
            this.select_pm2 = Object(pm2)
            this.selected_pm2 = newVal2.name
            this.pokemon2.ability = this.select_pm2.abilities[0]
            this.getResult()
            this.SetCt()
            this.resetHP()
          }
        } catch (e: any) {
          this.resetPM()
          ElMessage({
            message: '所选宝可梦不合法',
            type: 'error'
          })
        }
      },
      deep: true
    },
    field: {
      handler() {
        try {
          this.getResult()
          this.Show_KoChance(0)
        } catch (e) {

        }
      },
      deep: true
    }
  },
  methods: {
    async resetPM() {
      this.pokemon1.name = this.selected_pm1
      this.pokemon2.name = this.selected_pm2
    },
    resetHP() {
      this.pokemon1.curHP = this.result.attacker.stats.hp
      this.pokemon2.curHP = this.result.defender.stats.hp
    },
    getResult() {
      const gen = this.gen
      const p1 = this.pokemon1
      const p2 = this.pokemon2
      const field = this.field
      const result = performCalculations(gen, p1, p2, field)
      this.result = result[0][0]
      this.results = result
      console.log(this.results)
      this.fullDesc = getFullDesc(gen, p1, p2, field)
      this.moveDesc = getMoveDesc(gen, p1, p2, field)
    },
    Show_KoChance(index: any) {
      var i = 0
      if (index > 3) {
        i = 1
        index = index - 4
      }
      this.kochance = Object(this.fullDesc)[i][index]
      this.damage = Object(this.results)[i][index].damage
    },
    ExportInfo(index: any) {
      if (index == 1) {
        this.PSinfo1 = ExportPokemon(this.gen, this.pokemon1)
      } else if (index == 2) {
        this.PSinfo2 = ExportPokemon(this.gen, this.pokemon2)
      }
    },
    ImPortInfo(index: any) {
      try {
        if (index == 1) {
          const pm1 = addSets(this.PSinfo1)
          this.pokemon1.name = pm1.name
          this.pokemon1.ability = pm1.ability
          this.pokemon1.nature = pm1.nature
          this.pokemon1.level = pm1.level
          this.pokemon1.teraType = pm1.teraType
          this.pokemon1.item = pm1.item
          for (var i = 0; i < 4; i++) {
            this.pokemon1.moves[i].name = pm1.moves[i]
          }
          for (var stat in this.pokemon1.evs) {
            (this.pokemon1 as any).evs[stat] = pm1.evs[stat] ? pm1.evs[stat] : 0
          }
          for (var stat in this.pokemon1.ivs) {
            (this.pokemon1 as any).ivs[stat] = pm1.ivs[stat] ?? 31
          }
        } else if (index == 2) {
          const pm2 = addSets(this.PSinfo2)
          this.pokemon2.name = pm2.name
          this.pokemon2.ability = pm2.ability
          this.pokemon2.nature = pm2.nature
          this.pokemon2.level = pm2.level
          this.pokemon2.teraType = pm2.teraType
          this.pokemon2.item = pm2.item
          for (var i = 0; i < 4; i++) {
            this.pokemon1.moves[i].name = pm2.moves[i]
          }
          for (var stat in this.pokemon1.evs) {
            (this.pokemon2 as any).evs[stat] = pm2.evs[stat] ? pm2.evs[stat] : 0
          }
          for (var stat in this.pokemon1.ivs) {
            (this.pokemon2 as any).ivs[stat] = pm2.ivs[stat] ?? 31
          }
        }
      } catch(e) {
        ElMessage({
          message: '导入失败',
          type: 'error'
        })
      }
    },
    SetCt() {
      for (var i = 0; i < 4; i++) {
        this.pokemon1.moves[i].isCrit = Object(this.results)[0][i].move.isCrit
        this.pokemon2.moves[i].isCrit = Object(this.results)[1][i].move.isCrit
      }
    }
  }
}
</script>

<template>
  <el-container>
    <el-main>
      <el-row :gutter="12">
        <el-col :xs="24" :sm="12" :lg="8">
          <el-card shaodw="always">
            <template #header>
              <div class="card-header" @click="importpm1 = true, ExportInfo(1)">
                <h3>
                  Pokémon 1
                </h3>
              </div>
              <el-dialog v-model="importpm1">
                <template #default>
                  <el-input v-model="PSinfo1" autosize type="textarea" />
                </template>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="importpm1 = false">取消</el-button>
                    <el-button type="primary" @click="importpm1 = false, ImPortInfo(1)">
                      导入
                    </el-button>
                  </span>
                </template>
              </el-dialog>
            </template>
            <el-form :model="pokemon1">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item>
                    <el-select v-model="pokemon1.name" filterable placeholder="Select">
                      <el-option v-for="item in pokemons_list" :key="item.name" :label="$t(item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.level" :controls="false" :min="1" :max="100" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <el-form :model="pokemon1" label-position="top" label-width="68px">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="特性">
                    <el-select v-model="pokemon1.ability" filterable placeholder="Select">
                      <el-option v-for="item in select_pm1.abilities" :key="item" :label="$t(item)" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="钛晶">
                    <el-select v-model="pokemon1.teraType" clearable filterable placeholder="Select">
                      <el-option v-for="item in types" :key="item" :label="$t(item)" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="性格">
                    <el-select v-model="pokemon1.nature" filterable placeholder="Select">
                      <el-option v-for="item in natures" :key="item.name" :label="$t(item.name)" :value="item.name">
                        <span style="float: left">{{ $t(item.name) }}</span>
                        <span style="float: right;color: var(--el-text-color-secondary); font-size: 14px;"
                          v-if="item.plus">+{{ item.plus }} -{{ item.minus }}</span>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="物品">
                    <el-select v-model="pokemon1.item" clearable filterable placeholder="Select">
                      <el-option v-for="item in items" :key="item.name" :label="$t(item.name)" :value="item.name" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="状态">
                    <el-select v-model="pokemon1.status" clearable filterable placeholder="Select">
                      <el-option v-for="(value, index) in status" :key="value" :label="$t(index)" :value="value" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="当前血量">
                    <el-input-number v-model="pokemon1.curHP" :min="1" :max="result.attacker.stats.hp"
                      :controls="false" />
                    <span>{{ result.attacker.stats.hp }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4"></el-col>
                <el-col :span="4" style="font-size: 14px;">种族值</el-col>
                <el-col :span="4" style="font-size: 14px;">个体值</el-col>
                <el-col :span="4" style="font-size: 14px;">努力值</el-col>
                <el-col :span="4" style="font-size: 14px;">增益</el-col>
                <el-col :span="4"></el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">HP</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.hp" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.hp" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.hp" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.hp" size="small" :min="-6" :max="6" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.hp }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">攻击</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.atk" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.atk" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.atk" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.atk" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.atk }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">防御</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.def" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.def" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.def" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.def" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.def }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">特攻</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.spa" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.spa" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.spa" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.spa" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.spa }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">特防</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.spd" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.spd" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.spd" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.spd" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.spd }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">速度</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm1.baseStats.spe" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.ivs.spe" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.evs.spe" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon1.boosts.spe" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.attacker.stats.spe }}</el-col>
              </el-row>
              <el-form-item label="技能">
                <el-row :gutter="12">
                  <el-col :span="8">
                    <el-select v-model="pokemon1.moves[0].name" filterable placeholder="技能1">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit1" v-model="pokemon1.moves[0].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit1" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(0)">{{ moveDesc[0][0] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon1.moves[1].name" filterable placeholder="技能2">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit2" v-model="pokemon1.moves[1].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit2" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(1)">{{ moveDesc[0][1] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon1.moves[2].name" filterable placeholder="技能3">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit3" v-model="pokemon1.moves[2].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit3" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(2)">{{ moveDesc[0][2] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon1.moves[3].name" filterable placeholder="技能4">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit4" v-model="pokemon1.moves[3].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit4" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(3)">{{ moveDesc[0][3] }}</div>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col :lg="8" class="hidden-md-and-down">
          <el-card shaodw="always">
            <template #header>
              <el-form :model="field">
                <el-row :gutter="20">
                  <el-col>
                    <el-form-item>
                      <div class="center">
                        <el-radio-group v-model="field.gameType">
                          <el-radio-button label="Singles">单打</el-radio-button>
                          <el-radio-button label="Doubles">双打</el-radio-button>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select v-model="field.terrain" clearable filterable placeholder="场地">
                        <el-option v-for="(index, value) in terrain" :key="value" :label="index" :value="value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select v-model="field.weather" clearable filterable placeholder="天气">
                        <el-option v-for="(index, value) in weather" :key="value" :label="index" :value="value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item>
                      <div class="between">
                        <input type="checkbox" id="BeadsOfRuin" v-model="field.isBeadsOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="BeadsOfRuin" class="el-button is-plain">灾祸之玉</label>
                        <input type="checkbox" id="SwordOfRuin" v-model="field.isSwordOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="SwordOfRuin" class="el-button is-plain">灾祸之剑</label>
                        <input type="checkbox" id="TabletsOfRuin" v-model="field.isTabletsOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="TabletsOfRuin" class="el-button is-plain">灾祸之简</label>
                        <input type="checkbox" id="VesselOfRuin" v-model="field.isVesselOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="VesselOfRuin" class="el-button is-plain">灾祸之鼎</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="MagicRoom" v-model="field.isMagicRoom"
                          class="el-switch__input input_btn" />
                        <label for="MagicRoom" class="el-button is-plain">魔法空间</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="WonderRoom" v-model="field.isWonderRoom"
                          class="el-switch__input input_btn" />
                        <label for="WonderRoom" class="el-button is-plain">奇妙空间</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="Gravity" v-model="field.isGravity"
                          class="el-switch__input input_btn" />
                        <label for="Gravity" class="el-button is-plain">重力</label>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <el-divider />
              <el-form :model="field">
                <el-row justify="space-between">
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="Reflect" class="el-radio-button">
                          <input type="checkbox" id="Reflect" v-model="field.attackerSide.isReflect"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">反射壁</span>
                        </label>
                        <label for="LightScreen" class="el-radio-button">
                          <input type="checkbox" id="LightScreen" v-model="field.attackerSide.isLightScreen"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">光墙</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="LightScreend" class="el-radio-button">
                          <input type="checkbox" id="LightScreend" v-model="field.defenderSide.isLightScreen"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">光墙</span>
                        </label>
                        <label for="Reflectd" class="el-radio-button">
                          <input type="checkbox" id="Reflectd" v-model="field.defenderSide.isReflect"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">反射壁</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="AuroraVeil" class="el-radio-button">
                          <input type="checkbox" id="AuroraVeil" v-model="field.attackerSide.isAuroraVeil"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">极光幕</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="AuroraVeild" class="el-radio-button">
                          <input type="checkbox" id="AuroraVeild" v-model="field.defenderSide.isAuroraVeil"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">极光幕</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="HelpingHand" class="el-radio-button">
                          <input type="checkbox" id="HelpingHand" v-model="field.attackerSide.isHelpingHand"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">帮助</span>
                        </label>
                        <label for="Tailwind" class="el-radio-button">
                          <input type="checkbox" id="Tailwind" v-model="field.attackerSide.isTailwind"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">顺风</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="HelpingHandd" class="el-radio-button">
                          <input type="checkbox" id="HelpingHandd" v-model="field.defenderSide.isHelpingHand"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">帮助</span>
                        </label>
                        <label for="Tailwindd" class="el-radio-button">
                          <input type="checkbox" id="Tailwindd" v-model="field.defenderSide.isTailwind"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">顺风</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="FriendGuard" class="el-radio-button">
                          <input type="checkbox" id="FriendGuard" v-model="field.attackerSide.isFriendGuard"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">友情防守</span>
                        </label>
                        <label for="Protected" class="el-radio-button">
                          <input type="checkbox" id="Protected" v-model="field.attackerSide.isProtected"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">保护</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="FriendGuardd" class="el-radio-button">
                          <input type="checkbox" id="FriendGuardd" v-model="field.defenderSide.isFriendGuard"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">友情防守</span>
                        </label>
                        <label for="Protectedd" class="el-radio-button">
                          <input type="checkbox" id="Protectedd" v-model="field.defenderSide.isProtected"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">保护</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="PowerSpot" class="el-radio-button">
                          <input type="checkbox" id="PowerSpot" v-model="field.attackerSide.isPowerSpot"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">能量点</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="PowerSpotd" class="el-radio-button">
                          <input type="checkbox" id="PowerSpotd" v-model="field.defenderSide.isPowerSpot"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">能量点</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="SR" class="el-radio-button">
                          <input type="checkbox" id="SR" v-model="field.attackerSide.isSR"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">隐形岩</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="SRd" class="el-radio-button">
                          <input type="checkbox" id="SRd" v-model="field.defenderSide.isSR"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">隐形岩</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="Seeded" class="el-radio-button">
                          <input type="checkbox" id="Seeded" v-model="field.attackerSide.isSeeded"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">寄生种子</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="Seededd" class="el-radio-button">
                          <input type="checkbox" id="Seededd" v-model="field.defenderSide.isSeeded"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">寄生种子</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="SaltCure" class="el-radio-button">
                          <input type="checkbox" id="SaltCure" v-model="pokemon1.isSaltCure"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">盐腌</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="SaltCured" class="el-radio-button">
                          <input type="checkbox" id="SaltCured" v-model="pokemon2.isSaltCure"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">盐腌</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div>
                        <el-radio-group v-model="field.attackerSide.spikes">
                          <el-radio-button :label="0">撒菱</el-radio-button>
                          <el-radio-button :label="1" />
                          <el-radio-button :label="2" />
                          <el-radio-button :label="3" />
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div>
                        <el-radio-group v-model="field.defenderSide.spikes">
                          <el-radio-button :label="3" />
                          <el-radio-button :label="2" />
                          <el-radio-button :label="1" />
                          <el-radio-button :label="0">撒菱</el-radio-button>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </template>
            <div>
              {{ kochance }}
            </div>
            <div>
              {{ damage }}
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :lg="8">
          <el-card shaodw="always">
            <template #header>
              <div class="card-header" @click="importpm2 = true, ExportInfo(2)">
                <h3>
                  Pokémon 2
                </h3>
              </div>
              <el-dialog v-model="importpm2">
                <template #default>
                  <el-input v-model="PSinfo2" autosize type="textarea" />
                </template>
                <template #footer>
                  <span class="dialog-footer">
                    <el-button @click="importpm2 = false">取消</el-button>
                    <el-button type="primary" @click="importpm2 = false, ImPortInfo(2)">
                      导入
                    </el-button>
                  </span>
                </template>
              </el-dialog>
            </template>
            <el-form :model="pokemon2">
              <el-row :gutter="20">
                <el-col :span="18">
                  <el-form-item>
                    <el-select v-model="pokemon2.name" filterable placeholder="Select">
                      <el-option v-for="item in pokemons_list" :key="item.name" :label="$t(item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.level" :controls="false" :min="1" :max="100" />
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
            <el-form :model="pokemon2" label-position="top" label-width="68px">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-form-item label="特性">
                    <el-select v-model="pokemon2.ability" filterable placeholder="Select">
                      <el-option v-for="item in select_pm2.abilities" :key="item" :label="$t(item)" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="钛晶属性">
                    <el-select v-model="pokemon2.teraType" clearable filterable placeholder="Select">
                      <el-option v-for="item in types" :key="item" :label="$t(item)" :value="item" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="性格">
                    <el-select v-model="pokemon2.nature" filterable placeholder="Select">
                      <el-option v-for="item in natures" :key="item.name" :label="$t(item.name)" :value="item.name">
                        <span style="float: left">{{ $t(item.name) }}</span>
                        <span style="float: right;color: var(--el-text-color-secondary); font-size: 14px;"
                          v-if="item.plus">+{{ item.plus }} -{{ item.minus }}</span>
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="物品">
                    <el-select v-model="pokemon2.item" clearable filterable placeholder="Select">
                      <el-option v-for="item in items" :key="item.name" :label="$t(item.name)" :value="item.name" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="异常状态">
                    <el-select v-model="pokemon2.status" clearable filterable placeholder="Select">
                      <el-option v-for="(value, index) in status" :key="value" :label="$t(index)" :value="value" />
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item label="当前血量">
                    <el-input-number v-model="pokemon2.curHP" :min="1" :max="result.attacker.stats.hp"
                      :controls="false" />
                    <span>{{ result.defender.stats.hp }}</span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4"></el-col>
                <el-col :span="4" style="font-size: 14px;">种族值</el-col>
                <el-col :span="4" style="font-size: 14px;">个体值</el-col>
                <el-col :span="4" style="font-size: 14px;">努力值</el-col>
                <el-col :span="4" style="font-size: 14px;">增益</el-col>
                <el-col :span="4"></el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">HP</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.hp" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.hp" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.hp" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.hp" size="small" :min="-6" :max="6" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.hp }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">攻击</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.atk" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.atk" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.atk" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.atk" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.atk }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">防御</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.def" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.def" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.def" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.def" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.def }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">特攻</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.spa" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.spa" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.spa" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.spa" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.spa }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">特防</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.spd" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.spd" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.spd" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.spd" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.spd }}</el-col>
              </el-row>
              <el-row :gutter="4" class="stats">
                <el-col :span="4" style="font-size: 14px;">速度</el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="select_pm2.baseStats.spe" size="small" :controls="false"
                      :disabled="true" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.ivs.spe" size="small" :min="0" :max="31" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.evs.spe" size="small" :min="0" :max="252" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item>
                    <el-input-number v-model="pokemon2.boosts.spe" size="small" :min="-6" :max="6" :controls="false" />
                  </el-form-item>
                </el-col>
                <el-col :span="4">{{ result.defender.stats.spe }}</el-col>
              </el-row>
              <el-form-item label="技能">
                <el-row :gutter="12">
                  <el-col :span="8">
                    <el-select v-model="pokemon2.moves[0].name" filterable placeholder="技能1">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit5" v-model="pokemon2.moves[0].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit5" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(4)">{{ moveDesc[1][0] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon2.moves[1].name" filterable placeholder="技能2">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit6" v-model="pokemon2.moves[1].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit6" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(5)">{{ moveDesc[1][1] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon2.moves[2].name" filterable placeholder="技能3">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit7" v-model="pokemon2.moves[2].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit7" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(6)">{{ moveDesc[1][2] }}</div>
                  </el-col>
                  <el-col :span="8">
                    <el-select v-model="pokemon2.moves[3].name" filterable placeholder="技能4">
                      <el-option v-for="item in moves" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name" />
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <input type="checkbox" id="Crit8" v-model="pokemon2.moves[3].isCrit"
                      class="el-switch__input input_btn" />
                    <label for="Crit8" class="el-button is-plain">Ct</label>
                  </el-col>
                  <el-col :span="12">
                    <div class="hide" @click="Show_KoChance(7)">{{ moveDesc[1][3] }}</div>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
        <el-col class="hidden-lg-and-up">
          <el-card shaodw="always">
            <template #header>
              <el-form :model="field">
                <el-row :gutter="20">
                  <el-col>
                    <el-form-item>
                      <div class="center">
                        <el-radio-group v-model="field.gameType">
                          <el-radio-button label="Singles">单打</el-radio-button>
                          <el-radio-button label="Doubles">双打</el-radio-button>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select v-model="field.terrain" clearable filterable placeholder="场地">
                        <el-option v-for="(index, value) in terrain" :key="value" :label="index" :value="value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <el-select v-model="field.weather" clearable filterable placeholder="天气">
                        <el-option v-for="(index, value) in weather" :key="value" :label="index" :value="value" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col>
                    <el-form-item>
                      <div class="between">
                        <input type="checkbox" id="BeadsOfRuin" v-model="field.isBeadsOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="BeadsOfRuin" class="el-button is-plain">灾祸之玉</label>
                        <input type="checkbox" id="SwordOfRuin" v-model="field.isSwordOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="SwordOfRuin" class="el-button is-plain">灾祸之剑</label>
                        <input type="checkbox" id="TabletsOfRuin" v-model="field.isTabletsOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="TabletsOfRuin" class="el-button is-plain">灾祸之简</label>
                        <input type="checkbox" id="VesselOfRuin" v-model="field.isVesselOfRuin"
                          class="el-switch__input input_btn" />
                        <label for="VesselOfRuin" class="el-button is-plain">灾祸之鼎</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="MagicRoom" v-model="field.isMagicRoom"
                          class="el-switch__input input_btn" />
                        <label for="MagicRoom" class="el-button is-plain">魔法空间</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="WonderRoom" v-model="field.isWonderRoom"
                          class="el-switch__input input_btn" />
                        <label for="WonderRoom" class="el-button is-plain">奇妙空间</label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item>
                      <div class="center">
                        <input type="checkbox" id="Gravity" v-model="field.isGravity"
                          class="el-switch__input input_btn" />
                        <label for="Gravity" class="el-button is-plain">重力</label>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
              <el-divider />
              <el-form :model="field">
                <el-row justify="space-between">
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="Reflect" class="el-radio-button">
                          <input type="checkbox" id="Reflect" v-model="field.attackerSide.isReflect"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">反射壁</span>
                        </label>
                        <label for="LightScreen" class="el-radio-button">
                          <input type="checkbox" id="LightScreen" v-model="field.attackerSide.isLightScreen"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">光墙</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="LightScreend" class="el-radio-button">
                          <input type="checkbox" id="LightScreend" v-model="field.defenderSide.isLightScreen"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">光墙</span>
                        </label>
                        <label for="Reflectd" class="el-radio-button">
                          <input type="checkbox" id="Reflectd" v-model="field.defenderSide.isReflect"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">反射壁</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="AuroraVeil" class="el-radio-button">
                          <input type="checkbox" id="AuroraVeil" v-model="field.attackerSide.isAuroraVeil"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">极光幕</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="AuroraVeild" class="el-radio-button">
                          <input type="checkbox" id="AuroraVeild" v-model="field.defenderSide.isAuroraVeil"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">极光幕</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="HelpingHand" class="el-radio-button">
                          <input type="checkbox" id="HelpingHand" v-model="field.attackerSide.isHelpingHand"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">帮助</span>
                        </label>
                        <label for="Tailwind" class="el-radio-button">
                          <input type="checkbox" id="Tailwind" v-model="field.attackerSide.isTailwind"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">顺风</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="HelpingHandd" class="el-radio-button">
                          <input type="checkbox" id="HelpingHandd" v-model="field.defenderSide.isHelpingHand"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">帮助</span>
                        </label>
                        <label for="Tailwindd" class="el-radio-button">
                          <input type="checkbox" id="Tailwindd" v-model="field.defenderSide.isTailwind"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">顺风</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="FriendGuard" class="el-radio-button">
                          <input type="checkbox" id="FriendGuard" v-model="field.attackerSide.isFriendGuard"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">友情防守</span>
                        </label>
                        <label for="Protected" class="el-radio-button">
                          <input type="checkbox" id="Protected" v-model="field.attackerSide.isProtected"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">保护</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="FriendGuardd" class="el-radio-button">
                          <input type="checkbox" id="FriendGuardd" v-model="field.defenderSide.isFriendGuard"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">友情防守</span>
                        </label>
                        <label for="Protectedd" class="el-radio-button">
                          <input type="checkbox" id="Protectedd" v-model="field.defenderSide.isProtected"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">保护</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="PowerSpot" class="el-radio-button">
                          <input type="checkbox" id="PowerSpot" v-model="field.attackerSide.isPowerSpot"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">能量点</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="PowerSpotd" class="el-radio-button">
                          <input type="checkbox" id="PowerSpotd" v-model="field.defenderSide.isPowerSpot"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">能量点</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="SR" class="el-radio-button">
                          <input type="checkbox" id="SR" v-model="field.attackerSide.isSR"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">隐形岩</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="SRd" class="el-radio-button">
                          <input type="checkbox" id="SRd" v-model="field.defenderSide.isSR"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">隐形岩</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="Seeded" class="el-radio-button">
                          <input type="checkbox" id="Seeded" v-model="field.attackerSide.isSeeded"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">寄生种子</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="Seededd" class="el-radio-button">
                          <input type="checkbox" id="Seededd" v-model="field.defenderSide.isSeeded"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">寄生种子</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div class="el-radio-group">
                        <label for="SaltCure" class="el-radio-button">
                          <input type="checkbox" id="SaltCure" v-model="pokemon1.isSaltCure"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">盐腌</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div class="el-radio-group">
                        <label for="SaltCured" class="el-radio-button">
                          <input type="checkbox" id="SaltCured" v-model="pokemon2.isSaltCure"
                            class="el-radio-button__original-radio radio_btn" />
                          <span class="el-radio-button__inner">盐腌</span>
                        </label>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item>
                      <div>
                        <el-radio-group v-model="field.attackerSide.spikes">
                          <el-radio-button :label="0">撒菱</el-radio-button>
                          <el-radio-button :label="1" />
                          <el-radio-button :label="2" />
                          <el-radio-button :label="3" />
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item class="right">
                      <div>
                        <el-radio-group v-model="field.defenderSide.spikes">
                          <el-radio-button :label="3" />
                          <el-radio-button :label="2" />
                          <el-radio-button :label="1" />
                          <el-radio-button :label="0">撒菱</el-radio-button>
                        </el-radio-group>
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </template>
            <div>
              {{ kochance }}
            </div>
            <div>
              {{ damage }}
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<style scoped>
.input_btn:checked+label {
  --el-button-text-color: var(--el-color-white);
  --el-button-bg-color: var(--el-color-primary);
  --el-button-border-color: var(--el-color-primary);
  --el-button-outline-color: var(--el-color-primary-light-5);
  --el-button-active-color: var(--el-color-primary-dark-2);
  --el-button-hover-text-color: var(--el-color-white);
  --el-button-hover-link-text-color: var(--el-color-primary-light-5);
  --el-button-hover-bg-color: var(--el-color-primary-light-3);
  --el-button-hover-border-color: var(--el-color-primary-light-3);
  --el-button-active-bg-color: var(--el-color-primary-dark-2);
  --el-button-active-border-color: var(--el-color-primary-dark-2);
  --el-button-disabled-text-color: var(--el-color-white);
  --el-button-disabled-bg-color: var(--el-color-primary-light-5);
  --el-button-disabled-border-color: var(--el-color-primary-light-5);
}

.radio_btn:checked+label {
  color: var(--el-radio-button-checked-text-color, var(--el-color-white));
  background-color: var(--el-radio-button-checked-bg-color, var(--el-color-primary));
  border-color: var(--el-radio-button-checked-border-color, var(--el-color-primary));
  box-shadow: -1px 0 0 0 var(--el-radio-button-checked-border-color, var(--el-color-primary));
}

.el-card {
  margin-bottom: 12px;
}

.card-header {
  text-align: center;
}

.el-select {
  width: 100%;
}

.stats {
  text-align: center;
}

.el-form-item {
  margin-bottom: 8px
}

.center {
  display: flex;
  width: 100%;
  justify-content: center;
}

.between {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.right {
  float: right;
}

.vertical {
  flex-flow: column;
}

.btn-size {
  width: 100px;
  height: 14px;
}

.hide {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>