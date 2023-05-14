const { square, triangle, circle } = require(`./shapes.js`)

// test for square
describe(`square test`, () => {
    test(`square with purple background`, () => {
        const shape = new square();
        shape.setColor(`purple`);
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="purple"/>`
        );
    });
});
