var EsembleApp = artifacts.require("./EsembleApp.sol");

module.exports = function(deployer, network) {
  if (network === 'rinkeby') {
    return
  }

  deployer.deploy(EsembleApp);
};
