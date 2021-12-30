import { Accordion, AccordionSummary, Typography, Grid, Divider } from '@material-ui/core';
import React from 'react';

export default function ChartView(props) {
	return (
		<Grid item xs={12}>
			<Accordion variant="outlined" style={{ minHeight: '100%', borderColor: 'transparent' }}>
				<AccordionSummary>{props.data.children ? ' ' : <Typography> {props.title}</Typography>}</AccordionSummary>
				<Divider />
				{props.data.map((item) => (
					<AccordionSummary>
						<Typography>
							{item.children ? '' : <Typography>{item.name}</Typography>}
							{item.children?.length && (
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Divider />
										<ChartView title={item.name} data={item.children} />
										<Divider />
									</Grid>
								</Grid>
							)}
						</Typography>
					</AccordionSummary>
				))}
			</Accordion>
		</Grid>
	);
}
