signIn.factory("StudentsFactory", function StudentsFactory(){
    var factory = {};

    $scope.students = [
        { name:"Brentwood Smith", signedIn: false },
        { name: "Karl Klingenberg", signedIn: false },
        { name: "Sam 'Sammy' Samwise", signedIn: false},
        { name: "Frodo Bagginsberg", signedIn: false },
        { name: "Sven Svensgardsen", signedIn: false }
    ];

    return factory;
});