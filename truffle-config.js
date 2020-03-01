require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remember attitude inner prison orange slow'; 
let testAccounts = [
"0x3e6ff459d1cf8735dc9e85829dc43a5db449913529ae6eba6cc8d4b58e7897e2",
"0xbc77b9af4c1ebc2ac3d266ddd9a8fdac49bf25092ca3ed7bdae27336f0e49dac",
"0x6e19c0f3555dc3e389d0b74d9f75a660b4d911ea556b1c3e7838d56baba7eceb",
"0x88dacb2dc248d5febe0d0593615cc1dc95d22c6cc9d888dbbc521153e1a695bd",
"0xb1cd36be9815006cb204a343f7646a9ff5d8e2b2bc7d1e91ed9caea81d235ba9",
"0xccfc30a6dcb39f52195665d22e49295602c51238e5bfb2bdd25136538f5950f4",
"0xe12a968d4aaf00f31396c45ae97b1938154468a2e1522dcceed33dacc63e5005",
"0x9c96bfbc699838f7891e892aa80b76fef13a82b26a79ca2bd8b518b6cd8038bb",
"0xd142e11c783500513c966ccacbec06bee411121b608ef3ba07ce7c16b391bb41",
"0xda050790f50a3f3bde8795eea59654abd61287aeae973cf82a5fe3ef33b6066b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                testAccounts,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
