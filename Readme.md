### Twitter Auto DM Bot

1. Apply for a twitter developer account at : https://developer.twitter.com/en/apply-for-access.html

2. Clone this repository then navigate to the root directory

3. Create a config.json file and modify the contents as follows:

```{
  "development":
  {
    "CONSUMER_KEY": "*********",
    "CONSUMER_SECRET": "*********",
    "ACCESS_TOKEN": "*********",
    "ACCESS_TOKEN_SECRET": "*********",
    "USERNAME": "********"
  }
}
```
  Replace the placeholder * with the keys provided by twitter.

4. From the terminal run the command npm install to resolve the project dependencies

5. Run npm start to start the application

6. When a twitter user follows your bot a message will be logged to the console and they will receive a direct message
   in their inbox.

7. For further deployment via cloud platforms such as heroku see: https://github.com/yjose/twitter-bot

8. Enjoy :thumbsup::thumbsup::thumbsup:
