import { useState } from "react"

const ListRender = () => {

    const [list] = useState(["Phelipe", "Dudu", "Guilherme", "Dudu"])

    const [users, setUsers] = useState([
      {id: 1, name: "Phelipe", age: 20},
      {id: 2, name: "Dudu", age: 19},
      {id: 3, name: "Lara", age: 15}
    ])

  return (
    <div>

        {/* 4 - render sem key */}
          <ul>
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

        {/* 5 - render com key */}
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.age} anos
              </li>
            ))}
          </ul>

    </div>
  )
}

export default ListRender