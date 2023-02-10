const functions = {
    gradeClassifier: (grade) => {
        if (grade >= 95 && grade <= 100 ){
            return "O - Outstanding";
        } else {
            return "X";
        }
    },

    sum: (a, b) => {
        return a + b;
      }
}

module.exports = functions;