import { Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
	const { t } = useTranslation();
	return <Typography>{t('404 Page NotFound')}</Typography>;
};

export default NotFound;
