// import { BSC, Currency, BSC, Token } from '@sbswap/sdk'
import { BSC, Currency, Token } from '@sbswap/sdk'

export function currencyId(currency: Currency): string {
  // if (currency === BSC) return 'BNB'
  if (currency === BSC) return 'BNB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
