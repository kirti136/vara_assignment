
# Vara Assignment Frontend

This is a React application for uploading CSV files and displaying their content in a paginated and filterable table. The project features file upload functionality, scrolling, pagination, row and column selection, search, and filtering capabilities.

## Demo Video

 - [Demo Video]()

## Run Locally

Clone the project

```bash
  git clone https://github.com/kirti136/vara_assignment_frontend
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  npm run dev
```

## Features
- **CSV Upload**: Allows users to upload CSV files and parse the data.
- **Scrolling**: Supports scrolling through large datasets.
- **Pagination**: Data is displayed in a paginated format with navigation controls.
- **Row and Column Selection**: Users can select rows and columns to highlight.
- **Search Functionality**: Users can search for specific content within the table.
- **Filters**: Filter data by type (e.g., Petrol, Diesel) and number of seats.

## Components
- **FileUpload**: Handles CSV file uploads.
- **DataTable**: Displays CSV data in a table format with pagination, search, and filtering capabilities, along with row and column selection.
- **SearchInput**: Input component for search functionality.
- **SelectDropdown**: Dropdown component for filtering by type and number of seats.

## Tech Stack
- **React**: JavaScript library for building user interfaces.
- **Vite**: Next-generation build tool that provides a fast development environment and optimized build process.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React-Paginate**: Component for handling pagination in React.
- **PropTypes**: Runtime type checking for React props.
- **PapaParse**: Library for parsing CSV files.
