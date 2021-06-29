const CronJob = require("cron").CronJob;

//six different time zones
const timeZones = [
  "Canada/Atlantic",
  "Australia/Adelaide",
  "Europe/Berlin",
  "America/Puerto_Rico",
  "asia/kolkata",
  "Europe/Moscow",
];

//getting current time by passing timezones
function getTime(options) {
  formatter = new Intl.DateTimeFormat([], options).format(new Date());
  return formatter;
}

//sending message if it is 7:00 AM
function greetings(time, place) {
  if (time == "7:00:00 AM") {
    console.log(`Hi Good morning from ${place}`);
  }
}

//cron
const job = new CronJob(
  "00 */1 * * * *",
  function () {
    //getting all current time
    timeZones.forEach((element) => {
      let obj = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      };
      obj.timeZone = element;
      timeOptions = getTime(obj);
      const place = element.split("/")[1];
        console.log(timeOptions, place);
      greetings(timeOptions, place);
    });
  },
  null,
  true,
  "Asia/Kolkata"
);
job.start();
