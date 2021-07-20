const capitalize = require('./capitalize');

test('Is capitalize', () => {
    expect(capitalize('Juan')).toMatch(/^[A-Z]\w*$/);
}) 