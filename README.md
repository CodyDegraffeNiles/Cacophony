# Cacophony

-----

Cacophony is a Fullstack clone of the text portion of the popular communication App, Discord. Cacophony allows a user to make an account or sign in with an existing one in order to live message other users both in servers' channels as well as through direct messages. A user can either create their own server or join an existing public server to start messaging right away. While memebers of a server can live chat, with both editing and deleting functionality, a server's owner can also create/edit channels to give server messages a place to live as well as organize the many conversations happening between members. 

[See what all the Cacophony is about!] (https://cacophony-1.herokuapp.com/#/)

Cacophony achieves its functionality through the use of React, Redux, and Javascript on the frontend with a Ruby on Rails backend connected with a Postgres Database to give the user a seemless communication experince. To provide the live messaging services, Cacophony utilizes Rail's Action Cables in combination with redis. 

### Action Cables






### Technologies Implemented
---- 
* React and Redux for frontend state management and component rendering
* CSS to provide the stlying necessary for the react components.
* Javascript to provide the logic of the frontend.
* Ruby on Rails for robust backend logic and datbase management
* PostgreSQL for the database 
* Heroku for hosting and production

### Planned Features
----
* Increased Styling and User Interface
* Increased efficency in backened database queries
* Start a dm through seraching a username and number tag.
* Group Dm Conversations


### Acknoledgments
----
The author would like to acknowledge that the following were invaluable to understanding and using the concepts that made Cacophony possible:

* [Utilizing Action Cables] https://javascript.plainenglish.io/building-a-simple-live-chat-in-react-with-action-cable-8c2abf7a25b5
* [Deploying Action Cables to Heroku] https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a
* Images were sources from Discord 
* My friends who live tested Cacophony and gave valuable user feedback.
* And finally a huge acknowledgement to Jonathan Wong and Nick Pietrow for keeping me sane throughout development and giving invaluable advice.
