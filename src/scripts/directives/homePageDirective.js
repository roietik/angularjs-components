angular.module("homePageDirective", []).directive("homePage", function () {
  return {
    templateUrl: "/src/templates/homePage.html",
    replace: true,
  };
});
