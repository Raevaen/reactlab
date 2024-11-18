import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("Apollo", (m) => {
    const mex = m.contract("Messages", []);

    m.call(mex, "setMessage", ["Hello, World!"]);
  
    return { mex };
  });
  