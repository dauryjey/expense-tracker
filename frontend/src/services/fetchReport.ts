import apiRoutes from '../const/apiRoutes';

export const fetchReport = async (): Promise<Report> => {
		const response = await fetch(apiRoutes.GET_REPORT)

		if (!response.ok) {
				throw new Error('Failed to fetch report')
		}

		return await response.json();
}