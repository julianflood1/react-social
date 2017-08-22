class Post {
  constructor(title, body, name, profilePic){
    this.title = title;
    this.body = body;
    this.timestamp = new Date();
    this.name = name;
    this.profilePic = profilePic;
  }
}

export default Post;
