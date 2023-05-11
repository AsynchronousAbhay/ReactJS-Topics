import { useContext } from 'react'
import { User } from "../context/Usercontext";

const Show = () => {
    const [Users, setUsers] = useContext(User)

    return (
        <div className='list-group mt-4'>
            {Users.map((User) => {
                return (
                    <p key={User._id} className='list-group-item'>{User.name}</p>
                )
            })}
        </div>
    )
}

export default Show