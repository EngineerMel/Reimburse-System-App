# Reimbursement System

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

I created an expense reimbursement system UI interface that will manage the process of reimbursing employees for expenses incurred while on company time. All employees in the company can login and submit requests for reimbursement and view their past tickets and pending requests. Finance managers can log in and view all reimbursement requests and past history for all employees in the company. Finance managers are authorized to approve and deny requests for expense reimbursement. This project will connect to my Reimbursement API.

### Technologies Used

* React- an open-source JavaScript library that is used for building user interfaces
* VSCode - awesome web-based text editor
* Reactstrap/Bootstrap - great UI boilerplate for modern web apps
* Node - evented I/O for the backend
* Express - fast node.js network app framework 
* Trello - tool for project management and task management
* AWS EC2 & S3 - Used for configuration and project deployment 

### Installation Steps

Install the dependencies and devDependencies and start the server.

```sh
$ cd ReimbursementSystemUI
$ npx create-react-app reimburse --typescript
$ npm install react-router react-router-dom @types/react-router @types/react-router-dom
$ npm install bootstrap reactstrap @types/reactstrap
$ npm start
```

### User Stories 

 - As a User, Admin, or Finance Manager I want to be able to Login so that I can submit a reimbursement request.
 - As a Finance Manager, I want to review all user information so that I know who has submitted a reimbursement request.
 - As a Finance Manager, I want to have the ability to review a specific user so that I don't have to look through an entire list of users
 - As a Admin, I want to update a user's account information so that I can keep up to date with changes made within the system
 - As a Finance Manager, I want to find the status of a reimbursement request so that I can see what request has been Approved, Denied, or Pended
 - As a Finance Manager, I want to find a reimbursements based on a specific user so that I can filter out which reimbursement request I would like to review
 - As a Admin or User, I want to review all of my own reimbursement requests made so that I am aware of its status
 - As a Finance Manager, I want to update a reimbursement request so that I can either Approve, Deny, or keep it as pending.
 

### Unsolved Problems
- Using JSON Web Tokens (JWTs) instead of Session Storage
- Creating a User by adding a registration form
