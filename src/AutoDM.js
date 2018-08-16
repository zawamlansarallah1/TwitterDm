const T = require("./Twit.js");
const my_user_name = require("./config/config").userName;
const timeout = 1 * 60 * 5;

const AutoDM = () => {
  const stream = T.stream("user");
  console.log("Follow The Bot To Get A Message");
  stream.on("follow", SendMessage);
};
const SendMessage = user =>
{
  const { screen_name, name } = user.source;

  const obj =
  {
    screen_name,
    text: GenerateMessage(name)
  };
  // the follow stream track if I follow author person too.
  if (screen_name != my_user_name)
  {
    console.log("New Follower");
    setTimeout(() =>
    {
      console.log(obj);
      T.post("direct_messages/new", obj)
        .catch(err =>
        {
          console.error("error", err.stack);
        })
        .then(result =>
        {
          console.log(`Message sent  To  ${screen_name}`);
        });
    }, timeout);
  }
};
const GenerateMessage = name =>
{
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const d = new Date();
  const dayName = days[d.getDay()];
  return `Happy ${dayName} Welcome to the IBM Open the Vault Challenge`;
};

module.exports = AutoDM;
