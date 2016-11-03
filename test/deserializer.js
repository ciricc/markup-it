const expect       = require('expect');
const Deserializer = require('../src/models/deserializer');

describe('Deserializer', () => {
    describe('matchRegExp()', () => {
        it('should return undefined when the regexp does not match', () => {
            const result = Deserializer()
                .matchRegExp(/abc/, (state, match) => {
                    return true;
                })
                .exec({}, 'xyz');

            expect(result).toBe(undefined);
        });

        it('should return the value of the callback when the regexp matches', () => {
            const result = Deserializer()
                .matchRegExp(/.*(abc).*/, (state, match) => {
                    return match[1];
                })
                .exec({}, 'abcdefgh');

            expect(result).toBe('abc');
        });
    });
});
