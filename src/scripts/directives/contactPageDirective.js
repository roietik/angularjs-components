angular
  .module("contactPageDirective", [])
  .directive("contactPage", function () {
    return {
      templateUrl: "/src/templates/contactPage.html",
      replace: true,
    };
  });
