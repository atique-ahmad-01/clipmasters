import { Card } from "@/components/ui/card";

export function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-muted/30 backdrop-blur-xl">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                
                {/* HEADER */}
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold tracking-tight mb-4">
                        Ready to roll?
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Feel free to snag a spot on the calendar for a chat with our Project Manager!
                    </p>
                </div>

                {/* CALENDLY CONTAINER */}
                <Card
                    className="
                        border border-white/20 
                        rounded-3xl 
                        backdrop-blur-xl 
                        bg-white/5
                        overflow-hidden
                    "
                >
                    <div className="p-6 sm:p-8 lg:p-10">
                        <div className="w-full h-[700px] rounded-2xl overflow-hidden border border-white/10">
                            <iframe
                                src="https://calendly.com/clipmastersagency/strategycall?hide_gdpr_banner=1"
                                className="w-full h-full border-0"
                                allow="camera; microphone; fullscreen"
                            />
                        </div>
                    </div>
                </Card>

            </div>
        </section>
    );
}
