#!/usr/bin/env zx
// import 'zx/globals'

const networks = {
  eth: 'eth',
  goerli: 'goerli',
  bscMainnet: 'bscMainnet',
  bscTestnet: 'bscTestnet',
  hardhat: 'hardhat',
  hyperevm: 'hyperevm',
  xlayer: 'xlayer',
}

let network = process.env.NETWORK
console.log(network, 'network')
if (!network || !networks[network]) {
  throw new Error(`env NETWORK: ${network}`)
}

await $`yarn workspace @pancakeswap/smart-router run hardhat run scripts/deploy2.ts --network ${network}`

console.log(chalk.blue('Done!'))

const r = await fs.readJson(`./projects/router/deployments/${network}.json`)

const addresses = {
  ...r,
}

console.log(chalk.blue('Writing to file...'))
console.log(chalk.yellow(JSON.stringify(addresses, null, 2)))

fs.writeJson(`./deployments/${network}-router.json`, addresses, { spaces: 2 })
