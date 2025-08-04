import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Events = () => {
  const upcomingEvents = [
    {
      title: "Annual Tax Planning Workshop",
      description: "Comprehensive workshop on tax planning strategies for businesses in Nepal",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Biratnagar Chamber of Commerce",
      attendees: "50+ Expected"
    }
  ];

  const pastEvents = [
    {
      title: "Digital Accounting Seminar",
      description: "Introduction to cloud-based accounting solutions and best practices",
      date: "December 10, 2023",
      location: "Hotel Koshi, Biratnagar",
      attendees: "75 Participants"
    },
    {
      title: "Risk Management Conference",
      description: "Industry conference on emerging risks and mitigation strategies",
      date: "November 20, 2023",
      location: "Itahari Business Hub",
      attendees: "100+ Participants"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-40 text-white overflow-hidden" style={{ maxHeight: 600 }}>
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80')"
          }}
        />
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-montserrat font-bold mb-6">
              Events & Workshops
            </h1>
            <p className="text-xl font-lato text-white/90">
              Join our educational events and professional development workshops
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
            Upcoming Events
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover-lift border-secondary/30">
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="font-montserrat">{event.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-lato">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{event.date} • {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-foreground mb-8">
            Past Events
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader>
                  <CardTitle className="font-montserrat">{event.title}</CardTitle>
                  <CardDescription className="font-lato">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm font-lato">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span>{event.attendees}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;