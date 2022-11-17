import React from 'react';
import { CustomedLink } from './CustomLink.styles';

interface IProps {
  to: string;
  text: string;
}

export const CustomLink: React.FC<IProps> = ({ to, text }: IProps) => {
  return (
    <CustomedLink to={to}>{text}</CustomedLink>
  )
}