# Facial Expression-Based Editor Background

This project implements a dynamic background feature for the editor, which changes based on the user's facial expression. Users can enable or disable the feature based on their preferences.

## Features

- **Dynamic Background**: The background of the editor changes according to the detected facial expression.
- **Enable/Disable Feature**: Users can toggle the feature on or off.
- **Facial Expression Detection**: Uses the camera to detect facial expressions such as neutral, happy, angry, etc., and changes the background accordingly.
- **Ai Song Recommendation and AutoPlay**: Plays songs according the user mood.
## Installation

1. Clone the repository:
   ``` bash
   git clone https://github.com/bhargav-yarlagadda/mood-sync.git
    ```
2. Install the dependencies:
   ``` bash
    npm install 
   ```
3. Get Your API Keys from CLERK AUTH AND JUDGE0 CE
  ```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY=YOUR_CLERK_SECRET_KEY

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in 
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up  
JUDGE0_API_KEY=YOUR_JUDGE0_API_KEY
JUDGE0_API_URL=https://judge0-ce.p.rapidapi.com
  ```
4. run the server
``` bash
npm run dev
```
