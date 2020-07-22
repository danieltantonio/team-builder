import React, { useState, useEffect } from 'react';

function Members(props) {
    const { member } = props;
    return(
        <div>
            Name: {member.name}<br/>
            Role: {member.role}
            <br /><br />
        </div>
    )
}

export default Members;