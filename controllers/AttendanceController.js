signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
    $scope.signStudentsIn = function(student){
        student.signedIn = true;
    };

    console.log($scope.students.signedIn);

});
