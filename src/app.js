// import AboutController from "./scripts/controllers/aboutController";

const app = angular.module("app", [
  "ngRoute",
  "homeController",
  "aboutController",
  "contactController",
  "homePageDirective",
  "aboutPageDirective",
  "contactPageDirective",
  "pageTitleDirective",
  "pageDescriptionDirective",
  "testController",
]);

app.controller("here", [
  "$scope",
  "appFactory",
  function ($scope, appFactory) {
    $scope.appFactory = appFactory;
    $scope.txt = "txt val";
  },
]);

app.directive("papa", function () {
  return {
    template: "<h1>Here: {{txt}}</h1>",
  };
});

app.factory("appFactory", function () {
  return [
    { name: "Radek", salary: "6 000 PLN" },
    { name: "Patrycja", salary: "6 000 PLN" },
    { name: "Marcin", salary: "4 000 PLN" },
    { name: "Ada", salary: "2 800 PLN" },
    { name: "Zenek", salary: "58 000 PLN" },
  ];
});

// app.factory("alarm", [
//   "$window",
//   function ($window) {
//     return {
//       call: function (arg) {
//         $window.alert(arg);
//       },
//     };
//   },
// ]);
