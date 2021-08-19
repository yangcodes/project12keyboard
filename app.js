const keyContainers = document.querySelectorAll(".keys");
let textArea = document.querySelector(".display textarea");

//console.log(keyContainers[0].children);

keyContainers.forEach(function (key) {
  key.addEventListener("click", function (e) {
    console.log(e.path[0].value);
  });
});
