signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;
    $scope.StudentsFactory = StudentsFactory;
});
