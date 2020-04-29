import styled from 'styled-components'

export const LeftColumn = styled.div`
  flex: 0 0 25%;
  max-width: /*420px*/ 338px;
  min-height: 100vh;
  border-right: 1px solid #ccc;
`

export const Header = styled.div`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  overflow: hidden;
  padding: 10px 16px 10px 16px;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }
`

export const Image = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 12px;
`

export const Title = styled.h1`
  font-family: SFUIDisplay-Regular, Helvetica Neue, system-ui, Segoe UI, Helvetica, Arial, sans-serif;
  color: rgba(0, 0, 0, 1);
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all .25s;
`
