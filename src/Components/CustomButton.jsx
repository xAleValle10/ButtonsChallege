import React from 'react'

export const CustomButton = ( {size, color, type, isChecked, isDisabled, isdisabledShadow} ) => {
  return (
    <container className="container1" >
                    <div> 
                        <div>
                            <h4>&lt;Button/&gt;</h4>
                        </div>   
                        <div>
                            <button className={`defaultButton-${size} defaultButton-${color} defaultButton-${type} ${isChecked ? 'hoverFocus': ''} ${isDisabled ? 'disabledButton' : ''} ${isdisabledShadow ? 'disabledShadow' : ''}`}>Defaul</button>
                            
                        </div>             
                    </div>
                </container>
  )
}
