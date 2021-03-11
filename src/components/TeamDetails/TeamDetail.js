import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import Male from '../MaleFemalePhoto/male.png'
import Female from '../MaleFemalePhoto/female.png'
const TeamDetail = () => {
    const { teamId } = useParams();
    const [teamsId, setTeamsId] = useState([])
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setTeamsId(data.teams[0])
            })
    }, [])
    console.log(teamsId);
    const { strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strDescriptionEN, strTeamBanner } = teamsId
    return (
        <div>
             <div style={{backgroundImage:`url('${strTeamBanner}')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',height:'300px'}}></div>
            <div style={{ backgroundColor: "gray" }}>
                <img style={{ width: '250px' }} src={strTeamBadge} alt="" />
            </div>
            <div style={{ backgroundColor: '#02075d', paddingTop: '40px' }}>
                <div style={{ backgroundColor: 'blue', width: '1300px', margin: 'auto', borderRadius: '8px', color: 'white', marginBottom: '20px', }} className='row'>
                    <div style={{ textAlign: 'left', margin: '0', paddingLeft: '34px' }} className='col-md-8'>
                        <h1>{strTeam}</h1>
                        <h3><FontAwesomeIcon icon={faMapMarker} />Founded: {intFormedYear}</h3>
                        <h3><FontAwesomeIcon icon={faFlag} />Country: {strCountry}</h3>
                        <h3><FontAwesomeIcon icon={faFutbol} />Sport Type: Football</h3>
                        <h3><FontAwesomeIcon icon={faMars} />Gender: {strGender}</h3>
                    </div>
                    {
                        strGender === 'Male' ? <div className='col-4'><img style={{ width:'100%', borderRadius: '8px' }} src={Male} alt="" /></div> : <div className='col-4'><img style={{ width:'100%', borderRadius: '8px' }} src={Female} alt="" /></div>
                    }
                </div>
                <div style={{ width: '1300px', margin: 'auto' }}>
                    <p style={{ color: 'lightGray', fontSize: '18px' }}>{strDescriptionEN}</p>
                </div>
                <div style={{ padding: '78px 0px' }}>
                    <a href="https://twitter.com/MuhammadJunaye4" target="1"><FontAwesomeIcon icon={faTwitter} size="3x" color="white" cursor="pointer" /></a>
                    <a style={{ padding: '0px 25px' }} href="https://www.facebook.com/muhammad.junayed.351/" target="2"><FontAwesomeIcon icon={faFacebookF} size="3x" color="white" cursor="pointer" /></a>
                    <a href="https://www.linkedin.com/in/muhammad-junayed-7415861b1/" target="3"><FontAwesomeIcon icon={faLinkedinIn} size="3x" color="white" cursor="pointer" /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetail;