import './App.css';
import React from 'react';
import Posts from './Posts';

class App extends React.Component {
  state = {
    posts: [
      { id: "1", name: "JS Basic",    title: 'Обучение конструкциям JavaScript' },
      { id: "2", name: "JS Advanced", title: 'Обучение расширенным конструкциям JavaScript' },
      { id: "3", name: "React JS",    title: 'Обучение React JS' },
    ]
  };

removePost=(id)=>{
  this.setState({posts:this.state.posts.filter(post=>post.id!==id)})
}

  render() {
    const { posts } = this.state;   
    return (
      <div className="App">
        <Posts posts={posts} removePost={this.removePost} />   
      </div>
    );
  }
}

export default App;