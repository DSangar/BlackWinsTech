# BlackWinsTech

## Description
This project is a backend API built using Node.js and Express.js for managing a simple contact list. It allows users to create, read, update, and delete contacts stored in a MongoDB database. The API is designed to be lightweight, efficient, and easily extendable, with built-in validation and error handling.

## Features
- Create, update, and delete contacts.
- Data validation using express-validator.
- Proper error handling for invalid requests.
- MongoDB integration for persistent storage.
- Scalable and modular architecture.

## Backend Setup & Running Instructions
1. Clone the repository:
   ```
   git clone https://github.com/DSangar/BlackWinsTech.git
   ```
2. Navigate to the backend directory:
   ```
   cd BlackWinsTech
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up environment variables by creating a `.env` file and adding necessary configurations.
5. Start the backend server:
   ```
   npm start
   ```
   *(or the relevant command for your setup)*

## API Endpoints Overview
- `GET - /contact/get` - Fetches all resources.
- `POST - /contact/post` - Creates a new resource.
- `GET - /contact/get/:id` - Fetches a specific resource.
- `PUT - /contact/put/:id` - Updates a specific resource.
- `DELETE - /contact/delete/:id` - Deletes a specific resource.
  
## Technology Stack

Framework: Node.js with Express.js for building the backend.

Database: MongoDB .

Authentication: Simple API without authentication for this task.

Error Handling: Returns appropriate error messages for invalid requests (e.g., contact not found, missing fields).

Data Validation: Uses validation express-validator to ensure input data is valid.

## Thought Process & Design Considerations
- **Scalability:** Designed to support modular components, making it easy to add new features.
- **Security:** Utilized No authentication, data validation to ensure security.
- **Performance:** Implemented caching and optimized database queries for efficiency.
- **Maintainability:** Used a clean architecture pattern to ensure future maintainability.

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request


## Contact
For any inquiries, contact sangaralingam1512@gmail.com  or open an issue.

