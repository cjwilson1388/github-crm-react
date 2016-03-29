import React from 'react';

class UserProfile extends React.Component {
  render(){
    return (
        <div>
          {this.props.bio.avatar_url && <li className="list-group-item"><img src={this.props.bio.avatar_url} className="img-rounded img-responsive" /></li>}
          {this.props.bio.name && <li className="list-group-item">Name: {this.props.bio.name}</li>}
          {this.props.bio.login && <li className="list-group-item">Username: {this.props.bio.login}</li>}
          {this.props.bio.email && <li className="list-group-item">Email: {this.props.bio.email}</li>}
          {this.props.bio.company && <li className="list-group-item">Company: {this.props.bio.company}</li>}
          {this.props.bio.location && <li className="list-group-item"> {this.props.bio.location}</li>}
          {this.props.bio.public_repos && <li className="list-group-item">Number of Public Repos: {this.props.bio.public_repos}</li>}
          {this.props.bio.followers && <li className="list-group-item">Number of Followers: {this.props.bio.followers}</li>}
          {this.props.bio.blog && <li className="list-group-item"><a href={this.props.bio.blog}> Personal Blog or Website</a> </li>}
          {this.props.bio.hireable && <li className="list-group-item">Hireable:  <span className="glyphicon glyphicon-thumbs-up"></span></li>}
        </div>
      )
    }
}
UserProfile.propTypes = {
  username: React.PropTypes.string.isRequired,
  bio: React.PropTypes.object.isRequired
}

export default UserProfile

/*
var loginButton;
if (loggedIn) {
  loginButton = <LogoutButton />;
} else {
  loginButton = <LoginButton />;
}


{
  "login": "cjwilson1388",
  "id": 1707932,
  "avatar_url": "https://avatars.githubusercontent.com/u/1707932?v=3",
  "gravatar_id": "",
  "url": "https://api.github.com/users/cjwilson1388",
  "html_url": "https://github.com/cjwilson1388",
  "followers_url": "https://api.github.com/users/cjwilson1388/followers",
  "following_url": "https://api.github.com/users/cjwilson1388/following{/other_user}",
  "gists_url": "https://api.github.com/users/cjwilson1388/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/cjwilson1388/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/cjwilson1388/subscriptions",
  "organizations_url": "https://api.github.com/users/cjwilson1388/orgs",
  "repos_url": "https://api.github.com/users/cjwilson1388/repos",
  "events_url": "https://api.github.com/users/cjwilson1388/events{/privacy}",
  "received_events_url": "https://api.github.com/users/cjwilson1388/received_events",
  "type": "User",
  "site_admin": false,
  "name": "CJ Wilson",
  "company": "eBay",
  "blog": "http://calebjwilson.com",
  "location": "Salt Lake City, Utah",
  "email": "cjwilson1388@gmail.com",
  "hireable": true,
  "bio": null,
  "public_repos": 55,
  "public_gists": 0,
  "followers": 3,
  "following": 2,
  "created_at": "2012-05-05T06:43:37Z",
  "updated_at": "2016-03-08T04:29:35Z"
}
*/
