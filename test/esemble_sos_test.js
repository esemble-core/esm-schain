const EsembleApp = artifacts.require("./EsembleApp.sol");


contract("EsembleApp Sos Test", accounts => {
  const SCHAIN_ACCT = accounts[0];
  const ETH_ACCT = accounts[1];
  const ETH_ACCT2 = accounts[2];
  const ETH_ACCT3 = accounts[3];
 
  
  it("...it should have some skills from the contructor", async () => {
    const instance = await EsembleApp.deployed();
    const count = await instance.numberOfSkills();
    console.log("skills count", count);
    assert.equal(count, 4);
  });

  it("...it should allow you to add a skill", async () => {
    const instance = await EsembleApp.deployed();
    await instance.addSkill("Vue");
    const count = await instance.numberOfSkills();
    console.log("skills count", count);
    assert.equal(count, 5);
  });

  it("...it should not allow a duplicate skill", async () => {
    const instance = await EsembleApp.deployed();
    await instance.addSkill("Vue");
    const count = await instance.numberOfSkills();
    console.log("skills count", count);
    assert.equal(count, 5);
  });


});

