type Props = {
    pathData: string;
    size: number;
    fill:string
};
function IconComponent({ pathData, size = 24,fill="none" }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            style={{ width: `${size}px`, height: `${size}px` }}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d={pathData} />
        </svg>
    )
}

export default IconComponent