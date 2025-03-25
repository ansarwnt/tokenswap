const hre = require("hardhat");

async function main() {
    const Token = await hre.ethers.getContractFactory("TokenSwap");
    const tokenSwap = await Token.deploy("0xYourTokenContractAddress"); // Replace with your ERC-20 token

    await tokenSwap.deployed();
    console.log("TokenSwap deployed to:", tokenSwap.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
