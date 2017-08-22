class Post {
  constructor(title, body, name, profilePic){
    this.title = title;
    this.body = body;
    this.name = name;
    this.profilePic = profilePic;

    var date = new Date();
    var day = date.getDate();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var hour = date.getHours() + 1;
    var minutes = date.getMinutes();
    this.timestamp = `${month}/${day}/${year} - ${hour}:${minutes}`;

    this.visible = true;
  }
}

export default Post;
