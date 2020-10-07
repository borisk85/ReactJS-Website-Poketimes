import React from 'react'

const Rainbow = WrappedContainer => {
  const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const className = randomColor + '-text'

  return () => {
    return (
      <div className={className}>
        <WrappedContainer />
      </div>
    )
  }
}

export default Rainbow
