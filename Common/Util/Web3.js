const Web3 = require('web3'),
	config = require('./../Config/Config');

const web3 = new Web3(new Web3.providers.HttpProvider(config.WEB3_HTTP_PROVIDER));

module.exports = web3;
