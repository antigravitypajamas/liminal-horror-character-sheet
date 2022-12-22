# Liminal Horror Character Sheet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## To run locally
First be sure you have NodeJS, Angular, and git installed. 

When you clone the repository, open up the project in your favorite editor and in the terminal run `npm i`.

The app is hosted via GitHub Pages [here](https://antigravitypajamas.github.io/liminal-horror-character-sheet/).

## Known Issues
- The "Notes" section doesn't scrub the input before storage
- Stats don't properly default to 0 on first load, forcing the user to fill out the entire sheet before saving
- Saving does not generate a message notifying the user that their character has been saved successfully

## Resolved issues
- Stability is no longer a required field
- Name and Background are required fields
- The Notes section Preview mode works
- Stat validation makes it impossible to save negative values

## Upcoming work
- Status notifications (e.g., successful save of your sheet, or for example you are reduced to 0 HP, a toastr message will appear to prompt you to roll a d20 for fallout, etc.)
- Clear validation messaging
- Finishing work on Notes (e.g., XSS prevention, etc.)
- Disabling inventory slots when Fatigued
- Dark theme


## Future future work
- Responsive behavior for devices
- User authentication
- Backend storage for multiple characters
- Refactor components for reusability

## Haiku
entering this space\
it feels familiar and yet\
there is something **wrong**

## Legal
Liminal Horror Character Sheet is an independent production by antigravity.pajamas and is not affiliated with Goblin Archives LLC. It is published under the Liminal Horror Third Party License.

Liminal Horror is copyright by Goblin Archives LLC.

Liminal Horror can be purchased [here](https://goblinarchives.itch.io/liminal-horror).

Modules by antigravity.pajamas can be found [here](https://antigravitypajamas.itch.io/)

Consider making a donation to support this project [here](https://ko-fi.com/antigravitypajamas).
