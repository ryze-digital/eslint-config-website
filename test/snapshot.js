/*
 * Lints test/invalid.js with the shipped config and compares every reported
 * message (line, column, severity, rule id) against test/invalid.snapshot.json.
 *
 *     npm test               compare against the snapshot
 *     npm test -- --update   rewrite the snapshot after an intentional change
 */
import { readFile, writeFile } from 'node:fs/promises';
import { ESLint } from 'eslint';

const target = 'test/invalid.js';
const snapshotFile = new URL('./invalid.snapshot.json', import.meta.url);
const update = process.argv.includes('--update');
const eslint = new ESLint({ overrideConfigFile: 'index.js' });
const [result] = await eslint.lintFiles([target]);
const actual = result.messages.map((message) => {
    const severity = message.severity === 2 ? 'error' : 'warn';

    return `${message.line}:${message.column} ${severity} ${message.ruleId ?? 'parse-error'}`;
});

if (update) {
    await writeFile(snapshotFile, `${JSON.stringify(actual, null, 4)}\n`);
    console.info(`Snapshot updated with ${actual.length} messages.`);
    process.exit(0);
}

const expected = JSON.parse(await readFile(snapshotFile, 'utf8'));
const missing = expected.filter((entry) => {
    return !actual.includes(entry);
});
const unexpected = actual.filter((entry) => {
    return !expected.includes(entry);
});

if (missing.length === 0 && unexpected.length === 0) {
    console.info(`Snapshot matches: ${actual.length} messages in ${target}.`);
    process.exit(0);
}

console.error(`Snapshot mismatch in ${target}.`);

for (const entry of missing) {
    console.error(`  - no longer reported: ${entry}`);
}

for (const entry of unexpected) {
    console.error(`  + newly reported:     ${entry}`);
}

console.error('\nRun "npm test -- --update" if the change is intended.');
process.exit(1);
