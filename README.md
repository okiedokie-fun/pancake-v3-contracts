# Pancake V3


## Deployments

1. Add Key in `.env` file. It's a private key of the account that will deploy the contracts and should be gitignored.
2. bscTestnet `KEY_TESTNET` or bsc `KEY_MAINNET`
3. add `ETHERSCAN_API_KEY` in `.env` file. It's an API key for etherscan.
4. `yarn` in root directory
5. `NETWORK=$NETWORK yarn zx v3-deploy.mjs` where `$NETWORK` is either `eth`, `goerli`, `bscMainnet`, `bscTestnet` or `hardhat` (for local testing)
6. `NETWORK=$NETWORK yarn zx v3-verify.mjs` where `$NETWORK` is either `eth`, `goerli`, `bscMainnet`, `bscTestnet` or `hardhat` (for local testing)

## Verify on XLayer Chain

SmartRouter verify command:

```shell
 npx hardhat okverify --network xlayer 0xe9C0c63de104843a8F1DB2bB6BF69C85Ac18d821 0xF1cBfB1b12408dEDbA6Dcd7BB57730bAef6584fB 0x8a2FD21C69eBe59eEba17C8D6D4bD082c2BE16e0 0x3cEA59ae7CD3C1BEa32Ccc80F68Dd47576662c90 0x396eD8ba34EA31b8B13202085A0fef59c98675f6 0x0000000000000000000000000000000000000000 0x0000000000000000000000000000000000000000 0xe538905cf8410324e03A5A23C1c177a474D59b2b

```
