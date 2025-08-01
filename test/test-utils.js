/**
 * Simple testing framework
 */
function test(description, testFunction) {
    try {
        testFunction();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}`);
        console.log(`   Error: ${error.message}`);
    }
}

function assertEquals(actual, expected, message = '') {
    if (JSON.stringify(actual) !== JSON.stringify(expected)) {
        throw new Error(`${message} Expected: ${JSON.stringify(expected)}, Actual: ${JSON.stringify(actual)}`);
    }
}

function assertTrue(condition, message = '') {
    if (!condition) {
        throw new Error(`${message} Expected true, but got false`);
    }
}

function assertFalse(condition, message = '') {
    if (condition) {
        throw new Error(`${message} Expected false, but got true`);
    }
}

module.exports = {
    test,
    assertEquals,
    assertTrue,
    assertFalse
};