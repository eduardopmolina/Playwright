// variables.ts

// URLs
const BASE_URL = 'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html';

// User credentials
const USER_EMAIL = 'admin@admin.com';
const USER_PASSWORD = 'admin12';
const USER_EMAIL2 = 'testuser@email.com'
const USER_PASSWORD2 = 'F@#EOzvFj5';

export const CODILITY_USER_EMAIL = 'eduardopmolina@hotmail.com';
export const CODILITY_USER_PASSWORD = 'F@#EOzvFj5';

export const CODILITY_URL = 'https://codility-frontend-prod.s3.amazonaws.com/media/task_static/qa_login_page/9a83bda125cd7398f9f482a3d6d45ea4/static/attachments/reference_page.html';

const CODILITY_CREDENTIALS = {
  email1: 'eduardopmolina@hotmail.com',
  password: 'F@#EOzvFj5'
};

// Element selectors
export const CODILITY_SELECTORS = {
  loginEmail: 'Your login Email',
  loginPassword: 'Your login Password',
  loginButton: 'button[id=login-button]',
  fraudPatternTab: { role: 'tab', name: 'Fraud Pattern' },
  suspectedFraudTab: { role: 'tab', name: 'Suspected Fraud' },
  fraudInPercentageTab: { role: 'tab', name: 'Fraud in %' },
  exportDataButton: { role: 'button', name: 'Export Data' },
  exportTableButton: { role: 'button', name: 'Export table' },
  emailInput: '#email-input',
  passwordInput: '#password-input', // Replace with the actual password input selector
  dashboardElement: '#dashboard',  // Or another element that confirms successful login
  errorMessageText: 'You shall not pass! Arr!', // Replace with the actual error message text
  errorMessageEmptyCredentials: 'Empty Credentials',
  validloginmessage: "Valid Login!",
  emptyemail: "Email is required",
  emptypwd: "Password is required", 
};

export const INVALID_CREDENTIALS = {
  invalidEmail: 'invalid@email.com',
  invalidPassword: 'incorrectPassword',
};

// Timeouts
const TIMEOUTS = {
  longOperation: 400000, // Custom timeout for long operations
};




