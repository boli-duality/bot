import { definePreset } from 'unocss'

export default definePreset(() => {
  return {
    name: 'boli-preset',
    shortcuts: [
      // ['btn', ''],
    ],
    rules: [
      [/^m([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ margin: num + (unit || 'px') })],
      [/^mx([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ margin: `0 ${num + (unit || 'px')}` })],
      [/^my([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ margin: `${num + (unit || 'px')} 0` })],
      [/^mt([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-top': num + (unit || 'px') })],
      [/^ml([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-left': num + (unit || 'px') })],
      [/^mr([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-right': num + (unit || 'px') })],
      [/^mb([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-bottom': num + (unit || 'px') })],
      [/^p([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ padding: num + (unit || 'px') })],
      [/^pt([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-top': num + (unit || 'px') })],
      [/^pl([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-left': num + (unit || 'px') })],
      [/^pr([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-right': num + (unit || 'px') })],
      [/^pb([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-bottom': num + (unit || 'px') })],
      [/^w([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ width: num + (unit || 'px') })],
      [/^h([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ height: num + (unit || 'px') })],
      [/^rad([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'border-radius': num + (unit || 'px') })],
      [/^df$/, () => ({ display: 'flex' })],
      [/^dfc$/, () => ({ 'display': 'flex', 'flex-direction': 'column' })],
      [/^jcc$/, () => ({ 'justify-content': 'center' })],
      [/^jcsb$/, () => ({ 'justify-content': 'space-between' })],
      [/^jcsa$/, () => ({ 'justify-content': 'space-around' })],
      [/^jce$/, () => ({ 'justify-content': 'flex-end' })],
      [/^aic$/, () => ({ 'align-items': 'center' })],
      [/^ais$/, () => ({ 'align-items': 'flex-start' })],
      [/^aie$/, () => ({ 'align-items': 'flex-end' })],
      [/^oh$/, () => ({ overflow: 'hidden' })],
      [/^hidden$/, () => ({ display: 'none' })],
      [/^tac$/, () => ({ 'text-align': 'center' })],
      [/^tar$/, () => ({ 'text-align': 'right' })],
      [/^fz([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'font-size': num + (unit || 'px') })],
      [/^c-(.*)$/, ([_, color]) => ({ color })],
      [/^bg-(.*)$/, ([_, color]) => ({ 'background-color': color })],
    ],
  }
})
