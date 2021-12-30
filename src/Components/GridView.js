import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function displayChildren(n) {
	return (
		<Grid container>
			<Grid item xs={12}>
				{n.map((item) => (
					<Accordion key={item.name} variant="outlined" style={{ minWidth: '100%', marginTop: '2%', borderColor: 'transparent' }}>
						<Typography>
							{item.children ? (
								<>
									<AccordionSummary expandIcon={<ExpandMoreIcon />}>
										<Typography> {item.name}</Typography>
									</AccordionSummary>
								</>
							) : (
								<AccordionDetails>
									<Typography> {item.name}</Typography>
								</AccordionDetails>
							)}
						</Typography>

						{item.children ? <AccordionDetails>{displayChildren(item.children)}</AccordionDetails> : ''}
					</Accordion>
				))}
			</Grid>
		</Grid>
	);
}

export default function GridView(props) {
	return (
		<Grid item xs={12}>
			<Grid container spacing={2}>
				{props.data.map((item) => (
					<Grid item xs={12} md={3} key={item.name}>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<Card style={{ minWidth: '100%' }}>
									<CardMedia image="../../location.png" alt="" style={{ paddingTop: '86.25%' }} />
									<CardContent>
										<Grid container spacing={1}>
											<Grid item xs={12}>
												<Accordion variant="outlined" style={{ minWidth: '100%', borderColor: 'transparent' }}>
													{item.children ? (
														<AccordionSummary expandIcon={<ExpandMoreIcon />}>
															<Typography>{item.name}</Typography>
														</AccordionSummary>
													) : (
														<AccordionDetails>
															<Typography>{item.name}</Typography>
														</AccordionDetails>
													)}
													{item.children ? <AccordionDetails style={{ paddingTop: '2%' }}>{displayChildren(item.children)}</AccordionDetails> : ''}
												</Accordion>
											</Grid>
										</Grid>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				))}
			</Grid>
		</Grid>
	);
}
