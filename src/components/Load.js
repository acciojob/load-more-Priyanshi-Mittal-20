import React, { useState } from 'react'

const Load = ({ items }) => {

  const [visible, setVisible] = useState(0)

  function handleMore() {
    setTimeout(() => {
      setVisible((prev) => prev + 10)
    }, 0)
  }

  return (
    <div>

      {visible > 0 && (
        <ul>
          {items.slice(0, visible).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      <button onClick={handleMore}>
        Load More
      </button>

    </div>
  )
}

export default Load