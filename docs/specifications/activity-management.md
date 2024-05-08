# Account management

## Actors

- [Senior User](../personas/senior-user.md)
- [Activity Coordinator](../personas/activity-coordinator.md)

## User Story

As an Activity Coordinator, I want the option to schedule and manage group activities and events, tracking RSVPs, and communicating updates to participants, to facilitate seamless coordination and participation.

## Functional specifications

[1. Event creating](#1-event-creation)
[2. RSVP Tracking](#2-rsvp-tracking)
[3. Emergency contacts](#3-emergency-contacts)

### 1. Event creation

This feature enables Activity Coordinator to create new events or activities.

**Requirements:**

- Activity planners must be able to create new events by providing event details such as name, description, date, time, and location.
- The event creation form should include validation checks to ensure that all required fields are filled out correctly.
- Activity planners should have the option to categorize events based on type (e.g., fitness, arts, social).

**UI Components and Functions:**

Page: Event creation

> <img href="#" alt="UI Design here">

> Table here

**Validation Criteria:**

- Actors fill in the form with valid information.
- Inputs meet validation rules.
- Pressing the create button initiates the creation process.
- Successful registration results in a generated user ID and authentication.

### 2. RSVP Tracking

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

### 3. Emergency Contacts

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

- [ ] Event creation

- Activity planners can create new events with all required details filled out accurately.
- Validation checks is implemented to verify the completeness and correctness of event creation forms.

- [ ] Verify Account

  - Input validation for any modification and additional information.
  - Profile picture upload functionality.
  - Real-time updating of profile information.
  - [ ] Manage Profile Information

- [ ] Manage Emergency Contacts

  - Contact information validation (name, phone number, relationship).
  - Real-time reflection of changes in the contact list.
