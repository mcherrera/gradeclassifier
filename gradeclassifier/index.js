const functions = {
    gradeClassifier: (grade) => {
        if (grade >= 95 && grade <= 100 ){
            return "O - Outstanding";
        } else if (grade >= 90 && grade <= 94.99 ){
            return "V - Very Good";
        } else {
            return "X";
        }
    },

    sum: (a, b) => {
        return a + b;
      }
}

module.exports = functions;