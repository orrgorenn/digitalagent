import React, { ReactNode } from 'react'

interface Props {
  href: string;
  className?: string;
  children: ReactNode
}

const NavLink = ({href, className, children, ...props}: Props) => {
  return (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  );
}

export default NavLink;