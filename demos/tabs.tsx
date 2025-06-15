import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabsDemo() {
    return (
        <section className="w-full">
                <h2 className="text-2xl font-semibold mb-4">Basic Example</h2>
                <Tabs defaultValue="Tab 1" className="w-full">
                    <TabsList>
                        {[...Array(3)].map((_, i) => (
                            <TabsTrigger value={`Tab ${i+1}`} key={i}>Tab {i+1}</TabsTrigger>
                        ))}
                    </TabsList>
                    
                    {[...Array(3)].map((_, i) => (
                        <TabsContent value={`Tab ${i+1}`} key={i} className="p-4">
                            <h3 className="text-lg font-medium mb-2">Content for Tab {i+1}</h3>
                            <p>This is the content area for tab {i+1}. You can put any content here.</p>
                        </TabsContent>
                    ))}
                </Tabs>
            </section>
    )
}
