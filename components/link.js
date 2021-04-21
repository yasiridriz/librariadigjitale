import React from 'react';
import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";

const MyLink = withRouter(({ router, children, ...props }) => (
  <Link  {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? 'active' : null
    })}
  </Link>
));

export default MyLink