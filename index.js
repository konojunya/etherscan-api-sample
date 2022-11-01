import dotenv from "dotenv";
dotenv.config();

// goerli: https://docs.etherscan.io/v/goerli-etherscan/
const apiEndpoint = "https://api-goerli.etherscan.io";

// nft project: https://testnets.opensea.io/ja/collection/lu-demo
const contractAddress = "0x32d9232a1CEddE1C39bb8Fe1CF755943f269Cd02";

async function get(query) {
  const url = `${apiEndpoint}/api?${query.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw response.Error;
  }

  const data = await response.json();

  return data;
}

/**
 * account
 */
// address の残高取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/accounts#get-ether-balance-for-a-single-address
async function accountBalance() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "account");
  query.set("action", "balance");
  query.set("tag", "latest");
  query.set("address", contractAddress);

  console.log(await get(query));
}

// トランザクションリストの取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/accounts#get-a-list-of-normal-transactions-by-address
async function accountTxList() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "account");
  query.set("action", "txlist");
  query.set("startblock", 0);
  query.set("endblock", "latest");
  query.set("page", 1);
  query.set("offset", 5);
  query.set("sort", "asc");
  query.set("address", contractAddress);

  console.log(await get(query));
}

// ERC20 の token transfer event リストの取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/accounts#get-a-list-of-erc20-token-transfer-events-by-address
async function accountTokenTxList() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "account");
  query.set("action", "tokentx");
  query.set("startblock", 0);
  query.set("endblock", "latest");
  query.set("page", 1);
  query.set("offset", 5);
  query.set("sort", "asc");
  query.set("address", contractAddress);

  console.log(await get(query));
}

// ERC721 の token transfer event リストの取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/accounts#get-a-list-of-erc721-token-transfer-events-by-address
async function accountTokenNFTTxList() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "account");
  query.set("action", "tokennfttx");
  query.set("startblock", 0);
  query.set("endblock", "latest");
  query.set("page", 1);
  query.set("offset", 5);
  query.set("sort", "asc");
  query.set("address", contractAddress);

  console.log(await get(query));
}

/**
 * contracts
 */
// verified な contract の abi 取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/contracts#get-contract-abi-for-verified-contract-source-codes
async function contractGetABI() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "contract");
  query.set("action", "getabi");
  query.set("address", contractAddress);

  console.log(await get(query));
}

// verified な contract の source code 取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/contracts#get-contract-source-code-for-verified-contract-source-codes
async function contractGetSourceCode() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "contract");
  query.set("action", "getsourcecode");
  query.set("address", contractAddress);

  console.log(await get(query));
}

/**
 * tokens
 */
// ERC20 token の total supply 取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/tokens#get-erc20-token-totalsupply-by-contractaddress
async function tokenGetSupply() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "stats");
  query.set("action", "tokensupply");
  query.set("contractaddress", contractAddress);

  console.log(await get(query));
}

/**
 * stats
 */
// Ether の total supply 取得
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/stats-1#get-total-supply-of-ether
async function statsGetSupply() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "stats");
  query.set("action", "ethsupply");

  console.log(await get(query));
}

// 1ETH の最新の値段
// ref: https://docs.etherscan.io/v/goerli-etherscan/api-endpoints/stats-1#get-ether-last-price
async function statsGetEthPrice() {
  const query = new URLSearchParams();
  query.set("apiKey", process.env.API_KEY);
  query.set("module", "stats");
  query.set("action", "ethprice");

  console.log(await get(query));
}
