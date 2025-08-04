import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Offices = () => {
  const offices = [
    {
      title: "Head Office - Biratnagar",
      address: "Main Road, Biratnagar-15\nProvince 1, Morang, Nepal",
      phone: "+977-21-XXXXXX",
      email: "biratnagar@rkaca.com.np",
      hours: "Sunday - Friday: 9:00 AM - 6:00 PM\nSaturday: By Appointment",
      isHeadOffice: true
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Our Offices
            </h1>
            <p className="text-xl font-lato text-primary-foreground/90">
              Strategically located to serve clients across Nepal
            </p>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className={`hover-lift ${office.isHeadOffice ? 'border-secondary/50 ring-1 ring-secondary/20' : ''}`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                    <div>
                      <CardTitle className="font-montserrat">{office.title}</CardTitle>
                      {office.isHeadOffice && (
                        <span className="inline-block bg-secondary/10 text-secondary text-xs font-lato px-2 py-1 rounded-full mt-1">
                          Head Office
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div className="font-lato text-muted-foreground whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-lato text-muted-foreground">{office.phone}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-lato text-muted-foreground">{office.email}</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <div className="font-lato text-muted-foreground whitespace-pre-line">
                      {office.hours}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Plans */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-montserrat font-bold text-foreground mb-6">
            Expanding Our Reach
          </h2>
          <p className="text-xl text-muted-foreground font-lato max-w-3xl mx-auto mb-8">
            We are actively exploring opportunities to establish additional offices in key business centers 
            across Nepal to better serve our growing client base.
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-montserrat">Future Office Locations</CardTitle>
              <CardDescription className="font-lato">
                Planned expansion to serve clients nationwide
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-montserrat font-semibold text-foreground">Kathmandu</h4>
                  <p className="text-sm font-lato text-muted-foreground">Capital Region Office</p>
                </div>
                <div className="p-4 bg-muted rounded-lg">
                  <h4 className="font-montserrat font-semibold text-foreground">Pokhara</h4>
                  <p className="text-sm font-lato text-muted-foreground">Western Region Office</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Offices;