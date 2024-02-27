# Account management

## Actors:

- [Senior User](../personas/senior-user.md)
- [Caretaker](../personas/caretaker.md)
- [Activity Coordinator](../personas/activity-coordinator.md)

## User Story:

As an actor, I want the ability to create and manage my account to access and engage with the application.

## Functional specifications:

[1. User Registration](#1-user-registration)
[2. Profile Management](#2-profile-management)
[3. Emergency contacts](#3-emergency-contacts)

### 1. User Registration:

This feature enables the actors to register with the application.

**Requirements:**

- Users must provide essential information during the registration process.
- The system should validate the uniqueness of the email address.
- Passwords must meet security criteria, including minimum length and complexity.
- Upon successful registration, the system should generate a unique user ID, authenticate the user, and send an account verification email.
- Upon successful account verification, the actor should have full access to the application.

**UI Components and Functions:**

Page: Personal information

> <img href="#" alt="UI Design here">

> Table here

Page: Address information

> <img href="#" alt="UI Design here">

> Table here

**Validation Criteria:**

- Actors fill in the form with valid information.
- Inputs meet validation rules.
- Pressing the registration button initiates the registration process.
- Successful registration results in a generated user ID and authentication.

### 2. Profile Management:

This feature allows authenticated actors to modify or delete their account information.

**Requirements:**

- Users can input and update their account details such as address, age, and any additional information.
- The system must validate and store the user's account information securely.
- Users should have the option to upload a profile picture.
- Changes to the account information should be reflected immediately upon submission.

**UI Components and Functions:**

Page: Account Information

> <img href="#" alt="UI Design here">

**Validation Criteria:**

- Input validation for any modification and additional information.
- Profile picture upload functionality.
- Real-time updating of profile information.

### 3. Emergency Contacts:

This feature allows users to view and update their emergency contacts.

**Requirements:**

- Users can add, edit, or remove custom emergency contacts from their profile.
- Each emergency contact must have a name, phone number, and/or relationship to the user.
- The system should validate the format and accuracy of the phone number.
- Users should be able to designate a primary emergency contact.
- Emergency contact information updates should be reflected in real time.

**UI Components and Functions:**

Page: Emergency Contacts

> <img href="#" alt="UI Design here">

**Validation Criteria:**

- Contact information validation (name, phone number, relationship).
- Real-time reflection of changes in the contact list.

**Checklist:**

- [ ] Register User

  - Actors fill in the form with valid information.
  - Inputs meet validation rules.
  - Pressing the registration button initiates the registration process.
  - Successful registration results in a generated user response with ID and authentication.

- [ ] Verify Account

  - Input validation for any modification and additional information.
  - Profile picture upload functionality.
  - Real-time updating of profile information.
  - [ ] Manage Profile Information

- [ ] Manage Emergency Contacts

  - Contact information validation (name, phone number, relationship).
  - Real-time reflection of changes in the contact list.
