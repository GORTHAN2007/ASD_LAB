# Express.js MVC Architecture (ASD Lab)

A refactored Express.js REST API demonstrating clean **Layered MVC (Model-View-Controller)** architecture and separation of concerns.

## 📁 Project Structure

```text
MVC/
├── src/
│   ├── index.js                  # Application entry point & server setup
│   ├── middleware/
│   │   └── logger.js             # Request logging middleware
│   ├── routers/
│   │   └── userRouter.js         # Route endpoints mapping
│   ├── controllers/
│   │   └── userController.js     # Request/response handling
│   ├── services/
│   │   └── userService.js        # Business logic & filtering
│   └── database/
│       └── userDatabase.js       # File data access layer
├── users.json                    # User records data source
├── books.json                    # Books records data source
└── package.json
```

## 🏗️ Architecture Layers

- **Router (`src/routers/`)**: Defines URL paths and routes them to appropriate controller methods.
- **Controller (`src/controllers/`)**: Extracts request parameters/query/body and returns HTTP status codes and JSON responses.
- **Service (`src/services/`)**: Implements business rules, validation, and data filtering (e.g. `minAge`).
- **Database (`src/database/`)**: Handles pure file reading (`fs.readFile`) from JSON storage.
- **Middleware (`src/middleware/`)**: Intercepts requests for logging (`logger.js`).
