import Kiwi from "./kiwi.jpg";
import "./kiwi-image.scss";

class KiwiImage {
  render() {
    const img = document.createElement("img");
    const body = document.querySelector("body");

    img.src = Kiwi;
    img.alt = "Kiwi";
    img.classList.add("kiwi-image");
    body.appendChild(img);
  }
}

export default KiwiImage;
