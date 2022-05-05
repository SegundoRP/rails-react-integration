import React from 'react'

const Restaurants = ({restaurants}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>

          {
            restaurants.map((restaurant) => {
              return <tr>
                <td>{restaurant.id}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                </tr>
            })
          }

      </tbody>
    </table>
  )
}

export default Restaurants
