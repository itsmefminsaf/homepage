const showTime = () => {
  var time = new Date();
  hour = ((time.getHours() - 12) / 12) * 360;
  minite = (time.getMinutes() / 60) * 360;
  second = (time.getSeconds() / 60) * 360;
  //   console.log(hour, minite, second);
  const n1 = document.querySelectorAll(".n1");
  const n2 = document.querySelectorAll(".n2");
  const n3 = document.querySelectorAll(".n3");
  n1.forEach((n) => {
    n.style.rotate = `${second}deg`;
  });
  n2.forEach((n) => {
    n.style.rotate = `${minite}deg`;
  });
  n3.forEach((n) => {
    n.style.rotate = `${hour}deg`;
  });
};

setInterval(() => {
  showTime();
}, 1000);

const searchEngine = document.getElementById("source");
const searchTerm = document.getElementById("term");
var engine = "gl";

searchEngine.addEventListener("change", (e) => {
  return (engine = e.target.value);
});

searchTerm.addEventListener("change", (e) => {
  const search = e.target.value;
  var link = "";
  if (engine === "gl") {
    console.log("gl", e.target.value);
    link = `https://google.com/search=?${search.replace(" ", "+")}`;
  } else if (engine === "github") {
    console.log("github", search);
    link = `https://github.com/search=?${search}`;
  } else if (engine === "yt") {
    console.log("yt", search);
    link = `https://youtube.com/search=?${search}`;
  } else if (engine === "wkp") {
    console.log("wkp", search);
    link = `https://wikipedia.com/search=?${search}`;
  }

  const a = document.createElement("a");
  a.href = link;
  a.target == "_blank";
  a.click();
  a.remove();
  e.target.value = "";
});
