import { useState, useContext } from 'react';
import UserContext from '../components/UserContext';
import moment from 'moment'
import Race from '../components/Race';

const Races = (props) => {
	
	const { timezone } = useContext(UserContext)
	
	const races = props.races
	
	var nextRace
	
	return (
	<div className="Races">
	  <h2 className="heading">F1 Schedule 2020</h2>
		<table id="events-table">
			<thead>
				<tr className="table-head">
					<th scope="col" className="icon-column"></th>
					<th scope="col" className="event-column">Formula 1 Grand Prix Events {props.year}</th>
					<th scope="col" className="date-column">Date</th>
					<th scope="col" className="time-column">Time</th>
				</tr>
			</thead>
			
			{races && races.map((item, index) => {
  			// TODO Improve this isNextRace logic
				var isNextRace = false
				if(item.sessions && moment(item.sessions.race).isAfter() && !nextRace && !item.canceled && !item.tbc){
					isNextRace = true
					nextRace = item
				}
				return (<Race item={item} index={index} timezone={timezone} key={item.slug} isNextRace={isNextRace} />)
			})}   
		    <style jsx>{`
			    table {
			    	width:100%;
			    	border-collapse: collapse;
			    }
			    tr {
				}
			    td, th {
				    padding:16px;
			    }
			    table caption {
				    text-indent:-9999px;
			    }
			    .table-head {
				    display:none;
				}
		    `}</style>
	    </table>  
	</div>
	);
};

export default Races;