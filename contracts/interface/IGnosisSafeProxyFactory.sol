pragma solidity 0.8.9;

import "@gnosis.pm/safe-contracts/contracts/proxies/GnosisSafeProxy.sol";

interface GnosisSafeProxyFactory {

	function createProxy(address singleton, bytes memory data) external returns (GnosisSafeProxy proxy);
}