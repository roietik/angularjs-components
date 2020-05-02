angular.module("pageTitleDirective", []).directive("pageTitle", function () {
  return {
    template: "<h1 class='ng-title'>{{page.name}}</h1>",
    replace: true,
  };
});
