# Star Wars Characters Project

This project is a web application that lists characters from the Star Wars universe and provides a feature to filter them by their homeworld.

## Features

- **Show/Hide Characters**: A button to show or hide character cards.
- **Filter by Homeworld**: An option to filter characters by their homeworld using radio buttons.
- **Dynamic Character Cards**: Characters are displayed dynamically using JSON data.

## Technologies Used

- **HTML**: Used for the structure of the page.
- **CSS**: Used for styling the page. Bootstrap is used for styling and layout.
- **JavaScript**: Used for dynamic content creation and filtering functionality.
- **Bootstrap**: Used for buttons and form elements.

## Installation

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in your browser.

## File Structure

- `index.html`: The main HTML file.
- `style.css`: CSS file for page styles.
- `script.js`: JavaScript file for functionality.
- `images/`: Folder containing character image files.

## Usage

### Show/Hide Characters

- Click the **Show Characters** button: Character cards will be displayed.
- Click the **Hide Characters** button: Character cards will be hidden.

### Filter by Homeworld

1. Click the **Show Characters** button to display the character cards.
2. Click the **Filter** button to display filter options.
3. Select a radio button option to filter characters by their homeworld.

## Development

### Step-by-Step Explanation

1. **Preparing the Data Set**:
   - We defined the character data as an array named `characters`.
   - Processed homeworld information through the steps `homeworldsRaw`, `homeworldsUnique`, and `homeworldsLowercase`.
   
2. **Creating Dynamic Content**:
   - Character cards are dynamically created using the `displayCharacters` function.
   - Homeworld filters are created as radio buttons within the `homeworldFilters`.

3. **Button Functionality**:
   - The `toggleButton` and `filterButton` provide functionality to show/hide characters and display filter options.
   - Filtering characters by the selected homeworld is enabled using a change event listener on the radio buttons.

### Requirements for Development

- Any modern web browser.
- A simple text editor (e.g., Visual Studio Code) or IDE.

## Contributing

If you would like to contribute, please submit a pull request or open an issue. We welcome all feedback.
