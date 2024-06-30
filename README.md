# Mentorship Program Form

This project is a dynamic, interactive, and engaging mentorship program application form built with React. The form is designed to be modern and user-friendly, incorporating various animations and validations to enhance user experience.

## Project Objective

The primary objective of this project is to provide a smooth and interactive experience for users applying to the "CHARTING YOUR COURSE" mentorship program. The form collects detailed information from applicants and includes multiple sections for personal information, background information, career goals, skills, and additional info.

## Features

- **Dynamic Sections:** The form is divided into multiple sections that users can navigate through using "Next" and "Previous" buttons.
- **Form Validations:** Each section has validation checks to ensure that the necessary information is provided.
- **File Upload:** Users can upload their resumes in PDF format.
- **Personalized Prompts:** A Python program reads data from a CSV file and generates personalized prompts.

## Prerequisites

To run this project, you need to have the following installed on your system:

- Node.js
- npm (Node Package Manager)
- Python (for the CSV processing script)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/syed-ali-jibran-rizvi/g5InfoTech.git

    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Ensure you have the background image in the `public` directory:
    - `background.png`

## Running the Application

1. Start the React development server but ensure you are in the folder containing server.js:
    ```sh
    node server.js
    ```

2.  Start the React UI form but ensure you are in the folder containing Form.js:
    ```sh
    npm start
    ```

2. The application will be available at `http://localhost:3000`.

## Python Program for Generating Personalized Prompts

There is a Python program included in the project that reads data from a CSV file and generates personalized prompts for users. To run the Python script:

1. Navigate to the directory containing the script.
2. Ensure you have the necessary Python libraries installed
3. Run the script:
    ```sh
    python promptsgen.py
    ```

## Usage

1. Open the application in your web browser.
2. Navigate through the form sections using the "Next" and "Previous" buttons.
3. Fill in the required information in each section.
4. Upload your resume in PDF format in the last section.
5. Submit the form.

## Issues

If you encounter any issues or have questions, please feel free to open an issue on the GitHub repository or contact the project maintainer.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

