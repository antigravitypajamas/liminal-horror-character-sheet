# Liminal Horror Character Sheet

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.2.

## To run locally
First be sure you have NodeJS, Angular, and git installed. 

When you clone the repository, open up the project in your favorite editor and in the terminal run `npm i`.

The app is hosted via GitHub Pages [here](https://antigravitypajamas.github.io/liminal-horror-character-sheet/).

## Known Issues
- Inventory items do not remain disabled after refresh even though Fatigue is still checked
- The "Notes" section doesn't scrub the input before storage

## Resolved issues 
- Stability is no longer a required field
- Name and Background are required fields
- The Notes section Preview mode works
- Stat validation makes it impossible to save negative values
- Base stats default to 0 on first load
- Status notifications service stubbed in. Now when you save you will be notified of success. Also, if your Modified HP drops to 0 you will be notified to roll for Fallout.
- Inventory slots become disabled when the corresponding Fatigued checkbox is checked

## Upcoming work
- Clear validation messaging
- Finishing work on Notes (e.g., XSS prevention, etc.)
- Dark theme
- Responsive behavior for devices

## Future future work
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
