angular
  .module("pageDescriptionDirective", [])
  .directive("pageDescription", function () {
    return {
      template: "<p>{{page.content.description}}</p>",
      replace: true,
    };
  });
