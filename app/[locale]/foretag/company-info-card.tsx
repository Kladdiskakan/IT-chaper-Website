"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, FileText, ExternalLink } from "lucide-react";

export function CompanyInfoCard() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:naringsliv@it.kth.se?subject=Företagsförfrågan';
  };

  const handleCatalogClick = () => {
    // Öppna PDF i nytt fönster/tab
    window.open('/assets/files/produktkatalog.pdf', '_blank');
  };

  return (
    <Card className="h-fit sticky top-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          Kontakt & Produktkatalog
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* E-post sektion */}
        <div className="space-y-3">
          <h4 className="font-medium">Tveka inte att kontakta oss om du har några frågor</h4>
          <div className="space-y-2">

            <p className="text-sm">
              <a
                href="mailto:naringsliv@it.kth.se"
                className="text-primary hover:underline break-all"
              >
                naringsliv@kth.it
              </a>
            </p>
            <Button
              onClick={handleEmailClick}
              variant="outline"
              size="sm"
              className="w-full cursor-pointer"
            >
              <Mail className="h-4 w-4 mr-2" />
              Skicka e-post
            </Button>
          </div>
        </div>

        {/* Produktkatalog sektion */}
        <div className="space-y-3">
          <h4 className="font-medium">Vår produktkatalog</h4>
          <p className="text-sm text-muted-foreground">
            Dessa är färdiga paketförslag med givetvis är vi öppna för att skräddarsy något som passar just ert företag!
          </p>

          <div className="border rounded-lg p-4 bg-muted/30">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-8 w-8 text-red-500" />
              <div>
                <p className="font-medium text-sm">Produktkatalog 2026</p>
                <p className="text-xs text-muted-foreground">PDF • 6.9 MB</p>
              </div>
            </div>

            <Button
              onClick={handleCatalogClick}
              className="w-full cursor-pointer"
              size="sm"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Öppna katalog
            </Button>
          </div>
        </div>

        {/* Ytterligare information */}
        <div className="pt-4 border-t">
          <h4 className="font-medium mb-3">Varför samarbeta med oss?</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Nå över 1000 IT-studenter</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Framtidens ingenjörer och utvecklare</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Event, rekrytering & sponsring</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}