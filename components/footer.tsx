import { BriefcaseBusinessIcon, MailIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { documentItems } from "./nav-items";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t mb-24 sm:mb-0 ">
      <div className="container mx-auto h-full p-6 sm:border-x">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-sm mb-2 text-muted-foreground">Contact</p>
            <ul className="text-sm space-y-2">
              <li className="flex items-center gap-1.5 [&>svg]:size-4 [&>svg]:text-muted-foreground">
                <MailIcon />
                <Link
                  className="underline underline-offset-4"
                  href="mailto:board@kth.it"
                >
                  board@kth.it
                </Link>
              </li>
              <li className="flex items-center gap-1.5 [&>svg]:size-4 [&>svg]:text-muted-foreground">
                <MapPinIcon />
                Electrum, Kistagången 16, 164 40 Kista
              </li>
              <li className="flex items-center gap-1.5 [&>svg]:size-4 [&>svg]:text-muted-foreground">
                <BriefcaseBusinessIcon /> 802431-2442
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm mb-2 text-muted-foreground">Documents</p>
            <ul className="text-sm space-y-2">
              {documentItems.map((item, index) => (
                <li key={`footer.doc.${index}`}>
                  <Link
                    className="hover:underline underline-offset-4"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm mb-2 text-muted-foreground">Follow us</p>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  className="hover:underline underline-offset-4"
                  href="https://www.facebook.com/itsektionenkth"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline underline-offset-4"
                  href="https://www.instagram.com/itsektionenkth/"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline underline-offset-4"
                  href="https://www.linkedin.com/company/itsektionen/"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  className="hover:underline underline-offset-4"
                  href="https://www.github.com/itsektionen"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-start md:items-center flex-col sm:flex-row gap-4">
          <p className="text-muted-foreground text-xs">
            {`Copyright © ${currentYear} Sektionen för Informationsteknik`}
          </p>
          <p className="text-muted-foreground text-xs text-right">
            The source code for this site is available on{" "}
            <Link
              className="underline sm:no-underline hover:underline underline-offset-4"
              href="https://www.github.com/itsektionen"
            >
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
