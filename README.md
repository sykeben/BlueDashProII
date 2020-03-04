# BlueDashProⅡ

A successor to [BlueDashPro](https://github.com/sykeben/BlueDashPro), a dashboard for viewing FRC match results.

## Road Map

Being a ground-up rebuild, BDPⅡ is going to take some time to be brought to "production". All major steps and tasks will be listed here in order to keep me on track. The below checklist is not final but will be updated throughout the development process.

- [x]  Road map Creation
- [x]  Library Installation
- [x]  Backend Creation
- [x]  Frontend Creation
- [ ]  Finalizations

## BlueLib

[BlueLib](backend/bluelib.js) is a simple library of functions that will allow easy acquisition of data from The Blue Alliances' API. Once completed, it will be moved to it's own repository.

## Important Notes

- As of now, it seems like the dash takes around 3 updates to fully initialize and begin pulling all the data at the same time. This may be due to the way it updates and pulls match IDs without regard to order.
- The transitions aren't as nice as they could be, but it's fine for now.
- It cannot autofetch event keys at the moment.

## Special Thanks

- **@TechplexEngineer**: fixed time issues by converting TBA times from Unix (seconds) to Javascript (milliseconds).

# [View BDPⅡ Here](https://sykeben.github.io/BlueDashProII)
