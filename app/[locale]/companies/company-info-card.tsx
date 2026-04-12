"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, ExternalLink } from "lucide-react";
import { useI18n } from "@/locales/client";
import  Link  from "next/link";
import { MailIcon } from "lucide-react";

export function CompanyInfoCard() {
  const t = useI18n();


  return (
    <Card className="h-fit sticky top-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          {t('CompanyInfoCard.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* E-post sektion */}
        <div className="space-y-3">
          <h4 className="font-medium">{t('CompanyInfoCard.emailSection')}</h4>
          <div className="space-y-2">

            <p className="text-sm">
              <a
                href="mailto:naringsliv@kth.it"
                className="text-primary hover:underline break-all"
              >
                naringsliv@kth.it
              </a>
            </p>
            <Button
              variant="outline"
              size="sm"
              className="w-full cursor-pointer"
            >
            <Link href="mailto:naringsliv@kth.it">
              <MailIcon className="mr-2 h-4 w-4 text-muted-foreground" />
              {t('CompanyInfoCard.sendEmail')}
             </Link>
            </Button>
          </div>
        </div>

        {/* Produktkatalog sektion */}
        <div className="space-y-3">
          <h4 className="font-medium">{t('CompanyInfoCard.catalogSection')}</h4>
          <p className="text-sm text-muted-foreground">
            {t('CompanyInfoCard.catalogDescription')}
          </p>

          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="font-medium text-sm">{t('CompanyInfoCard.catalogTitle')}</p>
                <p className="text-xs text-muted-foreground">{t('CompanyInfoCard.catalogSize')}</p>
              </div>
            </div>

            <Button
              onClick={() => window.open('/assets/files/produktkatalog.pdf', '_blank')}
              className="w-full cursor-pointer"
              size="sm"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              {t('CompanyInfoCard.openCatalog')}
            </Button>
          </div>
        </div>

        {/* Ytterligare information */}
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-3">{t('CompanyInfoCard.whyTitle')}</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{t('CompanyInfoCard.why1')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{t('CompanyInfoCard.why2')}</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>{t('CompanyInfoCard.why3')}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}