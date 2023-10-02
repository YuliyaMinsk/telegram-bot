# Super Telegram Bot: The Reminder Bot with a Feline Twist 🐱

## Description

Ever felt like you're juggling too many tasks and can't keep track? Need a nudge to water your plants or call your mom? Say hello to the Super Telegram Bot, your friendly neighborhood reminder bot with a feline twist! Not only does it remind you of your tasks, but it also sends you a cute cat picture because, let's face it, who doesn't need a dose of cuteness in their busy lives?

## Features

- **Set Reminders**: Just tell the bot what you need to be reminded of and when.
- **Get Notified**: Receive a reminder message right when you need it.
- **Cute Cat Bonus**: Each reminder comes with a picture of a cute cat. Because why not?

## Installation

### Prerequisites

- Node.js installed
- Telegram Bot Token (You can get this from the Telegram BotFather)
- A love for cats (optional but highly recommended)

### Steps

1. **Clone the Repository**

    ```bash
    git clone https://github.com/YuliyaMinsk/telegram-bot.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd telegram-bot
    ```

3. **Install Dependencies**

    ```bash
    npm install
    ```

4. **Environment Variables**

    Create a `.env` file in the root directory by example and add your Telegram Bot Token like so:

    ```env
    TELEGRAM_BOT_TOKEN=your_token_here
    ```

5. **Run the Bot**

    ```bash
    npm start
    ```

## Usage

1. Open your Telegram app and search for your bot.
2. Start a chat and set a reminder using the `/remind` command followed by your reminder and the time.

    ```
    /remind Buy milk in 17:30
    ```

3. Wait for the magic to happen! At the specified time, you'll get your reminder along with a picture of a cute cat.

## Troubleshooting

- **Bot not responding?** Make sure you've set the correct Telegram Bot Token in your `.env` file.
- **Not getting cat pictures?** Check if the file `src/cat.png` exists. If not, add your own cat picture and name it `cat.png`. Because, let's be honest, the world needs more cat pictures.

## Final Notes

This bot is so cool, it's got nine lives! 🐱 Enjoy your newfound productivity (and cuteness overload)!
