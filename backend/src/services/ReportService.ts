import ReportRepo from "../repos/ReportRepo"

function get_ () {
	return ReportRepo.get_()
}

export default {
	get_
} as const