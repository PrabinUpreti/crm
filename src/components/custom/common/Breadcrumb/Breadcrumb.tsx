import {
  Breadcrumb as ShadBreadCrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  // BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb/breadcrumb";
import i18n from "@/intl/i18n";
import { useEffect, useState } from "react";
import {
  Link,
  RouteObject,
  useLocation,
  useMatches,
  useParams,
} from "react-router-dom";

export interface IRouterMatch {
  id: string;
  pathname: string;
  params: string;
  handle: {
    crumb: (data: {
      label: {
        fallback: string;
        key: string;
      };
      path: string;
    }) => void;
  };
}

const Breadcrumb = () => {
  const matches: RouteObject[] = useMatches();
  const params = useParams();
  const location = useLocation();
  const [crumbs, setCrumbs] = useState<
    {
      label: {
        fallback: string;
        key: string;
      };
      path: string;
    }[]
  >([]);
  useEffect(() => {
    const crumbs = matches
      .filter((match: RouteObject) => Boolean(match.handle?.crumb))
      .map((match: RouteObject) => match.handle.crumb(params));
    if (crumbs) setCrumbs(crumbs);
  }, [location, matches, params]);
  console.log(crumbs, "crumbs from breadcrumb");
  return (
    <ShadBreadCrumb>
      <BreadcrumbList>
        {crumbs.map((crumb) => {
          return (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={crumb?.path}>
                    {i18n.t(crumb?.label?.key, crumb?.label?.fallback)}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          );
        })}
      </BreadcrumbList>
    </ShadBreadCrumb>
  );
};

export default Breadcrumb;
