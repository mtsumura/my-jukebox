import React from "react";
import "./JukeBoxButtonLabel.css";

const JukeBoxButtonLabel = ({ labelValue1, labelValue2, isSmall }) => {
	return (
		<div className="JukeButtonLabelContainer">
			<div className="JukeBoxButtonLabel">
				<div className={"JukeButtonLabel" + (isSmall ? " JukeButtonLabel__smallSize" : "")}>
					<div
						className={
							"JukeBoxButtonLabelValue" +
							(isSmall ? " JukeBoxButtonLabelValue__smallSize" : "")
						}
					>
						{labelValue1}
					</div>
				</div>
				<div className={"JukeButtonLabel" + (isSmall ? " JukeButtonLabel__smallSize" : "")}>
					<div
						className={
							"JukeBoxButtonLabelValue" +
							(isSmall ? " JukeBoxButtonLabelValue__smallSize" : "")
						}
					>
						{labelValue2}
					</div>
				</div>
			</div>
		</div>
	);
};

export default JukeBoxButtonLabel;
