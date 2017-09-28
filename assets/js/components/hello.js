let hello = new Vue({
  el: "#hello-world",
  data: {
    posts: []
  },
  ready: function() {
    let state = this
    fetch("/api/posts")
    .then((response) => response.json())
    .then(function(response) {
      state.posts.push(response.data)
    })
  }
});

export default hello;