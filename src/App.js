import React from 'react';
import Comment from './Comment';
function App() {
  return <main>
    <section className='container'>
      <div className='title'>
        <h2>comments</h2>
        <div className='underline'></div>
      </div>
      <Comment />
    </section>
  </main>;
}

export default App;
