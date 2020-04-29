import React from 'react' 

import { ListChat } from './styles'
import ItemUser from './ItemUser'

interface IUser {
  name: string,
  image_url: string,
  unreadMessage?: boolean
} 

interface Props {
  users: Array<IUser>, 
}

const ListChatUsers: React.FC<Props> = ({ users } : Props) => {
  return <> 
    <ListChat>
      {users?.map(item => <ItemUser name='João Pedro' image_url={'ww.com'} unreadMessage={item.unreadMessage} />)}
    </ListChat>
  </>
}

export default ListChatUsers