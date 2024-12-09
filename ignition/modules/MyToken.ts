import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyToken", (m) => {
  const myToken = m.contract("MyToken", [100]);

  m.call(myToken, "launch", []);

  return { myToken };
});
