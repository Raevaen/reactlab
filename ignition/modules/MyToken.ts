import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyToken", (m) => {
  const myToken = m.contract("MyToken", [1000000]);

  return { myToken };
});
