import styled from 'styled-components'

interface ItemChatProps {   
  unreadMessage?: boolean,
}

export const ListChat = styled.ul`
  list-style-type: none;
  margin: 0;
  user-select: none;
  cursor:pointer;
  padding: 0;
`

export const ItemChat = styled.li`
  display: flex;
  flex: 1 1 auto;
  padding-left: 15px;
  padding-right: 15px;
  height: 64px;
  position: relative;
  align-items: center;
  margin-bottom: 4px;


  span.pointer {
    background-color: #09f;
    border-radius: 50%;
    height: 12px;
    margin-left: 4px;
    top: 2px;
    width: 12px;
  }
`

export const ImageCircle = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  margin-right: 12px;
`

export const SectionLabelsItemChat = styled.div<ItemChatProps>` 
  display: flex;
  flex-direction: column;
  flex: 1 1 0px;
  justify-content: center;
  min-width: 0;
  padding: 0 16px 0 0; 
  
  
  
  span.name {
    color: rgba(0, 0, 0, 1);
    font-size: 15px;
    font-weight: ${({ unreadMessage }) => unreadMessage ? '700' : '400'};
    line-height: 1.4;
    flex: 1 1 0%;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;  
    
  }

  span.messege {
    font-weight: ${({ unreadMessage }) => unreadMessage ? '700' : '400'};
    font-size: ${({ unreadMessage }) => unreadMessage ? '15px' : '13px'};
    color:  ${({ unreadMessage }) => unreadMessage ? 'rgba(0, 0, 0, 1)' : 'rgba(153, 153, 153, 1)'}; 
    flex: 1 1 0%;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`