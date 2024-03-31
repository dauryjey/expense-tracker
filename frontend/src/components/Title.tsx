interface TitleProps {
		text: string;
}

export const Title = ({ text }: TitleProps) => {
		return  <h1 className="text-2xl font-bold text-center">{text}</h1>
}