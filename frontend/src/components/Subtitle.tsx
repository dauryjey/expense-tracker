interface SubtitleProps {
		text: string;
}

export const Subtitle = ({ text }: SubtitleProps) => {
		return <h2 className="text-lg font-bold">{text}</h2>

}