# Cacophony

-----

Cacophony is a Fullstack clone of the text portion of the popular communication App, Discord. Cacophony allows a user to make an account or sign in with an existing one in order to live message other users both in servers' channels as well as through direct messages. A user can either create their own server or join an existing public server to start messaging right away. While memebers of a server can live chat a server's owner can also create/edit channels to give server messages a place to live as well as organize the many conversations happening between members. 

[See what all the Cacophony is about!](https://cacophony-1.herokuapp.com/#/)


### Key Features

#### Live Chat

Users can chat in real time through action cables. This is achieved by utilzing React lifc cycle methods and action cablesass. When a componet mounts, a cable subscription is set up, when the component is updated, the subscrpition is unsubscriped and then resubscried with the new params, and finally when the component unomunts the subscription is removed.

```JavaScript
  componentDidMount(){
    this.props.fetchChannel(this.props.channelId);
    this.subscribe()
  }
  
 componentDidUpdate(prevProps){
  // Conditions Checking if component did update
  
      this.unsubscribe();
      this.subscribe();
      // Refetch Channel to make sure the proper messages are displayed both on refresh of the page and 
      // when channels are changed
      this.props.fetchChannel(this.props.match.params.channelId)
 }
 
  componentWillUnmount(){
    this.unsubscribe()
  }
  
```

#### Users can create servers to message

The trickiest part of creating servers was having the app land on the right page after the server was created, i.e., push to the server's first channel. However, before the backend creates the server, the frontend cannot reroute properlby as it does know the id of the new server nor the id  of the server's first channel. To solve this problem, Cacophony utlizes the promise of the createServer function to wait until after the server is created to properly push the frontend with the reponse data from the server creation.


``` JavaScript

   // In the server form component. function handles the submitting of the form
  handleSubmit(e){
    e.preventDefault();
    let that = this;
    // action = create server
    this.props.action(this.state).then(function(action){
      let server  = action.server.server
      return that.props.history.push(`/servers/${server.id}/${server.firstChannelId}`);
    });
  }

```


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
* Start a dm through seraching a username and number tag.
* Group Dms
* Search for Servers by Name

### Acknoledgments
----
The author would like to acknowledge that the following were invaluable to understanding and using the concepts that made Cacophony possible:

* [Utilizing Action Cables] https://javascript.plainenglish.io/building-a-simple-live-chat-in-react-with-action-cable-8c2abf7a25b5
* [Deploying Action Cables to Heroku] https://medium.com/swlh/deploying-a-rails-react-app-with-actioncable-to-heroku-cb5d42f41a2a
* Images were sources from Discord 
* My friends who live tested Cacophony and gave valuable user feedback.
* And finally a huge acknowledgement to Jonathan Wong and Nick Pietrow for keeping me sane throughout development and giving invaluable advice.
