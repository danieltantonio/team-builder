import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import Form from './components/Form';
import Members from './components/Members';

import teamMemberData from './data/teamMembers';

const initialFormValues = {
  name: '',
  role: ''
};

class TeamMember {
  constructor(name, role) {
    this.id = uuid();
    this.name = name;
    this.role = role;
  }
};

function App() {
  const [team, setTeam] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  let teamMembers = [];

  for(let i = 0; i < teamMemberData.length; i++) {
    teamMembers.push(new TeamMember(teamMemberData[i].name, teamMemberData[i].role));
  };

  useEffect(() => {
    setTeam(teamMembers);
  }, []);

  const updateForm = (inputName, inputValue) => {
    const updatedFormValues = { ...formValues, [inputName]: inputValue }
    setFormValues(updatedFormValues)
  };

  const submitForm = () => {
    const newTeamMemberTrim = new TeamMember(formValues.name.trim(), formValues.role);

    if(!newTeamMemberTrim.name || !newTeamMemberTrim.role) return;

    setTeam([newTeamMemberTrim , ...team]);
  };

  return (
    <div>
      <h1>💯Da Svyat Syndicate💯</h1>
      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        team.map(member => {
          return(
            <Members key={member.id} member={member}/>
          )
        })
      }
    </div>
  );
}

export default App;
