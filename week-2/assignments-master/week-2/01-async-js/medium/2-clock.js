// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const second = currentTime.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  function padZero(value) {
    return value < 10 ? `0${value}` : value;
  }

  const formateHours = padZero(hours);
  const formatemin = padZero(minutes);
  const formatesec = padZero(second);
  const hours12 = padZero(hours % 12 || 12);

  const time24 = `${formateHours} : ${formatemin} : ${formatesec}`;
  const time12 = `${hours12} : ${formatemin} : ${formatesec}`;
  console.clear();
  console.log(time24);
  console.log(time12);
}

setInterval(clock, 1000);
