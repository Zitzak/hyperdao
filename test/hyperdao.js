const init = require("../test-init.js");

describe("Contract: Signer", async () => {});

/*
    Psuedocode
    const hyperDaoInstance = await HyperDAO.deploy(safeMasterCopy.address, proxyFactory.address);
    const chatId = someBytes32Value; // I don't know how you will generate this.
    const ownersArray = [john.address, sansa.address, bran.address, tyrion.address];
    const threshold = 2;    // we know what it is
    const nonce = 42; // this value can be anything, suggest to fix it to some value, otherwise, any value will work.
    await hyperDaoInstance.assembleDao(chatId, ownersArray, threshold, nonce);  // this should deploy and also set initial owners for the safe.
*/
