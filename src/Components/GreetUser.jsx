function GreetUser(props) {
  //   const props.username = "Shubik"
  return (
    <div className='greetings-wrapper'>
      <h1>Hello! {props.username} </h1>
      <h2>New Entries Required </h2>
    </div>
  )
}

export default GreetUser
