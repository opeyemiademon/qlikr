

const  Template =(props:any)=> {
  return (<div suppressHydrationWarning>

    {props.children}
    </div>
  )
}

export default Template