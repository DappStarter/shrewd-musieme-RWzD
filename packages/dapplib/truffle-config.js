require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict drum off uphold drift repeat still honey grace hen equal general'; 
let testAccounts = [
"0x2c79edc496e5685e98c3e39c49b4ee83ad03f7a8359f9b745c2fc2d0c06a9f65",
"0xc52245e1cd61130132d413853f43c2fbb9e0aaa65c446f040c673983c77dcf07",
"0xb07475ce2eb4bf7116999693d8c11952ce2e4fefa0a16b9f85640a7bc0c18020",
"0x2a8d4601766b6e2194d3679d6697e88d5da0fbd9ca5ee0d32a90f0f1c798e24a",
"0xb6c7fce6ababb98d448a536774b0cbac995213a9467513f004650c2395461770",
"0xdbdf6066585c1e7cb80c5eafe2fd7415e15fdda2c0d5af798da4953e8cdcb827",
"0x05bf54ad412d213364df3c4755a61df2b696d0e8927dc6b21a796ed4cb3798d5",
"0xeb81442149c3a762d06f83e9da703fd08741869925c6768e8cf92771999ce931",
"0x962f73835d385822c76d6d5a4cc2eaf150ec3b769be0ee8900ec3b2d10030bde",
"0xe9ea3274e4411c82c5a9e86a3f026eea045467fe15c544dc46147d28d6ecb1f4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
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
            version: '^0.8.0'
        }
    }
};

