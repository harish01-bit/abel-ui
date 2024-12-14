import React from 'react';
import parse from 'html-react-parser';

type Props = {
    text: string
}
function RenderText({ text }: Props) {
    const formattedText = text.split('\n').map((line: any, index: number) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {parse(line)}
        </React.Fragment>
    ));

    return <span>{formattedText}</span>;
}
export default RenderText;