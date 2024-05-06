import React from "react";
import vector from "../../img/Frame 10.svg";
import img1 from "../../img/best1.png"
import img2 from "../../img/best2.png"
import img3 from "../../img/best3.png"
import img4 from "../../img/best4.png"
import img5 from "../../img/best5.png"
import img6 from "../../img/best6.png"



const Best = () => {
	return (
		<div id="best">
			<div className="container">
				<div className="best">
					<div className="best--title">
						<img src={vector} alt="" />
						<h2>Best Sellers</h2>
					</div>
					<div className="best--info">
						<div className="best--info__text">
							<h1>You Only Reserve Exception</h1>
							<p>
								Each location has a menu that`s curated just for them.
								See what new at your Cafesio and You`ll find Cafesio
								Covent Carden moments.
							</p>
						</div>
                  <div className="best--info__img">
                     <img src={img1} alt="" />
                     <img src={img2} alt="" />
                     <img src={img3} alt="" />
                     <img src={img4} alt="" />
                     <img src={img6} alt="" />
                  </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Best;
