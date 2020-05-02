// component
angular.module("testController").component("testController", {
  template: "<ul>" + "<li>" + "<span>{{page.name}}</span>" + "</li>" + "</ul>",
  controller: function ($scope) {
    $scope.page = {
      name: "Test",
      content: {
        description:
          "You don't understand. You'll find out. Now which one was it, Greg or Craig? Oh, great scott. You get the cable, I'll throw the rope down to you. There, there, now, just relax. You've been asleep for almost nine hours now.Alright, take it up, go. Doc. Alright, okay listen, keep your pants on, she's over in the cafe. God, how do you do this? What made you change your mind, George? What the hell is this? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. My equipment, that reminds me, Marty, you better not hook up to the amplifier. There's a slight possibility for overload.Did you hurt your head? One point twenty-one gigawatts. One point twenty-one gigawatts. Great Scott. About how far ahead are you going? Uh? No.",
      },
    };
  },
});
// controller
// angular.module("testController").controller("testController", [
//   "$scope",
//   function ($scope) {
//     $scope.page = {
//       name: "About",
//       content: {
//         description:
//           "You don't understand. You'll find out. Now which one was it, Greg or Craig? Oh, great scott. You get the cable, I'll throw the rope down to you. There, there, now, just relax. You've been asleep for almost nine hours now.Alright, take it up, go. Doc. Alright, okay listen, keep your pants on, she's over in the cafe. God, how do you do this? What made you change your mind, George? What the hell is this? Good evening, I'm Doctor Emmett Brown. I'm standing on the parking lot of Twin Pines Mall. It's Saturday morning, October 26, 1985, 1:18 a.m. and this is temporal experiment number one. C'mon, Einy, hey hey boy, get in there, that a boy, in you go, get down, that's it. My equipment, that reminds me, Marty, you better not hook up to the amplifier. There's a slight possibility for overload.Did you hurt your head? One point twenty-one gigawatts. One point twenty-one gigawatts. Great Scott. About how far ahead are you going? Uh? No.",
//       },
//     };
//   },
// ]);
