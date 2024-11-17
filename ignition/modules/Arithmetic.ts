import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Arithmetic", (m) => {
  const arithmetic = m.contract("Arithmetic", []);

  return { arithmetic };
});
