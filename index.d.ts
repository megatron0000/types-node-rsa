declare module 'node-rsa' {
    /**
     * See https://github.com/rzcoder/node-rsa
     */
    class NodeRSA {
        constructor(key: string, keyFormat: string, options: Object);
        encrypt(message: Buffer, outputEncoding: 'buffer'): Buffer;
        encrypt(message: Buffer, outputEncoding: 'hex' | 'base64'): string;
        decrypt(message: Buffer, outputEncoding: 'utf8'): string;
        decrypt(message: Buffer, outputEncoding: 'buffer'): Buffer;
    }

    export = NodeRSA;
}

