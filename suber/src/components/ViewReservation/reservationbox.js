import React from 'react';
import './ViewReservation.css';

import { Link } from 'react-router-dom'

class ReservationBox extends React.Component {
    render() {
        return (
		<div id="res_box">
			<h3 id="res_time">
				February 28th, 2020 1830 1930
			</h3>
			<h3 id="tourists">
				Collin Kwon and 2 others
			</h3>
			<hr id="res_divider"></hr>
			<div id = "res_details">
				<div class = "res_detail_title">
					Email
				</div>
				<div class = "res_detail_contents">
					ynkwon@stanford.edu
				</div>
				<div class = "res_detail_title">
				Mobile
				</div>
				<div class = "res_detail_contents">
				650-709-7655
				</div>
				<div class = "res_detail_title">
				# of People
				</div>
				<div class = "res_detail_contents">
				4
				</div>
				<div class = "res_detail_title">
				Language
				</div>
				<div class = "res_detail_contents">
				Mandarin
				</div>
				<div class = "res_detail_title">
				Meetup Location
				</div>
				<div class = "res_detail_contents">
				Main Quad
				</div>
				<div class = "res_detail_title">
				Price
				</div>
				<div class = "res_detail_contents">
				$60
				</div>
				<div class = "res_detail_title">
				Additional Request
				</div>
				<div class = "res_detail_contents">
				Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. Bunch of text goes here. 
				</div>	

			</div>	
		</div> 
    	)
	}
}

export default ReservationBox

