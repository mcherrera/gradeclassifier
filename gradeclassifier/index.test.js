const { gradeClassifier, sum } = require('./index');

describe('Letter Grade Classifier', () => {
    it('When grade is greater than 95, it should return O - Outstanding', () => {
        //Arrange
        const grade = 96;

        //Act
        const letterGrade = gradeClassifier(grade);

        //Assert
        expect(letterGrade).toEqual("O - Outstanding");
    });
     it('When grade is different return X', () => {
        //Arrange
        const grade = 111;

        //Act
        const letterGrade = gradeClassifier(grade);

        //Assert
        expect(letterGrade).toEqual("X");
    });

    it('The function will return the sum of two numbers', () => {
        //Arrange
        const a = 1, b = 2;

        //Act
        const answer = sum(a , b);

        //Assert
        expect(answer).toEqual(3);
    });
});