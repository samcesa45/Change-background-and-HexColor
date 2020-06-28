(function () {
  //target the button
  const changeBtn = document.querySelector("#btn");
  //target the body
  const body = document.querySelector("body");
  //taget span
  const spanText = document.querySelector("#hex-value");
  //create a color template array
  const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  //add a click event to the button
  changeBtn.addEventListener("click", () => {
    //define  the hex
    let hex = "#";
    //loop through the color array
    for (let i = 0; i < 6; i++) {
      const random = Math.floor(Math.random() * color.length);
      hex += color[random];
    }
    body.style.backgroundColor = hex;
    spanText.textContent = hex;
  });
})();
