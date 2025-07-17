#!/usr/bin/env zx
// import 'zx/globals'

const networks = {
  eth: 'eth',
  goerli: 'goerli',
  bscMainnet: 'bscMainnet',
  bscTestnet: 'bscTestnet',
  hardhat: 'hardhat',
  hyperevm: 'hyperevm',
}

let network = process.env.NETWORK
console.log(network, 'network')
if (!network || !networks[network]) {
  throw new Error(`env NETWORK: ${network}`)
}


await $`yarn workspace @pancakeswap/masterchef-v3 run hardhat run scripts/deploy2.ts --network ${network}`

await $`yarn workspace @pancakeswap/v3-lm-pool run hardhat run scripts/deploy2.ts --network ${network}`

console.log(chalk.blue('Done!'))

const m = await fs.readJson(`./projects/masterchef-v3/deployments/${network}.json`)
const l = await fs.readJson(`./projects/v3-lm-pool/deployments/${network}.json`)

const addresses = {
  ...m,
  ...l,
}

console.log(chalk.blue('Writing to file...'))
console.log(chalk.yellow(JSON.stringify(addresses, null, 2)))

fs.writeJson(`./deployments/${network}-farm.json`, addresses, { spaces: 2 })
