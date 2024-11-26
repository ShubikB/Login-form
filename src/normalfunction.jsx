function MyCompponent(props) {
  return (
    <div className='wrapper'>
      <h3>{props.objective}</h3>

      <form className='form' action='#'>
        <label htmlFor='username'>Username</label>
        <input type='text' id='username-input' placeholder='Enter your Username' />
        <label htmlFor='password'>Password</label>
        <input type='password' id='user-password-input' />

        <label htmlFor='updates-input'>Changes of the Day</label>
        <textarea
          id='updates-input'
          name='updates'
          rows='4'
          cols='50'
          placeholder='Please describe the changes in detail.'
          style={{ maxWidth: "80%" }}
        ></textarea>

        <button id='form-submit-button' type='button'>
          Submit
        </button>

        <p>last Update: {props.lastUpdate}</p>
      </form>
    </div>
  )
}

export default MyCompponent
