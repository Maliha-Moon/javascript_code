# KeyCodes Event Listener
## Overview
A simple web application that displays information about a keypress event, including the key, its keycode, and its code value. This project is useful for developers who want to learn about or debug keyboard events in JavaScript.

## 🚀 Features

- Dynamically updates the display with details of the pressed key.
- Shows:
  - **Key**: The name of the pressed key.
  - **Keycode**: The numerical code of the pressed key.
  - **Code**: The physical key location on the keyboard.
- Clean and minimalistic UI.
- Responsive design to fit any screen size.


## 🛠️ Technologies Used

- **HTML**: For the structure of the page.
- **CSS**: For styling, including inline and external styles.
- **JavaScript**: For handling keypress events and dynamically updating the DOM.

## 📂 Project Structure
The project includes the following files:
1. **HTML**: Contains the structure of the webpage.
2. **CSS**: External styling (optional), with some styles written inline.
3. **JavaScript**: Defines the event listener and DOM manipulation logic.
---

## HTML Structure

### Key Elements

1. **`<nav>`**: 
   - A navigation bar with links to the homepage and a YouTube channel.
   
2. **`<div class="project">`**: 
   - Container for the content where the keyboard event details will be displayed.

3. **`<div id="insert">`**: 
   - A placeholder div where the event data will be dynamically inserted.
### Inline Styling

- Styles for `table`, `th`, `td` define borders.
- `.project` centers the content both horizontally and vertically.
- `.color` adjusts text color and flexbox alignment for rows.

---

## CSS Styling

### Inline Styles

- **Table Design**:
  - Borders for the table and cells.
- **Page Layout**:
  - `.project` ensures full viewport height, centers the content, and applies a dark theme.
- **Text Styling**:
  - `.color` changes text to light blue and organizes content in rows.

---
## JavaScript Functionality

The `script.js` contains the following logic:

1. **DOM Selection**:
   - `insert` is the container where the keyboard event details are dynamically updated.

2. **Event Listener**:
   - `keydown` event listener captures the keyboard event.

3. **Dynamic Content**:
   - The innerHTML of the `#insert` div is updated to display a table with the following details:
     - `Key`: The key pressed.
     - `KeyCode`: The numeric keycode of the key.
     - `Code`: The physical location of the key on the keyboard.

## 💡 How It Works

- The app listens for a `keydown` event using `window.addEventListener`.
- When a key is pressed, the `event` object is passed to the callback.
- The relevant details (`key`, `keyCode`, `code`) are extracted from the `event` object and displayed in a dynamically generated table.

## 📋 Import & Run the Project

Follow these steps to import and run the project locally:

1. **Clone the Repository**

   Use the following command to clone the repository to your local machine:

   ```bash
   git clone https://github.com/Maliha-Moon/javascript_code/KeyCode Event Listener.git
  
2. **Open the Project**

Navigate to the project directory and open the `index.html` file in your preferred code editor or directly in a web browser.

3. **Run the Project**

- **Option 1**: Open `index.html` in your browser by double-clicking it.
- **Option 2**: If you have a local server (e.g., Live Server in VS Code), you can run the project using it for a better experience with relative file paths.

4. **Test the Application**

- Press any key on your keyboard.
- The table will dynamically display the key, keycode, and code for the pressed key.

## 🚀 Improvements

- **Add Styling for Different Key Types**: Differentiate between special keys (e.g., Shift, Enter) and regular keys by applying distinct styles or colors.
- **Support for Other Key Events**: Extend the app to support more key events like `keyup` or `keypress` and display their corresponding details.
- **Visual Feedback**: Show a visual representation of the key being pressed (e.g., highlighting the key on a virtual keyboard).
- **Mobile Compatibility**: Improve compatibility with touch devices by adding virtual keyboard support.
- **Support for Non-Printable Keys**: Handle non-printable keys (e.g., Ctrl, Alt) and display more user-friendly labels for them.
- **Localization**: Add support for different languages or layouts by allowing the user to choose a keyboard layout.
- **Accessibility**: Improve accessibility by adding features like screen reader support or keyboard navigation.

