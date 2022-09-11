import React from 'react'
import InputBox from './InputElement'

function Form() {
  return (
    <form>
<div class ="container">
<label for ="uname"><b> UseName</b></label>
<InputBox type ="text" placeholder="Enter username"  name="uname"></InputBox>  
<button type = "submit"> Login</button>
</div>

    </form>
  )
}

export default Form