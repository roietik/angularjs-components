angular.module("homeController", []).controller("homeController", [
  "$scope",
  "$filter",
  "$http",
  function ($scope, $filter, $http) {
    $scope.person = {
      name: "Radosław",
      surname: "Grzymała",
      age: 30,
      city: "Płock",
    };
    $scope.page = {
      name: "Home",
      content: {
        description:
          "Lorizzle ipsizzle dolizzle shizzlin dizzle amizzle, crunk shiznit its fo rizzle. Fo shizzle my nizzle dope velizzle, shit volutpizzle, suscipit shit, ma nizzle vizzle, fizzle. Pellentesque tortizzle. Sed eros. Yo izzle dolizzle dapibizzle shizzlin dizzle fizzle pimpin'. Maurizzle tellivizzle fo shizzle go to hizzle boofron. Vestibulum daahng dawg tortizzle. Pellentesque eleifend gizzle away. In hac habitasse platea dictumst. Tellivizzle shiz. Curabitur tellizzle urna, pretizzle eu, mattizzle ac, eleifend vitae, nunc. Gizzle ma nizzle. Integer semper velit sizzle away.",
      },
    };

    $scope.handle = "";
    $scope.handleLowercase = function () {
      return $filter("lowercase")($scope.handle);
    };

    $scope.$watch("handle", function () {
      $http
        .get("http://www.mocky.io/v2/5ea303014f0000dd4cd9f6e8")
        .then((response) => {
          $scope.hello = response.data.hello;
        })
        .catch((err) => console.log(err));
    });
    setTimeout(() => {
      $scope.$apply(function () {
        $scope.handle = "new timeout";
      });
    }, 3000);
  },
]);
