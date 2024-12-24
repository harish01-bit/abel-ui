import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

type Props = {
    text: string,
    link: string
}
function NavigateLink({ text, link }: Props) {


    return <Link to={link}>{text}</Link>;
}
export default NavigateLink;