import React from 'react';
import ReactDom from 'react-dom'
import parse from 'html-react-parser';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import { string } from 'yup';

type Props = {
    text: string
}
function RenderText({ text }: Props) {
    const formattedText = text.split('\t').map((line: any, index: number) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {<ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>{line}</ReactMarkdown>}
            {/* {parse(line)} */}
        </React.Fragment>
    ));
    // console.log("Formatted Text:", formattedText);
    // const markdown = text;

    return <span>{formattedText}</span>;
}

export default RenderText;

