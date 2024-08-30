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
