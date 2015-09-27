signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
    $scope.SignStudentsIn = function(students){
        students.signedIn = true;
    };

    console.log(factory.students.signedIn);

});
