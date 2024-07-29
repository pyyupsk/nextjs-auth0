# Next.js Auth0 Integration

A Next.js application with integrated Auth0 authentication. This repository provides a simple example of how to set up Auth0 authentication in a Next.js app, allowing for secure user login and management.

## Features

- **Auth0 Authentication**: Secure user login using Auth0.
- **Next.js Integration**: Seamless integration with Next.js for server-side and static site generation.
- **User Management**: Basic user profile management and session handling.

## Getting Started

To get started with this project, follow the steps below:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- Auth0 Account (sign up at [Auth0](https://auth0.com/))

### Installation

1. **Clone the Repository**

    ```sh
    git clone https://github.com/pyyupsk/nextjs-auth0.git
    cd nextjs-auth0
    ```

2. **Install Dependencies**

    ```sh
    npm install
    # or
    yarn install
    ```

3. **Set Up Environment Variables**

    Create a `.env.local` file in the root directory and add your Auth0 credentials:

    ```env
    AUTH0_SECRET='use [openssl rand -hex 32] to generate a 32 bytes value'
    AUTH0_BASE_URL='your_auth0_base_url'
    AUTH0_ISSUER_BASE_URL='your_auth0_issuer_base_url'
    AUTH0_CLIENT_ID='your_auth0_client_id'
    AUTH0_CLIENT_SECRET='your_auth0_client_secret'
    ```

4. **Run the Development Server**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

    Visit `http://localhost:3000` in your browser to see the application in action.

### Usage

- **Login**: Navigate to the `/api/auth/login` route to initiate authentication.
- **Logout**: Navigate to the `/api/auth/logout` route to log out.
- **Profile**: Access user profile information at `/api/auth/me`.

### Deployment

For deploying your Next.js app with Auth0, you can use Vercel, Netlify, or any other hosting provider that supports Next.js. Ensure you configure environment variables appropriately for the production environment.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

### Acknowledgments

- [Auth0](https://auth0.com/) for the authentication service.
- [Next.js](https://nextjs.org/) for the framework.
