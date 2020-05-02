angular.module("aboutPageDirective", []).directive("aboutPage", function () {
  return {
    templateUrl: "/src/templates/aboutPage.html",
    replace: true,
  };
});
