# Redis-Visitor-Count

A simple Node.js application using Express and Redis to track the number of visitors to the server.

## Prerequisites

- Node.js
- Redis server running locally or accessible remotely

## Setup & Installation

1. Clone this repository:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install the required Node.js packages:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node <your-script-name>.js
    ```

## Code Overview

The application establishes a connection to the Redis server and listens to incoming HTTP requests on the specified port. Every time a user visits the root URL (`/`), the visitor count is incremented in Redis and displayed back to the user.
