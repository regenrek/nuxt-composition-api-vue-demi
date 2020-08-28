import { onGlobalSetup, provide } from '@nuxtjs/composition-api'
import { ThemeSymbol } from '@nujek/ui'
// import { useTailwindConfig } from '~/composables/useTailwindConfig'
export default ({ app }) => {
  onGlobalSetup(() => {
    const customTheme = {
      burger: {
        burgerX: '9px',
        burgerThickness: '3px',
        burgerColor: 'red',
        burgerSize: '50px'
      },
      colors: { intent: { primary: { base: 'red' } } }
    }

    provide(ThemeSymbol, customTheme)
  })
}
