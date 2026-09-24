import './App.css';
import React from 'react';
// import Posts from './Posts';
import Test from './Test';
import User from './User';

class App extends React.Component {
  state = {
    posts: [
      { id: "1", name: "JS Basic",    title: 'Обучение конструкциям JavaScript' },
      { id: "2", name: "JS Advanced", title: 'Обучение расширенным конструкциям JavaScript' },
      { id: "3", name: "React JS",    title: 'Обучение React JS' },
    ],
    snow: true
  };

removePost=(id)=>{
  this.setState({posts:this.state.posts.filter(post=>post.id!==id)})
}

  render() {
    const { posts } = this.state;   
    return (
      <div className="App">
        <button onClick={() =>this.setState({snow:!this.state.snow})}>User</button>
        {this.state.snow ?  <User />:null}
        <Test />
       
        {/* <Posts posts={posts} removePost={this.removePost} />    */}
      </div>
    );
  }
}

export default App;