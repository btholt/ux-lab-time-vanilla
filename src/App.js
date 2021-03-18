import axios from "axios";

const target = document.getElementById("target");
const btn = document.getElementById("request");

btn.addEventListener("click", async function makeTimeRequest() {
  const res = await axios.get(""); // put API url here
  target.innerText = res.data;
});
