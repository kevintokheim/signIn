signIn.controller('SignedInCtrl', function SignedInCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.SignStudentsIn = function(student){
        student.signedIn: true;
        var signedInStudents = [];
        if (student.signedIn == true){
            signedInStudents.push(student);
        }
    };

});
