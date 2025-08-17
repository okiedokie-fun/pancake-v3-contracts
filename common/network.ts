import type { NetworkUserConfig } from 'hardhat/types'

export const hyperevm: NetworkUserConfig = {
  url: 'https://rpc.hyperliquid.xyz/evm',
  chainId: 999,
  accounts: [process.env.KEY_MAINNET!],
}

export const xlayer: NetworkUserConfig = {
  url: 'https://xlayerrpc.okx.com',
  chainId: 196,
  accounts: [process.env.KEY_XLAYER!],
}
