import React from 'react' 

import { ItemChat, ImageCircle, SectionLabelsItemChat} from './styles'

interface Props {
  name: string,
  image_url: string,
  unreadMessage?: boolean,
}

const ItemUser: React.FC<Props> = ({ name, image_url, unreadMessage = false } : Props) => {
  return <> 
    <ItemChat>
      <ImageCircle src={`https://scontent.ffor8-1.fna.fbcdn.net/v/t1.30497-1/cp0/c18.0.60.60a/p60x60/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=7206a8&_nc_ohc=6M52ALgpwHsAX8Gi2SS&_nc_ht=scontent.ffor8-1.fna&oh=ededb558d34a98a8bafb1b1ff2ca6cba&oe=5ECDB5F3`} />
      <SectionLabelsItemChat unreadMessage={unreadMessage}>
        <span className='name'>João Pedro Silva </span>
        <span className='messege'>Diga "oi" ao seu oi" ao seu oi" ao seu novo  .</span>
      </SectionLabelsItemChat>
      {unreadMessage && <span className='pointer'></span>}
    </ItemChat>
  </>
}

export default ItemUser
 