signIn.controller('AttendanceCtrl', function AttendanceCtrl($scope, StudentsFactory){
    $scope.students = StudentsFactory.students;

    $scope.SignStudentsIn = function(student){
        student.signedIn: true;
        // if (student.signedIn == true){
        //     signedInStudents.push(student);
        // }
    };

});
