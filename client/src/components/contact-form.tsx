import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        packageType: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent successfully!",
                description: "We'll get back to you within 24 hours.",
            });
            setFormData({ name: "", email: "", company: "", packageType: "", message: "" });
            setIsSubmitting(false);
        }, 1000);
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <section id="contact" className="py-24 bg-muted/30 backdrop-blur-xl">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4 tracking-tight">Get Your Quote</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to create high-converting videos? Tell us about your goals and let us build something exceptional.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* CONTACT FORM */}
                    <Card className="glass-card shadow-2xl border border-white/20">
                        <CardHeader>
                            <CardTitle className="text-3xl font-semibold">Send us a message</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Name *</Label>
                                        <Input
                                            value={formData.name}
                                            onChange={(e) => handleChange("name", e.target.value)}
                                            placeholder="Your full name"
                                            required
                                            className="glass-input"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label>Email *</Label>
                                        <Input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                            placeholder="your@email.com"
                                            required
                                            className="glass-input"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Company</Label>
                                    <Input
                                        value={formData.company}
                                        onChange={(e) => handleChange("company", e.target.value)}
                                        placeholder="Your company name"
                                        className="glass-input"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label>Package Interest</Label>
                                    <Select value={formData.packageType} onValueChange={(value) => handleChange("packageType", value)}>
                                        <SelectTrigger className="glass-input cursor-pointer">
                                            <SelectValue placeholder="Select a package" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="basic">BASIC PACKAGE</SelectItem>
                                            <SelectItem value="advanced">ADVANCED PACKAGE</SelectItem>
                                            <SelectItem value="premium">PREMIUM PACKAGE</SelectItem>
                                            <SelectItem value="custom">CUSTOM PACKAGE</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label>Message *</Label>
                                    <Textarea
                                        value={formData.message}
                                        onChange={(e) => handleChange("message", e.target.value)}
                                        placeholder="Tell us about your project, goals, and timeline..."
                                        className="min-h-[140px] glass-input"
                                        required
                                    />
                                </div>

                                <Button type="submit" className="w-full py-4 text-lg font-medium" disabled={isSubmitting}>
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* CONTACT DETAILS */}
                    <div className="space-y-8">
                        <Card className="glass-card p-6 border border-white/20">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email Us</h3>
                                    <p className="text-muted-foreground">hello@clipmasters.uk</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="glass-card p-6 border border-white/20">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-green-100/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <Phone className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Schedule a Call</h3>
                                    <p className="text-muted-foreground">Book a free strategy session</p>
                                </div>
                            </div>
                            <Button
                                onClick={() => window.open("https://calendly.com/clipmastersagency/strategycall", "_blank")}
                                variant="outline"
                                className="w-full glass-button"
                            >
                                Book Now
                            </Button>
                        </Card>

                        <Card className="glass-card p-6 border border-white/20">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-purple-100/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <MapPin className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Location</h3>
                                    <p className="text-muted-foreground">Remote • Working Worldwide</p>
                                </div>
                            </div>
                        </Card>

                        <Card className="glass-card p-6 border border-white/20">
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="w-12 h-12 bg-orange-100/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Response Time</h3>
                                    <p className="text-muted-foreground">Within 24 hours</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* Glassmorphism Styles */
// Add these to your global.css if needed:
// .glass-card {
//   background: rgba(255, 255, 255, 0.15);
//   backdrop-filter: blur(18px) saturate(180%);
//   -webkit-backdrop-filter: blur(18px) saturate(180%);
//   border-radius: 20px;
// }
// .glass-input {
//   background: rgba(255, 255, 255, 0.2);
//   backdrop-filter: blur(12px);
// }
// .glass-button {
//   backdrop-filter: blur(12px);
//   background: rgba(255, 255, 255, 0.2);
// }
