app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");

  $routeProvider
    .when("/home", {
      templateUrl: "/src/views/home.html",
      controller: "homeController",
    })
    .when("/about", {
      templateUrl: "/src/views/about.html",
      controller: "aboutController",
    })
    .when("/contact", {
      templateUrl: "src/views/contact.html",
      controller: "contactController",
    })
    .otherwise({ redirectTo: "/" });
});
