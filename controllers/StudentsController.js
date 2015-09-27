signIn.controller("StudentsCtrl", function StudentsCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
    $scope.signStudentsIn = function(student){
        student.signedIn = true;
        console.log(student.signedIn);
    };

    $scope.signStudentsOut = function(student){
        student.signedIn = false;
    };
});
