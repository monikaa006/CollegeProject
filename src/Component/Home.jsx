import React from 'react'
import NavBar from './Header/Navbar'
import Box from '@material-ui/core/Box'

function Home() {
  return (
    <div >
      <NavBar/>
      
      <Box 
        component="img"
        sx={{
          height: 233,
          width: 350,
          maxHeight: { xs: 233, md: 167 },
          maxWidth: { xs: 350, md: 250 },
        }}
        alt="The house from the offer."
        src="http://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/online/PublishingImages/blog/health-care-economics.jpg&w=1200&h=630"
      />
       
     
     
    </div>
  )
}

export default Home
