import React from 'react'
import { Outlet } from 'react-router-dom'
import Typography from '@mui/material/Typography'


const Root = () => {
  return (
    <div>
     <Typography gutterBottom={true} variant="h4" component={"p"} >Header</Typography>
      <Typography  noWrap variant="h4" component={"p"} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam vitae fugit voluptate nulla sunt. Nam in rem quisquam debitis inventore asperiores ad culpa tempora, modi veritatis officia, vel saepe possimus?</Typography>
      <Outlet />
    </div>
  )
}

export default Root
