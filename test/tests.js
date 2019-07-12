
import isEven from '../is-even.js';

const test = QUnit.test;

test('time to test!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 4;
    const expected = true;
    //Act 
    const result = isEven(number);
    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(result, expected);
});

test('time to test!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const number = 3;
    const expected = false;
    //Act 
    const result = isEven(number);
    // Call the function you're testing and set the result to a const

    //Assert
    // What should the result be?
    assert.equal(result, expected);
});