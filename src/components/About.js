import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () => {
  return (
    <div className='container'>
      <h4 className='center'>About</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
        ducimus quis fugiat deleniti consequatur ut. Quas, molestias. Inventore,
        totam labore.
      </p>
    </div>
  )
}

export default Rainbow(About)
