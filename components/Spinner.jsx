'use client'

import { ClipLoader } from "react-spinners"

const override = {
    display:'block',
    margin:'100px auto',
}

const Spinner = ({loading}) => {

  return (
    
  <ClipLoader

  color = "#A020F0"
  loading = {loading}
  cssOverride = {override}
  size = {150}
  aria-label ="Loading Spinner"
  
   />
  )
}

export default Spinner
