// SPDX-License-Identifier: MIT
pragma solidity >=0.4.24;

import "../contracts/CrowFunding.sol";
import "truffle/Assert.sol";

contract CrowFundingTest {
  // solo el propietario
  function testSettingAnOwnerDuringCreation() public {
    crowfunding = new CrowFunding();
    Assert.equal(crowfunding.owner(), this, "ALERT: an owner is different than a deployer");
  }  
}
