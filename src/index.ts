import fs from 'node:fs/promises';
import { parse } from 'yaml';

async function parseYamlConfig(filePath: string) {
    const configFileContent = await fs.readFile(filePath, 'utf-8');
    const config = parse(configFileContent);
    return config;
}

async function main() {
    const config = await parseYamlConfig('./config.yaml');
    console.log(config);
}

main();
