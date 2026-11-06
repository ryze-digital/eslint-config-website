/*
 * This file shown 78 problems with eslint version 9 and after upgrade to 10 it still shows 78
 * Below is the full error message
 * ✖ 78 problems (39 errors, 39 warnings)
 * ✖ 33 errors and 19 warnings potentially fixable with the `--fix` option.
 *
 *     npm run check -- test/invalid.js
 *
 */

/**
 * @file Run `npm init @eslint/config` with @outside.
 */
var legacy = 'first', other = 'second'

const message = "double quotes are rejected"
console.log(message)

//missing the space a comment needs
const spaced = legacy   + other;

const	tabbed = {indented : 1};

function  noSpaceBeforeBlock (value){
    let neverReassigned = value;
    if (neverReassigned == other) return neverReassigned;
    if (legacy) {
        return 1;
    }
    else {
        return;
    }
}

function lonely(a, b) {
    if (a) {
        noSpaceBeforeBlock(a);
    } else {
        if (b) {
            noSpaceBeforeBlock(b);
        }
    }
}

function tightReturn(a) {
    lonely(a, a);
    return a;
}

async function neverAwaits() {
  return 1;
}

const built = new Date;

const concise = a => a * 2;
const unspaced = (a)=>{ return a; };

class Cramped {
    first() {
        return 1;
    }
    second() {
        return 2;
    }
}

const unary = typeof(legacy);



export { spaced, tabbed, noSpaceBeforeBlock, lonely, tightReturn, neverAwaits, built, concise, unspaced, Cramped, unary };

/*
 * Everything below violates the jsdoc rules rather than the core ones.
 *
 * These only fire inside a `/**` block — a plain `/*` comment like this one is
 * invisible to every jsdoc rule, tags and all. That is also why the file header
 * above can contain `@file` without reporting anything.
 *
 * The bodies here are written in compliant core style so the jsdoc findings are
 * not buried under indent and quote noise.
 */

/**
 * @access bogusLevel
 * @bogusTag invented
 * @abstract this tag takes no text
 * @returns {number}
 */
export function badTags() {
    return 1;
}

/**
 * @param {Object} wrongName
 * @param {Number} alsoWrong
 * @returns {number}
 */
export function badTypes(actual, second) {
    return actual + second;
}

/**
 * @param {number}
 * @param missingType
 * @returns {number}
 */
export function badParams(first, second) {
    return first + second;
}

/**
 * @param {number} [withDefault=1]
 * @param {NeverDeclaredType} unknown
 * @param {foo<} malformed
 * @returns {number}
 */
export function badParamShapes(withDefault, unknown, malformed) {
    return withDefault + unknown + malformed;
}

/**
 * Description followed by a blank line, which tag-lines rejects.
 *
 * @returns {number}
 */
export function badTagLines() {
    return 1;
}

/**
   * @returns {number}
 */
export function badAlignment() {
    return 1;
}

/**
 ** @returns {number}
 */
export function multiAsterisk() {
    return 1;
}

/** @returns {number}
 */
export function badMultiline() {
    return 1;
}

/**
 * @returns some description with no type
 */
export function returnsNoType() {
    return 1;
}

/**
 * @returns {number}
 */
export function returnsNothing() {
    console.info('no return here');
}

/**
 * Returns a value but never declares it.
 */
export function undeclaredReturn() {
    return 1;
}

/**
 * @implements {SomeInterface}
 * @returns {number}
 */
export function implementsOnFunction() {
    return 1;
}

/**
 * @yields {number}
 * @returns {Generator}
 */
export function* yieldsNothing() {
    return 1;
}

/**
 * Yields without declaring it.
 * @returns {Generator}
 */
export function* undeclaredYield() {
    yield 1;
}

/**
 * @license NOT-A-REAL-LICENSE
 * @typedef {object} NoProperties
 */

/**
 * @typedef {object} BadProperties
 * @property {number}
 * @property missingType
 * @property {number} parent.child
 */

