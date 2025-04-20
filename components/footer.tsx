import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container mx-auto p-6 border-x">
        <div className="mb-8">
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
        <div className="flex justify-between items-center">
          <p className="text-muted-foreground text-xs">
            {`Copyright © ${currentYear} Sektionen för Informationsteknik`}
          </p>
          <p className="text-muted-foreground text-xs text-right">
            The source code for this site is available on{" "}
            <Link
              className="hover:underline underline-offset-4"
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
