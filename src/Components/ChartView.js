import { Accordion, AccordionDetails, AccordionSummary, Typography, Grid, Card, CardContent } from '@material-ui/core';
import React from 'react';

export default function ChartView(props) {
	return (
		<Grid item xs={12}>
			<Accordion variant="outlined" style={{ minHeight: '100%' }}>
				<AccordionSummary>
					<Typography>{props.title}</Typography>
				</AccordionSummary>
				{props.data.map((item) => (
					<AccordionSummary style={{ minWidth: '100%' }}>
						<Typography>
							{item.children ? ' ' : item.name}
							{item.children?.length && <ChartView title={item.name} data={item.children} />}
						</Typography>
					</AccordionSummary>
				))}
			</Accordion>
		</Grid>
	);
}
