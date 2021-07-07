import React, { useState } from 'react';

function Form(props) {
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return(
        <form className='form container' onSubmit={onSubmit}>
            <div className="Form-Header">
                <h3>Join da fam!</h3>
                <button disabled={!values.name || !values.role}>Submit</button>
            </div>
            <div>
                <label htmlFor='nameInput'>Name:&nbsp;
                <input
                  id='nameInput'
                  name='name'
                  type='text'
                  placeholder='Enter name'
                  maxLength='20'
                  value={values.name}
                  onChange={onChange}
                />
                </label>

                <label htmlFor='roleInput'>Role:&nbsp;
                  <select name='role' value={values.role} onChange={onChange}>
                      <option disabled value=''>Select a role</option>
                      <option value='Tech Lead'>Tech Lead</option>
                      <option value='Frontend Engineer'>Frontend Engineer</option>
                      <option value='Backend Engineer'>Backend Engineer</option>
                      <option value='UX Designer'>UX Designer</option>
                      <option value='Sales'>Sales</option>
                      <option value='Network Security Engineer'>Network Security Engineer</option>
                  </select>
                </label>

            </div>
        </form>
    );
}

export default Form;