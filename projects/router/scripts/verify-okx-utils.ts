import axios from 'axios'
import fs from 'fs'

// 你的 OKLink API Key
const OKLINK_API_KEY = process.env.OKLINK_API_KEY || ''

/**
 * Verify contract on OKLink
 * @param address 合约地址
 * @param constructorArgs 构造参数数组
 * @param sourceJson 标准 JSON 输入
 * @param chainName 链名称，例如 'bsc' 或 'oktc'
 */
export async function verifyContractOklink(
  address: string,
  constructorArgs: any[],
  sourceJson: Record<string, any>,
  chainName: string
) {
  const url = `https://www.oklink.com/api/explorer/v1/contract/verify`

  // 构造提交数据
  const payload = {
    apiKey: OKLINK_API_KEY,
    module: 'contract',
    action: 'verify',
    network: chainName,
    contractAddress: address,
    compilerVersion: sourceJson.settings?.compilerVersion || 'v0.7.6+commit.7338295f',
    sourceCode: JSON.stringify(sourceJson),
    constructorArguments: constructorArgs.map(String).join(','),
    // 可能需要的额外字段，例如 evmVersion、optimizer 等
    evmVersion: sourceJson.settings?.evmVersion || 'istanbul',
    optimizationUsed: sourceJson.settings?.optimizer?.enabled ? 1 : 0,
    runs: sourceJson.settings?.optimizer?.runs || 200,
  }

  console.log('Submitting verification to OKLink:', payload)

  const res = await axios.post(url, payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  console.log('OKLink verify response:', res.data)

  if (res.data.code !== 0) {
    throw new Error(`Verify failed: ${JSON.stringify(res.data)}`)
  }
}
