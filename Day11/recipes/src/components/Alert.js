import React from 'react'

export default function Alert({
  variant = "danger",
  className,
  children,
  show,
  onHide,
  ...others
}) {
  return (
    <>
      { show ?
        <div {...others} className={"alert d-flex justify-content-between alert-" + variant +' '+ className} role='alert'>
          
          <div>{children}</div>
          {
            onHide ? 
              <div style = {{cursor:'pointer'}} onClick={onHide}>
                X
              </div> 
              : <></>
          }
        </div>
        :
        <></>
        }
    </>
  )
}