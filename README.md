# README

-----

Cacophony is a full-stack clone of text-portion of Discord, the popular messaging application. Cacophony allows a user to make an account or sign in with an existing one in order to live message other users both in servers' channels as well as direct messagining. A user can either create their own server or join an existing public server to start messaging right away. While memebers of a server can live chat, with both editing and deleting functionality, a server's owner can also create channels and edit them to give those messages a place to live. Furthermore, a user can add any user who is part of a server with them to begin live direct messaging them.

[See what all the Cacophony is about!] (https://cacophony-1.herokuapp.com/#/)

Cacophony achieves its functionality through the use of React, Redux, and Javascript on the front end with a Ruby on Rails backend supported by a Postgres Database to give the user a seemless communication experince. To provide the live messaging services, Cacophony utilizes Rail's Action Cables in combination with Redis.






### Technologies
---- 
* React and Redux for FrontEnd state management and rendering
* Javascript to provide the logic of the FrontEnd.
* Ruby on Rails for robust backend logic and datbase management
* Postgres for the database itself
* Webpack and npm to bundle the Javascript Code and manage project dependencies


### Planned Features
----
* Increased Styling
* Increased User Friendliness
* Increased efficienty in backened data calls


### Acknoledgments
----
The author would like to acknowledge that the following were invaluable to understanding and using the concepts that made Cacophony possible:

* [Utilizing Action Cables] https://javascript.plainenglish.io/building-a-simple-live-chat-in-react-with-action-cable-8c2abf7a25b5
* [Deploying Action Cables to Heroku] https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a
* My friends who live tested Cacophony and gave valuable user feedback.
* And finally a huge acknowledgement to Jonathan Wong and Nick Pietrow for keeping me sane throughout this project and giving invaluable advice.
