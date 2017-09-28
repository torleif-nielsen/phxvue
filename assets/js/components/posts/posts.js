let posts = new Vue({
  el: '#posts',
  data: {
    posts: [{title: "Test", body: "Initializing data"}]
  },
  beforeMount: function() {
    let state = this
    fetch("/api/posts")
    .then((response) => response.json())
    .then((response) => {
      state.posts = response.data
    })
  }
})

export default posts;