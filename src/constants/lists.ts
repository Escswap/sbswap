// the Uniswap Default token list lives here
// export const DEFAULT_TOKEN_LIST_URL = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
// export const DEFAULT_TOKEN_LIST_URL = 'https://raw.githubusercontent.com/tokencontent/tokenlist/main/token.json'
// export const LOCAL_TOKEN_LIST = '../../localtoken.json'
// export const DEFAULT_LIST_OF_LISTS: string[] = [
//   DEFAULT_TOKEN_LIST_URL,
//   LOCAL_TOKEN_LIST
// ]
export const BEP20_LIST = 'https://raw.githubusercontent.com/tokencontent/tokenlist/main/token.json'
const bogged = 'https://raw.githubusercontent.com/tokencontent/tokenlist/main/boggedtokens.json'
// export const UNI_EXTENDED_LIST = 'https://extendedtokens.uniswap.org/'
const UNI_UNSUPPORTED_LIST = 'https://extendedtokens.uniswap.org/'
// const AAVE_LIST = 'tokenlist.aave.eth'
const BA_LIST = 'wrapped.tokensoft.eth'
// const CMC_ALL_LIST = 'https://api.coinmarketcap.com/data-api/v3/uniswap/all.json'
// const COINGECKO_LIST = 'https://tokens.coingecko.com/uniswap/all.json'
// const COMPOUND_LIST = 'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json'
// const GEMINI_LIST = 'https://www.gemini.com/uniswap/manifest.json'
// const KLEROS_LIST = 't2crtokens.eth'
// const ROLL_LIST = 'https://app.tryroll.com/tokens.json'
// const SET_LIST = 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json'
// const WRAPPED_LIST = 'wrapped.tokensoft.eth'

// export const OPTIMISM_LIST = 'https://static.optimism.io/optimism.tokenlist.json'
// export const ARBITRUM_LIST = 'https://bridge.arbitrum.io/token-list-42161.json'
// export const CELO_LIST = 'https://celo-org.github.io/celo-token-list/celo.tokenlist.json'

export const UNSUPPORTED_LIST_URLS: string[] = [BA_LIST, UNI_UNSUPPORTED_LIST]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = [BEP20_LIST,bogged]
export const DEFAULT_INACTIVE_LIST_URLS: string[] = [
  // UNI_EXTENDED_LIST,
  // COMPOUND_LIST,
  // AAVE_LIST,
  // CMC_ALL_LIST,
  // COINGECKO_LIST,
  // KLEROS_LIST,
  // GEMINI_LIST,
  // WRAPPED_LIST,
  // SET_LIST,
  // ROLL_LIST,
  // ARBITRUM_LIST,
  // OPTIMISM_LIST,
  // CELO_LIST,
  BEP20_LIST,
  bogged,
  ...UNSUPPORTED_LIST_URLS,
]

export const DEFAULT_LIST_OF_LISTS: string[] = [...DEFAULT_ACTIVE_LIST_URLS, ...DEFAULT_INACTIVE_LIST_URLS]