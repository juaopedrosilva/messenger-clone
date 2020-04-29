import React from 'react' 

import { LeftColumn, Header, Image, Title } from './styles' 
import { IconContainer } from '../IconContainer/styles'
import ListChatUsers from '../ListChatUsers'
import SearchUserChat from '../SearchUserChat'


export default () => { 
  return <>
    <LeftColumn>
      <Header>
        <div>
          <Image src={`https://scontent.ffor8-2.fna.fbcdn.net/v/t1.0-1/cp0/p40x40/14046043_231096080621454_7942154354934510546_n.jpg?_nc_cat=105&_nc_sid=dbb9e7&_nc_ohc=YPQl4HbvBVIAX_MFcAw&_nc_ht=scontent.ffor8-2.fna&oh=b778d991c51bfd4e81de674c12dac66c&oe=5ECBEE2F`} />
          <Title>Bate-papos</Title>
        </div>
        <div>
          <IconContainer>

          </IconContainer>
          <IconContainer>
          
          </IconContainer>
        </div>
      </Header>
      <SearchUserChat /> 
      <ListChatUsers users={ [
    {
      name: "Pedri",
      image_url: "ddd",
      unreadMessage: true
    },
    {
      name: "Pedri",
      image_url: "ddd"
    }, {
      name: "Pedri",
      image_url: "ddd"
    },
    {
      name: "Pedri",
      image_url: "ddd"
    },
    {
      name: "Pedri",
      image_url: "ddd"
    },
    {
      name: "Pedri",
      image_url: "ddd"
    },
    {
      name: "Pedri",
      image_url: "ddd"
    },
    {
      name: "Pedri",
      image_url: "ddd"
    } 
  ]
  } />
    </LeftColumn>
  </>
}
