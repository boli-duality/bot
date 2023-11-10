import { definePreset } from 'unocss'

export default definePreset(() => {
  return {
    name: 'boli-preset',
    rules: [
      [/^m([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ margin: num + (unit || 'px') })],
      [/^mt([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-top': num + (unit || 'px') })],
      [/^ml([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-left': num + (unit || 'px') })],
      [/^mr([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-right': num + (unit || 'px') })],
      [/^mb([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'margin-bottom': num + (unit || 'px') })],
      [/^p([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ padding: num + (unit || 'px') })],
      [/^pt([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-top': num + (unit || 'px') })],
      [/^pl([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-left': num + (unit || 'px') })],
      [/^pr([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-right': num + (unit || 'px') })],
      [/^pb([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'padding-bottom': num + (unit || 'px') })],
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
      [/^fz([\.\d]+)(\D*)$/, ([_, num, unit]) => ({ 'font-size': num + (unit || 'px') })],
    ],
  }
})
