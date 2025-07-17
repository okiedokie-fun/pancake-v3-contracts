import type { NetworkUserConfig } from 'hardhat/types'

export const hyperevm: NetworkUserConfig = {
  url: 'https://rpc.hyperliquid.xyz/evm',
  chainId: 999,
  accounts: [process.env.KEY_MAINNET!],
}
