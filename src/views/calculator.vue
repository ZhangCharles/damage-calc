<script setup lang="ts">
import { ref, watch } from "vue"
import icon from "@/assets/icon.vue"
import { ElMessage } from "element-plus"

import { performCalculations } from "@/components/damageResult"
import { ExportPokemon, addSets } from "@/components/exportPokemon"
import { LEARNSETS } from "@/components/getLearnsets"
import { PokeDex } from "@/stores/pokedex"
import { Others } from "@/stores/others"

const gen = ref(9)
const pokedex = PokeDex().Pokedex
const types = Others().Types
const items = Others().Items.filter((item: any) => {
  return item.isNonstandard !== "Past"
})
const natures: any = Others().Natures
const status = Others().Status
const terrain = Others().Terrain
const weather = Others().Weather
const pm1: any = ref({
  baseStats: {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
})
const pm2: any = ref({
  baseStats: {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  }
})
const select_pm1: any = ref({
  name: 'Charizard',
  level: 50,
  teraType: '',
  ability: '',
  abilityOn: false,
  gender: '',
  nature: '',
  item: '',
  status: undefined,
  toxicCounter: "",
  curHP: 100,
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
    hp: undefined,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  },
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
  ]
})
const select_pm2: any = ref({
  name: 'Charizard',
  level: 50,
  teraType: '',
  ability: '',
  abilityOn: false,
  gender: '',
  nature: '',
  item: '',
  status: undefined,
  toxicCounter: 0,
  curHP: 100,
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
    hp: undefined,
    atk: 0,
    def: 0,
    spa: 0,
    spd: 0,
    spe: 0
  },
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
  ]
})
const field: any = ref({
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
})
const moveslist1: any = ref([
  { name: '' }
])
const moveslist2: any = ref([
  { name: '' }
])
const result: any = ref({
  0: {
    0: {
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
    }
  },
  1: {
    0: {
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
    }
  }
},)
const curHp1Percentage: any = ref(100)
const curHp2Percentage: any = ref(100)
const infoshow = ref(false)
const HPcolor = [
  { color: 'red', percentage: 20 },
  { color: 'yellow', percentage: 50 },
  { color: 'green', percentage: 100 }
]

function getPMid(newVal: any) {
  return (Object.entries(pokedex).find(([, value]) => {
    if (newVal.baseSpecies != undefined) {
      return value.name === newVal.baseSpecies
    } else {
      return value.name === newVal.name
    }
  }
  ) as any)[0]
}
function getPM(newVal: any) {
  return (Object.entries(pokedex).find(([, value]) => 
    value.name === newVal
  ) as any)[1]
}

// Functions
function calculate() {
  return performCalculations(gen.value, select_pm1.value, select_pm2.value, field.value)
}

watch(pm1, (newVal, oldVal) => {
  console.log(newVal)
  try {
    const id: any = getPMid(newVal)
    select_pm1.value.name = newVal.name
    moveslist1.value = LEARNSETS(gen.value, id)
    result.value = calculate()
    select_pm1.value.curHP = result.value[0][0].attacker.stats.hp
    console.log(result.value)
  } catch (error: any) {
    ElMessage({
      message: '所选宝可梦不合法',
      type: 'error'
    })
    pm1.value = oldVal
  }
})
watch(pm2, (newVal, oldVal) => {
  try {
    const id: any = getPMid(newVal)
    select_pm2.value.name = newVal.name
    moveslist2.value = LEARNSETS(gen.value, id)
    result.value = calculate()
    select_pm2.value.curHP = result.value[0][0].defender.stats.hp
  } catch (error) {
    ElMessage({
      message: '所选宝可梦不合法',
      type: 'error'
    })
    pm2.value = oldVal
  }
})

watch(() => select_pm1,
  (newVal) => {
    try {
      if (newVal.value.status !== "tox") {
        select_pm1.value.toxicCounter = 0
      } else {
        select_pm1.value.toxicCounter = newVal.value.toxicCounter
      }
      if (newVal.value.ability === "") {
        select_pm1.value.abilityOn = false
      } else {
        select_pm1.value.abilityOn = true
      }
      curHp1Percentage.value = Number((100 * select_pm1.value.curHP / result.value[0][0].attacker.stats.hp).toFixed(1))
      result.value = calculate()
      console.log(result.value)
    } catch (error) {

    }
  },
  { deep: true }
)

watch(() => select_pm2,
  (newVal) => {
    try {
      if (newVal.value.status !== "tox") {
        select_pm2.value.toxicCounter = ""
      } else {
        select_pm2.value.toxicCounter = newVal.value.toxicCounter
      }
      if (newVal.value.ability === "") {
        select_pm2.value.abilityOn = false
      } else {
        select_pm2.value.abilityOn = true
      }
      curHp2Percentage.value = Number((100 * select_pm2.value.curHP / result.value[0][0].defender.stats.hp).toFixed(1))
      result.value = calculate()
    } catch (error) {

    }
  },
  { deep: true }
)

watch(() => field,
  (newVal) => {
    result.value = calculate()
  },
  { deep: true }
)

watch(result, (newVal, oldVal) => {
  if (oldVal[0][0].attacker.stats.hp !== newVal[0][0].attacker.stats.hp) {
    select_pm1.value.curHP = newVal[0][0].attacker.stats.hp
  }
  if (oldVal[0][0].defender.stats.hp !== newVal[0][0].defender.stats.hp) {
    select_pm2.value.curHP = newVal[0][0].defender.stats.hp
  }
  for (var i = 0; i < 4; i++) {
    select_pm1.value.moves[i].isCrit = result.value[0][0].attacker.moves[i].isCrit
    select_pm2.value.moves[i].isCrit = result.value[0][0].defender.moves[i].isCrit
  }
})

pm1.value = pokedex.charizard
pm2.value = pokedex.charizard

const damageinfomation: any = ref()
function damageinfo(value1: any, value2: any) {
  if (infoshow.value == false) {
    infoshow.value = true
  } else {
    infoshow.value = false
  }
  damageinfomation.value = result.value[value1][value2]
}

const PSinfo1: any = ref('')
const PSinfo2: any = ref('')
const importpm1 = ref(false)
const importpm2 = ref(false)
function ExportInfo(index: any) {
  if (index == 1) {
    importpm1.value = true
    PSinfo1.value = ExportPokemon(gen.value, select_pm1.value)
  } else if (index == 2) {
    importpm2.value = true
    PSinfo2.value = ExportPokemon(gen.value, select_pm2.value)
  }
}
function ImPortInfo(index: any) {
  try {
    if (index == 1) {
      var pokemon1: any = addSets(PSinfo1.value)
      pm1.value = getPM(pokemon1.name)
      select_pm1.value.name = pokemon1.name
      select_pm1.value.ability = pokemon1.ability
      select_pm1.value.nature = pokemon1.nature
      select_pm1.value.level = pokemon1.level
      select_pm1.value.teraType = pokemon1.teraType
      select_pm1.value.item = pokemon1.item
      for (var i = 0; i < 4; i++) {
        select_pm1.value.moves[i].name = pokemon1.moves[i]
      }
      for (var stat in pokemon1.evs) {
        select_pm1.value.evs[stat] = pokemon1.evs[stat] ? pokemon1.evs[stat] : 0
      }
      for (var stat in pokemon1.ivs) {
        select_pm1.value.ivs[stat] = pokemon1.ivs[stat] ?? 31
      }
      importpm1.value = false
    } else if (index == 2) {
      var pokemon2: any = addSets(PSinfo2.value)
      pm2.value = getPM(pokemon2.name)
      select_pm2.value.name = pokemon2.name
      select_pm2.value.ability = pokemon2.ability
      select_pm2.value.nature = pokemon2.nature
      select_pm2.value.level = pokemon2.level
      select_pm2.value.teraType = pokemon2.teraType
      select_pm2.value.item = pokemon2.item
      for (var i = 0; i < 4; i++) {
        select_pm2.value.moves[i].name = pokemon2.moves[i]
      }
      for (var stat in pokemon2.evs) {
        select_pm2.value.evs[stat] = pokemon2.evs[stat] ? pokemon2.evs[stat] : 0
      }
      for (var stat in pokemon2.ivs) {
        select_pm2.value.ivs[stat] = pokemon2.ivs[stat] ?? 31
      }
      importpm2.value = false
    }
  } catch (e) {
    ElMessage({
      message: '导入失败',
      type: 'error'
    })
    console.log(e)
  }
}

</script>

<template>
  <el-row>
    <el-col class="el-row-bottom" :span="24">
      <div class="main-box">
        <el-row>
          <el-col class="el-row-bottom" :span="4">
            <el-space>
              <el-radio-group v-model="field.gameType">
                <el-radio-button label="Singles">单打</el-radio-button>
                <el-radio-button label="Doubles">双打</el-radio-button>
              </el-radio-group>
            </el-space>
          </el-col>
          <el-col :span="4">
            <el-space>
              <div class="label">场地</div>
              <el-select v-model="field.terrain" clearable filterable placeholder="场地">
                <el-option v-for="(index, value) in terrain" :key="value" :label="index" :value="value" />
              </el-select>
            </el-space>
          </el-col>
          <el-col :span="4">
            <el-space>
              <div class="label">天气</div>
              <el-select v-model="field.weather" clearable filterable placeholder="天气">
                <el-option v-for="(index, value) in weather" :key="value" :label="index" :value="value" />
              </el-select>
            </el-space>
          </el-col>
          <el-col class="el-row-bottom" :span="16">
            <el-space>
              <el-checkbox-button v-model="field.isBeadsOfRuin" label="灾祸之玉" />
              <el-checkbox-button v-model="field.isSwordOfRuin" label="灾祸之剑" />
              <el-checkbox-button v-model="field.isTabletsOfRuin" label="灾祸之简" />
              <el-checkbox-button v-model="field.isVesselOfRuin" label="灾祸之鼎" />
              <el-checkbox-button v-model="field.isMagicRoom" label="魔法空间" />
              <el-checkbox-button v-model="field.isWonderRoom" label="奇妙空间" />
              <el-checkbox-button v-model="field.isGravity" label="重力" />
            </el-space>
          </el-col>
        </el-row>
      </div>
      <div class="main-box">
        <div class="pm-box">
          <el-space wrap>
            <el-checkbox-button v-model="field.attackerSide.isReflect" label="反射壁" />
            <el-checkbox-button v-model="field.attackerSide.isLightScreen" label="光墙" />
            <el-checkbox-button v-model="field.attackerSide.isAuroraVeil" label="极光幕" />
            <el-checkbox-button v-model="field.attackerSide.isHelpingHand" label="帮助" />
            <el-checkbox-button v-model="field.attackerSide.isTailwind" label="顺风" />
            <el-checkbox-button v-model="field.attackerSide.isFriendGuard" label="友情防守" />
            <el-checkbox-button v-model="field.attackerSide.isProtected" label="保护" />
            <el-checkbox-button v-model="field.attackerSide.isPowerSpot" label="能量点" />
            <el-checkbox-button v-model="field.attackerSide.isSR" label="隐形岩" />
            <el-checkbox-button v-model="field.attackerSide.isSeeded" label="寄生种子" />
            <el-checkbox-button v-model="field.attackerSide.isSaltCure" label="盐腌" />
            <el-radio-group v-model="field.attackerSide.spikes">
              <el-radio-button :label="0">撒菱</el-radio-button>
              <el-radio-button :label="1" />
              <el-radio-button :label="2" />
              <el-radio-button :label="3" />
            </el-radio-group>
            <el-button @click="ExportInfo(1)">导入/导出</el-button>
          </el-space>
        </div>
        <div class="pm-box">
          <el-space wrap>
            <el-checkbox-button v-model="field.defenderSide.isReflect" label="反射壁" />
            <el-checkbox-button v-model="field.defenderSide.isLightScreen" label="光墙" />
            <el-checkbox-button v-model="field.defenderSide.isAuroraVeil" label="极光幕" />
            <el-checkbox-button v-model="field.defenderSide.isHelpingHand" label="帮助" />
            <el-checkbox-button v-model="field.defenderSide.isTailwind" label="顺风" />
            <el-checkbox-button v-model="field.defenderSide.isFriendGuard" label="友情防守" />
            <el-checkbox-button v-model="field.defenderSide.isProtected" label="保护" />
            <el-checkbox-button v-model="field.defenderSide.isPowerSpot" label="能量点" />
            <el-checkbox-button v-model="field.defenderSide.isSR" label="隐形岩" />
            <el-checkbox-button v-model="field.defenderSide.isSeeded" label="寄生种子" />
            <el-checkbox-button v-model="field.defenderSide.isSaltCure" label="盐腌" />
            <el-radio-group v-model="field.defenderSide.spikes">
              <el-radio-button :label="0">撒菱</el-radio-button>
              <el-radio-button :label="1" />
              <el-radio-button :label="2" />
              <el-radio-button :label="3" />
            </el-radio-group>
            <el-button @click="ExportInfo(2)">导入/导出</el-button>
          </el-space>
        </div>
      </div>
    </el-col>
    <el-col :span="24">
      <div class="main-box">
        <div class="pm-box">
          <el-row>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <el-select v-model="pm1" value-key="name" filterable placeholder="宝可梦" style="width: 100%">
                  <el-option v-for="item in pokedex" :key="item.name" :label="$t(item.name)" :value="item" />
                </el-select>
                <icon v-for="item in pm1.types" style="height: 20px;" :name="item"></icon>
              </el-space>
            </el-col>
            <el-col :span="6">
              <el-space>
                <el-select v-model="select_pm1.teraType" clearable placeholder="太晶属性" style="width: 100%">
                  <el-option v-for="item in types" :key="item" :label="$t(item)" :value="item" />
                </el-select>
                <icon v-if="select_pm1.teraType" style="height: 20px;" :name="select_pm1.teraType"></icon>
              </el-space>
            </el-col>
            <el-col :span="6">
              <el-space>
                <span class="label">等级</span>
                <el-input-number v-model="select_pm1.level" :min="1" :max="100" :controls="false" style="width: 100%" />
              </el-space>
            </el-col>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <span class="label">特性</span>
                <el-select v-model="select_pm1.ability" clearable placeholder="特性">
                  <el-option v-for="item in pm1.abilities" :key="item" :label="$t(item)" :value="item" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12">
              <el-space>
                <span class="label">性格</span>
                <el-select v-model="select_pm1.nature" placeholder="性格">
                  <el-option v-for="item in natures" :key="item.name" :label="$t(item.name)" :value="item.name">
                    <span style="float: left">{{ $t(item.name) }}</span>
                    <span style="float: right;color: var(--el-text-color-secondary); font-size: 14px;"
                      v-if="item.plus">+{{ item.plus }} -{{ item.minus }}</span>
                  </el-option>
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <span class="label">道具</span>
                <el-select v-model="select_pm1.item" filterable clearable placeholder="道具">
                  <el-option v-for="item in items" :key="item.name" :label="$t(item.name)" :value="item.name" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12">
              <el-space>
                <span class="label">状态</span>
                <el-select v-model="select_pm1.status" clearable placeholder="异常状态">
                  <el-option v-for="(value, key) in status" :key="value" :label="$t(key)" :value="value" />
                </el-select>
                <el-select v-if="select_pm1.status == 'tox'" v-model="select_pm1.toxicCounter">
                  <el-option v-for="n in 15" :key="n" :label="n" :value="n" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="8" class="el-row-bottom">
              <el-space>
                <span class="label">血量</span>
                <el-input-number v-model="select_pm1.curHP" :min="1" :max="result[0][0].attacker.stats.hp"
                  :controls="false" style="width: 60px" />
                <span class="label">/ {{ result[0][0].attacker.stats.hp }}</span>
              </el-space>
            </el-col>
            <el-col :span="16" class="el-row-bottom">
              <el-progress :percentage="curHp1Percentage" :color="HPcolor" style="height: 100%;" />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4" class="el-row-bottom">
              <el-space direction="vertical">
                <br />
                <div class="tablelabel">H P</div>
                <div class="tablelabel">攻击</div>
                <div class="tablelabel">物防</div>
                <div class="tablelabel">特攻</div>
                <div class="tablelabel">特防</div>
                <div class="tablelabel">速度</div>
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">种族值</div>
                <el-input-number v-model="pm1.baseStats.hp" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm1.baseStats.atk" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm1.baseStats.def" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm1.baseStats.spa" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm1.baseStats.spd" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm1.baseStats.spe" size="small" :controls="false" :disabled="true" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">个体值</div>
                <el-input-number v-model="select_pm1.ivs.hp" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm1.ivs.atk" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm1.ivs.def" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm1.ivs.spa" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm1.ivs.spd" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm1.ivs.spe" size="small" :controls="false" :min="0" :max="31" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">努力值</div>
                <el-input-number v-model="select_pm1.evs.hp" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm1.evs.atk" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm1.evs.def" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm1.evs.spa" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm1.evs.spd" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm1.evs.spe" size="small" :controls="false" :min="0" :max="252" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">能力变化</div>
                <el-input-number v-model="select_pm1.boosts.hp" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="select_pm1.boosts.atk" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm1.boosts.def" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm1.boosts.spa" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm1.boosts.spd" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm1.boosts.spe" size="small" :controls="false" :min="-6" :max="6" />
              </el-space>
            </el-col>
            <el-col :span="4" class="el-row-bottom">
              <el-space direction="vertical">
                <br />
                <div class="tablelabel">{{ result[0][0].attacker.stats.hp }}</div>
                <div class="tablelabel">{{ result[0][0].attacker.stats.atk }}</div>
                <div class="tablelabel">{{ result[0][0].attacker.stats.def }}</div>
                <div class="tablelabel">{{ result[0][0].attacker.stats.spa }}</div>
                <div class="tablelabel">{{ result[0][0].attacker.stats.spd }}</div>
                <div class="tablelabel">{{ result[0][0].attacker.stats.spe }}</div>
              </el-space>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm1.moves[0].name" filterable clearable placeholder="技能1"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm1.moves[0].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[0][0]" class="moveDesc" @click="damageinfo(0, 0)">{{ result[0][0].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm1.moves[1].name" filterable clearable placeholder="技能2"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm1.moves[1].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[0][1]" class="moveDesc" @click="damageinfo(0, 1)">{{ result[0][1].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm1.moves[2].name" filterable clearable placeholder="技能3"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm1.moves[2].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[0][2]" class="moveDesc" @click="damageinfo(0, 2)">{{ result[0][2].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm1.moves[3].name" filterable clearable placeholder="技能4"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm1.moves[3].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[0][3]" class="moveDesc" @click="damageinfo(0, 3)">{{ result[0][3].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <div class="pm-box">
          <el-row>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <el-select v-model="pm2" value-key="name" filterable placeholder="宝可梦" style="width: 100%">
                  <el-option v-for="item in pokedex" :key="item.name" :label="$t(item.name)" :value="item" />
                </el-select>
                <icon v-for="item in pm2.types" style="height: 20px;" :name="item"></icon>
              </el-space>
            </el-col>
            <el-col :span="6">
              <el-space>
                <el-select v-model="select_pm2.teraType" clearable placeholder="太晶属性" style="width: 100%">
                  <el-option v-for="item in types" :key="item" :label="$t(item)" :value="item" />
                </el-select>
                <icon v-if="select_pm2.teraType" style="height: 20px;" :name="select_pm2.teraType"></icon>
              </el-space>
            </el-col>
            <el-col :span="6">
              <el-space>
                <span class="label">等级</span>
                <el-input-number v-model="select_pm2.level" :min="1" :max="100" :controls="false" style="width: 100%" />
              </el-space>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <span class="label">特性</span>
                <el-select v-model="select_pm2.ability" clearable placeholder="特性">
                  <el-option v-for="item in pm2.abilities" :key="item" :label="$t(item)" :value="item" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12">
              <el-space>
                <span class="label">性格</span>
                <el-select v-model="select_pm2.nature" placeholder="性格">
                  <el-option v-for="item in natures" :key="item.name" :label="$t(item.name)" :value="item.name">
                    <span style="float: left">{{ $t(item.name) }}</span>
                    <span style="float: right;color: var(--el-text-color-secondary); font-size: 14px;"
                      v-if="item.plus">+{{ item.plus }} -{{ item.minus }}</span>
                  </el-option>
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12" class="el-row-bottom">
              <el-space>
                <span class="label">道具</span>
                <el-select v-model="select_pm2.item" filterable clearable placeholder="道具">
                  <el-option v-for="item in items" :key="item.name" :label="$t(item.name)" :value="item.name" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="12">
              <el-space>
                <span class="label">状态</span>
                <el-select v-model="select_pm2.status" clearable placeholder="异常状态">
                  <el-option v-for="(value, key) in status" :key="value" :label="$t(key)" :value="value" />
                </el-select>
                <el-select v-if="select_pm2.status == 'tox'" v-model="select_pm2.toxicCounter">
                  <el-option v-for="n in 15" :key="n" :label="n" :value="n" />
                </el-select>
              </el-space>
            </el-col>
            <el-col :span="8" class="el-row-bottom">
              <el-space>
                <span class="label">血量</span>
                <el-input-number v-model="select_pm2.curHP" :min="1" :max="result[0][0].defender.stats.hp"
                  :controls="false" style="width: 60px" />
                <span class="label">/ {{ result[0][0].defender.stats.hp }}</span>
              </el-space>
            </el-col>
            <el-col :span="16" class="el-row-bottom">
              <el-progress :percentage="curHp2Percentage" :color="HPcolor" style="height: 100%;" />
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4" class="el-row-bottom">
              <el-space direction="vertical">
                <br />
                <div class="tablelabel">H P</div>
                <div class="tablelabel">攻击</div>
                <div class="tablelabel">物防</div>
                <div class="tablelabel">特攻</div>
                <div class="tablelabel">特防</div>
                <div class="tablelabel">速度</div>
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">种族值</div>
                <el-input-number v-model="pm2.baseStats.hp" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm2.baseStats.atk" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm2.baseStats.def" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm2.baseStats.spa" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm2.baseStats.spd" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="pm2.baseStats.spe" size="small" :controls="false" :disabled="true" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">个体值</div>
                <el-input-number v-model="select_pm2.ivs.hp" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm2.ivs.atk" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm2.ivs.def" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm2.ivs.spa" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm2.ivs.spd" size="small" :controls="false" :min="0" :max="31" />
                <el-input-number v-model="select_pm2.ivs.spe" size="small" :controls="false" :min="0" :max="31" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">努力值</div>
                <el-input-number v-model="select_pm2.evs.hp" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm2.evs.atk" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm2.evs.def" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm2.evs.spa" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm2.evs.spd" size="small" :controls="false" :min="0" :max="252" />
                <el-input-number v-model="select_pm2.evs.spe" size="small" :controls="false" :min="0" :max="252" />
              </el-space>
            </el-col>
            <el-col :span="4">
              <el-space direction="vertical">
                <div class="tabletoplabel">能力变化</div>
                <el-input-number v-model="select_pm2.boosts.hp" size="small" :controls="false" :disabled="true" />
                <el-input-number v-model="select_pm2.boosts.atk" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm2.boosts.def" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm2.boosts.spa" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm2.boosts.spd" size="small" :controls="false" :min="-6" :max="6" />
                <el-input-number v-model="select_pm2.boosts.spe" size="small" :controls="false" :min="-6" :max="6" />
              </el-space>
            </el-col>
            <el-col :span="4" class="el-row-bottom">
              <el-space direction="vertical">
                <br />
                <div class="tablelabel">{{ result[0][0].defender.stats.hp }}</div>
                <div class="tablelabel">{{ result[0][0].defender.stats.atk }}</div>
                <div class="tablelabel">{{ result[0][0].defender.stats.def }}</div>
                <div class="tablelabel">{{ result[0][0].defender.stats.spa }}</div>
                <div class="tablelabel">{{ result[0][0].defender.stats.spd }}</div>
                <div class="tablelabel">{{ result[0][0].defender.stats.spe }}</div>
              </el-space>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm2.moves[0].name" filterable clearable placeholder="技能1"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm2.moves[0].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[1][0]" class="moveDesc" @click="damageinfo(1, 0)">{{ result[1][0].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm2.moves[1].name" filterable clearable placeholder="技能2"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm2.moves[1].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[1][1]" class="moveDesc" @click="damageinfo(1, 1)">{{ result[1][1].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24" class="el-row-bottom">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm2.moves[2].name" filterable clearable placeholder="技能3"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm2.moves[2].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[1][2]" class="moveDesc" @click="damageinfo(1, 2)">{{ result[1][2].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="24">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-space>
                    <el-select v-model="select_pm2.moves[3].name" filterable clearable placeholder="技能4"
                      value-key="name">
                      <el-option v-for="item in moveslist1" :key="item.name" :label="$t('Moves.' + item.name)"
                        :value="item.name">
                        <span style="float: left">{{ $t('Moves.' + item.name) }}</span>
                        <span
                          style="float: right;color: var(--el-text-color-secondary); font-size: 14px; height: 100%; display: flex;"
                          v-if="item.type">
                          <icon style="width: 20px" :name="item.type"></icon>
                        </span>
                      </el-option>
                    </el-select>
                    <el-checkbox-button v-model="select_pm2.moves[3].isCrit" label="Ct" />
                  </el-space>
                </el-col>
                <el-col :span="12">
                  <div v-if="result[1][3]" class="moveDesc" @click="damageinfo(1, 3)">{{ result[1][3].moveDesc }}</div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-dialog v-model="infoshow">
    <div v-if="damageinfomation">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-space alignment="flex-end" style="width: 100%; justify-content: space-between;">
            <h1>{{ $t(damageinfomation.attacker.name) }}</h1>
            <div>等级: {{ damageinfomation.attacker.level }}</div>
          </el-space>
          <el-divider style="margin: 8px 0;" />
          <div style="line-height: 2em;">
            <el-row>
              <el-col :span="12">
                <el-space>
                  <div>属性: </div>
                  <div v-for="item in damageinfomation.attacker.types">{{ $t(item) }}</div>
                </el-space>
              </el-col>
              <el-col :span="12">
                <el-space>
                  <div>钛晶属性: </div>
                  <div v-if="damageinfomation.attacker.teraType">{{ $t(damageinfomation.attacker.teraType) }}</div>
                  <div v-else>-</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>特性: </div>
                  <div>{{ $t(damageinfomation.attacker.ability) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>性格: </div>
                  <div>{{ $t(damageinfomation.attacker.nature) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>道具: </div>
                  <div>{{ $t(damageinfomation.attacker.item) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>攻击努力值: </div>
                  <div>{{ damageinfomation.rawDesc.attackEVs }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>能力变化: </div>
                  <div>{{ damageinfomation.rawDesc.attackBoost }}</div>
                </el-space>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-space alignment="flex-end" style="width: 100%; justify-content: space-between;">
            <h1>{{ $t(damageinfomation.defender.name) }}</h1>
            <div>等级: {{ damageinfomation.defender.level }}</div>
          </el-space>
          <el-divider style="margin: 8px 0;" />
          <div style="line-height: 2em;">
            <el-row>
              <el-col :span="12">
                <el-space>
                  <div>属性: </div>
                  <div v-for="item in damageinfomation.defender.types">{{ $t(item) }}</div>
                </el-space>
              </el-col>
              <el-col :span="12">
                <el-space>
                  <div>钛晶属性: </div>
                  <div v-if="damageinfomation.defender.teraType">{{ $t(damageinfomation.defender.teraType) }}</div>
                  <div v-else>-</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>特性: </div>
                  <div>{{ $t(damageinfomation.defender.ability) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>性格: </div>
                  <div>{{ $t(damageinfomation.defender.nature) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>道具: </div>
                  <div>{{ $t(damageinfomation.defender.item) }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>攻击努力值: </div>
                  <div>{{ damageinfomation.rawDesc.defenseEVs }}</div>
                </el-space>
              </el-col>
              <el-col>
                <el-space>
                  <div>能力变化: </div>
                  <div>{{ damageinfomation.rawDesc.defenseBoost }}</div>
                </el-space>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
      <el-divider style="margin: 8px 0;" />
      <el-row :gutter="20" v-if="damageinfomation.move.name" style="line-height: 2em;">
        <el-col>
          <h2>{{ $t('Moves.' + damageinfomation.move.name) }}</h2>
        </el-col>
        <el-col :span="6">
          <el-space>
            <div>属性: </div>
            <div>{{ $t(damageinfomation.move.type) }}</div>
          </el-space>
        </el-col>
        <el-col :span="6">
          <el-space>
            <div>分类: </div>
            <div>{{ $t(damageinfomation.move.category) }}</div>
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space>
            <div>伤害: </div>
            <div>{{ damageinfomation.move.bp }}</div>
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space>
            <div>击中要害: </div>
            <div v-if="damageinfomation.move.isCrit == true">是</div>
            <div v-if="damageinfomation.move.isCrit == false">否</div>
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space>
            <div>击中次数: </div>
            <div>{{ damageinfomation.move.hits }}</div>
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space>
            <div>造成伤害: </div>
            <div>{{ damageinfomation.range[0] }}</div>
            <div>-</div>
            <div>{{ damageinfomation.range[1] }}</div>
          </el-space>
        </el-col>
        <el-col :span="12">
          <el-space>
            <div>反伤(%): </div>
            <div>{{ damageinfomation.recoil.recoil[0] }}</div>
            <div>-</div>
            <div>{{ damageinfomation.recoil.recoil[1] }}</div>
          </el-space>
        </el-col>
        <el-col>
          <el-space v-if="damageinfomation.kochance">
            <div>击杀概率: </div>
            <div>{{ (damageinfomation.kochance.chance * 100).toFixed(1) }}%</div>
            <div>{{ damageinfomation.kochance.n }}回合击杀</div>
          </el-space>
        </el-col>
      </el-row>
    </div>
  </el-dialog>
  <el-dialog v-model="importpm1">
    <template #default>
      <el-input v-model="PSinfo1" autosize type="textarea" />
    </template>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="importpm1 = false">取消</el-button>
        <el-button type="primary" @click="ImPortInfo(1)">
          导入
        </el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog v-model="importpm2">
    <template #default>
      <el-input v-model="PSinfo2" autosize type="textarea" />
    </template>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="importpm2 = false">取消</el-button>
        <el-button type="primary" @click="ImPortInfo(2)">
          导入
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>
.el-row-bottom {
  margin-bottom: 16px;
}

.label {
  font-size: 14px;
  white-space: nowrap;
}

.pm-box {
  width: 428px;
}

.main-box {
  display: flex;
  justify-content: space-between;
}

.tablelabel {
  line-height: 24px;
  font-size: 14px;
}

.moveDesc {
  border: var(--el-border);
  border-radius: var(--el-border-radius-base);
  padding: 8px 15px;
  font-size: var(--el-font-size-base);
  line-height: 1;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: var(--el-transition-all);
  cursor: pointer;
  margin-right: 8px;
  overflow: hidden;
}

.moveDesc:hover {
  color: var(--el-color-primary);
}

.tabletoplabel {
  font-size: 14px;
}

.el-input-number--small {
  width: 58px;
}
</style>