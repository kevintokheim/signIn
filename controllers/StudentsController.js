signIn.controller("StudentsCtrl", function StudentsCtrl($scope, SignInFactory){
    //$scope.students = ["Brentwood Smith", "Karl Klingenberg", "Sam Sammy Samwise", "Frodo Bagginsberg", "Sven Svensgardsen"];

    $scope.students = [
        { name:"Brentwood Smith" },
        { name: "Karl Klingenberg" },
        { name: "Sam 'Sammy' Samwise"},
        { name: "Frodo Bagginsberg" },
        { name: "Sven Svensgardsen" }
    ];
});
