// devDependecy => Dependency used at development time

for installing simple production dependency -- npm i dependency_name
for installing devDependency(Development dependency) -- npm i -D dependency name(nodemon,prettier)

Frequently Used Commands -- 

1. To make a file
    a.echo. > filename.extension
    b.type nul > filename.extension
    c. To delete a file -> del filename.extension

2. To make a dir -> mkdir dirName
   To delete a dir -> rmdir dirName

3. To clear command -> cls

4. To rename file name -> ren older_file_name new_file_name

5. CD Commands --
   a. Change to a Specific Directory -> cd path/to/directory
   b. Move back to the previous Directory -> cd ..
   c. Change Drive -> D:
   d. Move to root Directory -> cd \
   d. Display Current Directory -> cd
   e. Navigate to directory with Spaces(If a folder name contains spaces) -> cd "spaced_filename"
   f. to make multiple dir at a time -> 'file1', 'file2' , 'file3' | ForEach-Object { mkdir $_ }

6. ls/dir -> list all directory


++++++++++++++++++++++++ About env file ++++++++++++++++++++++++++++++++++

An .env file is used to store environment variables for your application. It provides a simple way to manage configuration settings, such as API keys, database credentials, or application settings, without hardcoding them directly into your code.

Purpose of .env File ---

    1. Configuration Management: Keeps sensitive information like passwords, keys, and URLs separate from the source code.

    2. Environment-Specific Settings: Allows different configurations for development, testing, staging, and production environments.

    3. Security: Prevents exposing sensitive data in your codebase, especially when using version control (e.g., Git).


    4. Ease of Maintenance: Centralizes configuration settings, making it easy to update without modifying the code.

Example of .env File ---

# Database configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_password

# API keys
API_KEY=abcd1234xyz

# Application settings
APP_ENV=development
APP_PORT=3000

How .env File Works ---

1. Loading the .env File:

    Many programming languages and frameworks have libraries to load .env files (e.g., dotenv in Node.js, Python).

    Node.js Example: Install the dotenv package:

    npm install dotenv
    Load variables in your code:
            require('dotenv').config();
            console.log(process.env.DB_HOST); // Output: localhost


2. Accessing Environment Variables:
    In most languages, environment variables can be accessed using a built-in method or library (e.g., process.env in Node.js).

---

Best Practices

1. Exclude .env from Version Control: Add .env to .gitignore to prevent it from being pushed to repositories:
.env

2. Use Defaults: Provide fallback values in your code for robustness:
const PORT = process.env.APP_PORT || 3000;

3. Use Separate Files for Different Environments: Example: .env.development, .env.production.

Statements of 1 lakh -- 
1. There can be problem while using database , so always use try ,catch 
2. Database is always in another continent(it means it will take time to response , so use async / await)


Key Differences:(./ vs ../)

Feature                	./	                           ../
Path Reference	  Current directory	               Parent directory
When to Use 	  Same or subdirectory import    Import from higher directory
Relative Level	  No movement up the hierarchy	  Moves up one or more levels

Javascript do not provide file Handling properties
File Handling properties is provided by node js

MangoDB stores data in form of BSON(Binary JSON)

Files , videos, image  are not directly uploaded on MongoDB database , firstly it is uploaded on a third party website (likne AWS, Cloudinary) after that this third parties provides us a url , this url now upload on MongoDB --
We can directly add a video on MongoDB but it is not good practice (we use 3rd party do this)



----------------- How Refresh Tokens Work -------------------
Login:  
    The user logs in and provides valid credentials.
    The server issues both an access token and a refresh token.
Access Protected Resources:
    The client sends the access token in the Authorization header to access protected APIs.
    The server validates the token before granting access.
Access Token Expiry:
     When the access token expires, the client uses the refresh token to request a new access token from the authentication server.
Token Renewal:
     The server validates the refresh token.
    If valid, it issues a new access token (and optionally a new refresh token).
Token Storage and Security:
    Access tokens are stored in memory or client-side storage (e.g., browser's localStorage/sessionStorage).
    Refresh tokens are stored more securely, such as in HTTP-only cookies, to prevent client-side access.

Example Scenario ---

Without Refresh Token:
    A user logs into an application.
    The server issues an access token valid for 1 hour.
    After 1 hour, the user must log in again to obtain a new token.
With Refresh Token:
    A user logs into an application.
    The server issues:
    An access token valid for 1 hour.
    A refresh token valid for 7 days.
    When the access token expires, the client automatically uses the refresh token to request a new access token.
    The user does not need to log in again, providing a seamless experience.

--------------------------------  How bcrypt Works  -------------------------
Bcrypt -> it is a simple library used to hashed the password

Generate a Salt:
    A random string is generated to make each hash unique, even for identical passwords.
    Example: Password "password123" and salt "randomSalt1" will produce a unique hash different from the same password with another salt.

Hash the Password:
    Combines the salt with the password and applies multiple rounds of hashing (configurable work factor).

Store the Salt and Hash:
    Both the salt and the resulting hash are stored together. The salt is needed to verify the password later.

Verify the Password:
    When a user logs in, bcrypt uses the stored salt and the submitted password to recompute the hash and compares it to the stored hash.

------------- Example to Understand the Difference --------
Scenario: A user logs in to an e-commerce website.

Using Session:
    User enters their credentials and logs in.
    The server creates a session for the user and stores their information (e.g., user ID, roles) in a session store (e.g., database or memory).
    A session ID is sent to the client in a cookie.
    For every subsequent request, the client sends the cookie with the session ID.
    The server checks the session store to retrieve user data.
   
Issues:
    If multiple servers are used, session data must be shared across them.
    Relies on the server to maintain the session.

Using JWT(Bearer Token):
    User enters their credentials and logs in.
    The server generates a JWT containing user information (e.g., user ID, roles) and signs it with a secret key.
    The token is sent to the client and stored in localStorage or cookies.
    For every subsequent request, the client sends the token in the Authorization header or cookie.
    The server verifies the token using its signature and extracts the user information.
Benefits:
    No need for server-side storage of session data.
    Stateless and easy to scale.

----------------- How to generate the token --------------
Generating the token --
    The jwt.sign method takes three parameters:
        payload: The data you want to include in the token (e.g., user details).
        secret: A secret key used to sign the token.
        options: Additional settings like token expiration (expiresIn).

Verifying the Token --
    The jwt.verify method validates the token using the same secret key.
    If the token is valid, it decodes the payload and returns it.
    If invalid (e.g., expired, tampered), it throws an error.

Simply entering a URL like http://localhost:8000/api/v1/users/register into a browser’s search bar will send a GET request by default, not a POST request. A POST request requires additional data (e.g., a request body) and cannot be executed directly through the browser's address bar.

Why You Can't Send a POST Request Directly via a URL
    POST requests often involve sending data in the body of the request (e.g., JSON or form data).
    The browser's address bar is designed only for GET requests.

