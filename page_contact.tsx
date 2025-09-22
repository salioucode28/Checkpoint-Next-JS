import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 pt-16">
          <h1 className="text-5xl font-bold text-slate-900">Contact Me</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Let’s connect! Feel free to reach out for collaborations, freelance opportunities, 
            or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Email</p>
                    <p className="text-slate-600">john.smith@example.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Phone</p>
                    <p className="text-slate-600">+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-slate-900">Location</p>
                    <p className="text-slate-600">San Francisco, CA</p>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-slate-900 mb-2">Availability</p>
                  <Badge 
                    variant="secondary" 
                    className="bg-green-100 text-green-800 hover:bg-green-200"
                  >
                    Available for hire
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                      <Input placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                      <Input type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                    <Input placeholder="Subject" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                    <Textarea placeholder="Write your message here..." className="h-32" />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
