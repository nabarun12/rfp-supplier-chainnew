import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

	constructor() { }
	ngOnInit() {
		this.tier_1_business = "Select";
		this.sBusiness2 = "Select";
		this.sBusiness3 = "Select";
		this.sBuyL = "Select";
		this.sPCategory = "Select";
		this.sLegacyAlstom = "Select";
		this.selectedRegion = "Select";
		this.spCategory = "Select";
		this.selectedPStatus = "Select";
		this.sRisk = "Select";
	}
	businessT1 = ['Aviation', 'Healthcare', 'Power', 'Renewable', 'Transportation'];
	businessT2 = ['Gas Power Systems', 'Power Services', 'Steam Power Systems', 'Distributed Power', 'Water', 'GEH Nuclear', 'HQ	'];
	businessT3 = ['GPS - Greenville', 'GPS - Bangor', 'GPS - Schenectady', 'GPS - EPE', 'GPS - Birr', 'GPS - Elblag F', 'GPS - Elblag T', 'GPS - Setubal', 'GPS - Wroclaw', 'GPS - Hungary', 'GPS - Mannheim / Bexbach', 'GPS - Metem', 'GPS - Doosan', 'GPS - Shenyang', 'GPS - Hangzhou', 'GPS - Building 66', 'GPS - GEMTEC II', 'GPS - Engineering', 'GPS - NPI/NTI', 'GPS - Sourcing', 'GPS - Aero (Cinci)', 'GPS - Schenectady HQ', 'GPS - Software', 'GPS - EDF', 'PS - Tool Center, OSS', 'PS - Tool Center, Asia tooling', 'PS - Tool Center, China tooling', 'PS - Tool Center, Europe tooling', 'PS - Tool Center, India tooling', 'PS - Tool Center, LA tooling', 'PS - Tool Center, MEA tooling', 'PS - Tool Center, NAM tooling', 'PS - Global Ops, Granite', 'PS - Global Ops, Parts', 'PS - Global Ops, Training', 'PS - Global Ops, Viceroy', 'PS - GRS, SCD (restructuring)', 'PS - GRS, RTCoE', 'PS - GRS, Digital', 'PS - GRS, Productivity', 'PS - GRS, GRS Shops', 'PS - Alstom TS CAPEX, Alstom P&E', 'PS - Alstom TS CAPEX, Product Line Generator', 'PS - DP CAPEX, DP ELTO', 'PS - Engineering, Alstom', 'PS - Engineering, Performance', 'PS - Engineering, MSA', 'PS - Engineering, PRO (Outage)', 'PS - oOEM, SGT6-5000F & M501F', 'PS - oOEM, SGT6-4000F', 'PS - oOEM, M701F', 'PS - oOEM, SGT-800', 'PS - Software', 'Nuclear - Fuels, GNF-A', 'Nuclear - Fuels, GNF-J', 'Nuclear - Fuels, GEH-C', 'Nuclear - Fuels, GLE', 'Nuclear - Services, Field', 'Nuclear - Services, Parts', 'Nuclear - Services, Asset Management', 'Nuclear - Services, Administrative', 'Nuclear - Support, Facilities', 'Nuclear - Support, IM', 'Nuclear - Support, EHS', 'Nuclear - New Plant Projects', 'DP - Communications', 'DP - Forefront', 'DP - JB Engineering', 'DP - JB ERP', 'DP - JB Fusion', 'DP - JB GSCM', 'DP - JB IT', 'DP - JB Service', 'DP - JB Sourcing', 'DP - Kapfenberg', 'DP - WK Engineering', 'DP - WK Manufacturing', 'DP - WK Service', 'DP - WK Sourcing', 'SPS - Belfort', 'SPS - Wuhan', 'SPS - Beijing', 'SPS - Beijing ABET', 'SPS - Sanand', 'SPS - Durgapur', 'SPS - Shahabad', 'SPS - Rugby', 'SPS - Windsor', 'SPS - St. Petersburg', 'SPS - Vaxjo', 'SPS - Mannheim', 'SPS - Oslo', 'SPS - Pumps'];
	
	buyLease = ['Buy', 'Lease'];
	projCategory = ['Base Sustaining', 'Capacity', 'EHS', 'NPI', 'Sourcing', 'Engineering', 'Cost Out/Productivity', 'Advanced manufacturing', 'Software- ERP', 'Software- Non ERP Internal', 'Sofware- For Sale', 'ELTO'];
	
	regions = ['Asia', 'China', 'India', 'MEA', 'Europe', 'North America', 'Latin America', 'Global', 'Other'];
	statuses = ['Not started' , 'In Progress' , 'On Hold' , 'Approved' , 'Rejected' , 'Completed and/or closed'];
	riskCategory = [1,2,3,4,5];
	years = [2017, 2018, 2019, 2020, 2021, 2022];
	invCategory = ['P&E', 'Software', 'Incremental non-recurring expense', 'Other (explain below)'];
	roiCategory = ['Discounted investment', 'Discounted benefits', 'Discounted cash flow'];
	benefitCategory = ['Productivity', 'Cost avoidance', 'Funds flow', 'Maintenance cost reduction', 'Other'];
	yearInvestment = [1950000, 0, 0, 0, 0, 0, 1950000];
	software = [0, 0, 0, 0, 0, 0, 0];
	productivity = [662916, 662916, 662916, 662916, 662916, 662916, 3314580];
	costAvoidance = [0, 0, 0, 0, 0, 0, 0];
	cummulativeCashFlow = [662916, 1325832, 1988748, 2651664, 3314580, 3977496, 3977496];
	projPositionArr = ['Disruptive' , 'Differentiate' , 'Compete' , 'Protect' , 'On Hold'];
	discountedBenefits = [613811, 568343.6214, 5626244.094, 487263.0499, 451169.4906, 2646831.367];
	discountedCashFlow = [613811, -568343.6214, -5626244.094, -487263.0499, -451169.4906, 2646831.367];
	oeePercent = .65;
	npvValue = 281446;
	
	projDetails : ProjectDetails = {
		projTitle: 'CAPEX',
		projManager: 'General Electrics',
		projId: 'B-2015-162578'
	};

	tier_1_business="";
	sBusiness2 = "";
	sBusiness3 = "";
	sBuyL = "";
	sPCategory = "";
	sLegacyAlstom = "";
	selectedRegion = "";
	spCategory = "";
	selectedPStatus = "";
	sRisk = "";

	public dropboxitemselected(item) {
		this.tier_1_business = item;
	}
}

export class ProjectDetails {
  projTitle: string;
  projManager: string;
  projId: string;
}
