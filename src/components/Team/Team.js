import React from 'react';
import { Link } from 'react-router-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam } = props.team
    return (
        <div style={{ display: 'inline-block', backgroundColor: '#02075d' }} className='col-md-6 p-4' >
            <div style={{ border: '1px solid orange', borderRadius: '8px', backgroundColor: 'gray' }}>
                <img style={{ width: '200px' }} src={strTeamBadge} alt="" />
                <h1>This is {strTeam} Team</h1>
                <h4>Sports Type: Football</h4>
                <Link to={`/team/${idTeam}`}><button className='btn btn-success'>Team Details  <FontAwesomeIcon icon={faArrowRight} /></button></Link>
            </div>
        </div>
    );
};

export default Team;