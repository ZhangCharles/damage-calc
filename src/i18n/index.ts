import { createI18n } from 'vue-i18n'

import zhCN from './langs/zh_cn.json'

const i18n = createI18n({
  locale: "zhCN",
  messages: {
    zhCN
  },
  silentTranslationWarn: true,
  missingWarn: false
})

export default i18n