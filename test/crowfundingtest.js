const CrowFunding = artifacts.require("CrowFunding");

contract('CrowFunding', (accounts) => {
  //PRE-ARRANGE
  const [firstAccount] = accounts;

  it("sets an owner", async () => {
    // ARRANGE
    const crowFunding = await CrowFunding.new();
    // ACT and ASSERT
    assert.equal(await crowFunding.owner.call(), firstAccount);
  });
});

const SZABO = 10**12; // 10^12 wei

contract("CrowFunding", accounts => {
  // PRE-ARRANGE
  const [firstAccount, secondAccount] = accounts;

  it("accepts donations to campaign", async () => {

    // ARRANGE
    const crowFunding = await CrowFunding.new();

    // ACT
    await crowFunding.donate({ from: firstAccount, value: 10 * SZABO });
    await crowFunding.donate({ from: secondAccount, value: 20 * SZABO });
    
    // ASSERT
    assert.equal(await crowFunding.raised.call(), 30 * SZABO);
  });
  
  it("ensure donator balance keep on track", async () => {
    // ARRANGE
    const crowFunding = await CrowFunding.new();
    
    // ACT
    await crowFunding.donate({ from: firstAccount, value: 5 * SZABO });
    await crowFunding.donate({ from: secondAccount, value: 15 * SZABO });
    await crowFunding.donate({ from: secondAccount, value: 3 * SZABO });
    
    // ASSERT
    assert.equal(await crowFunding.balances.call(firstAccount), 5 * SZABO);
    assert.equal(await crowFunding.balances.call(secondAccount), 18 * SZABO);
  });
});
