import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployYourContract: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {

  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("Token", {
    from: deployer,
    args: ["my_erc20_token", "MET"],
    log: true,
    autoMine: true,
  });

};

export default deployYourContract;

deployYourContract.tags = ["Token"];
