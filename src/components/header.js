import React from "react";
import Link from "gatsby-link";
import AUheader, { AUheaderBrand } from "@gov.au/header";

import crest from "../assets/crest.svg";
import "./header.scss";

const Header = ({ siteTitle }) => (
	<AUheader>
		<AUheaderBrand
			link="/"
			linkComponent={Link}
			title={siteTitle}
			brandImage={crest}
			brandImageAlt="australia.gov.au"
			subline="Australian Government information and services"
		/>
	</AUheader>
);

export default Header;
