import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Team from '../Team/Team';
import image from '../MaleFemalePhoto/Rectangle 21.png'
const Home = () => {
    const [team, setTeam] = useState([])
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => {
                setTeam(data.teams)
            })
    }, [])

    return (
        <div>
            <div style={{ backgroundImage: `URL('${image}')`, height: '300px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <h1 style={{ paddingTop: '100px', color: 'goldenrod', fontSize: '60px' }}>Team tracker</h1>
            </div>

            {
                team.map(team => <Team key={team.idTeam} team={team}></Team>)
            }
        </div>
    );
};

export default Home;