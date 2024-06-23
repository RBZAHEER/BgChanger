document.addEventListener("DOMContentLoaded", () => {
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#33FFF2"];

  document.querySelectorAll(".color").forEach((circle, index) => {
    circle.addEventListener("click", () => {
      document.body.style.backgroundColor = colors[index];
    });
  });

  const button = document.querySelector(".btn");
  button.addEventListener("click", () => {
    document.body.style.backgroundColor = "white";
  });
});
