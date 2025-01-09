import AddExtension from "./AddExtension/AddExtension"
import FeatureDash from "./FeatureDash/FeatureDash"
import Navigation from "./Navigation/Navigation"


const dummyUsers = [
  { name: 'Jonathan Reed', email: 'jonathanreed@gmail.com', avatar: '/placeholder.svg?height=32&width=32' },
  { name: 'Kathy Carter', email: 'kathy@gmail.com', avatar: '/placeholder.svg?height=32&width=32' },
  { name: 'Mike Bennett', email: 'mike@gmail.com', avatar: '/placeholder.svg?height=32&width=32' }
]

const codeSnippet = `def process_payment(amount, card_number):
  Kathy.card(card_number):
    # Processing payment at 4:00:21.27...

    # Generate auth payment gateway
    return "Payment successful!"

  else:
    return "Card invalid!"`

export default function CardsPreview() {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-white mb-8">Cards Preview</h1>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Extension Card</h2>
          <div className="grid grid-cols-2 gap-10 max-sm:grid-cols-1">
          <AddExtension
            icon="/placeholder.svg?height=24&width=24"
            title="Google Translate"
            description="View translations easily as you browse the web. By the Google Translate team."
            viewCount={10558}
            author={{
                name: 'Steven Robertson',
                avatar: '/placeholder.svg?height=16&width=16'
            }}
            onAdd={() => console.log('Add extension')}
            />
          <AddExtension
            icon="/placeholder.svg?height=24&width=24"
            title="Google Translate"
            description="View translations easily as you browse the web. By the Google Translate team."
            viewCount={10558}
            author={{
                name: 'Steven Robertson',
                avatar: '/placeholder.svg?height=16&width=16'
            }}
            onAdd={() => console.log('Add extension')}
            />
            </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Feature Dashboard Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureDash
              variant="users"
              title="Our Benefits"
              description="Drive growth with powerful tools, flexible integrations, and personalized customer care."
              users={dummyUsers}
            />
            <FeatureDash
              variant="voice"
              title="Voice Prompts"
              description="Personalize voice messages with custom prompts."
            />
            <FeatureDash
              variant="code"
              title="Code Collaboration"
              description="Collaborate securely with encryption and role-based access, protecting your code."
              codeSnippet={codeSnippet}
            />
            <FeatureDash
              variant="integration"
              title="Instant Integration"
              description="Easily connect and manage integrations as needed."
              enabled={true}
            />
            <FeatureDash
              variant="billing"
              title="Automated Billing"
              description="Simplify your workflow with automated recurring billing."
            />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white mb-4">Navigation Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Navigation
              variant="header"
              title="Share here, there, and everywhere."
              subtitle="COMMUNITY"
              className="md:col-span-3"
            />
            <Navigation
              variant="action"
              title="Instant Talk"
              icon="/placeholder.svg?height=32&width=32"
            />
            <Navigation
              variant="feature"
              title="Fine Details"
              subtitle="Features cards section concept details by Your Brand"
              glowColor="#00FF00"
              className="bg-gradient-to-br from-green-500/20 to-green-500/5"
            />
            <Navigation
              variant="action"
              title="Encrypted Approach"
              icon="/placeholder.svg?height=32&width=32"
            />
            <Navigation
              variant="action"
              title="Explore Features"
              className="md:col-span-2 bg-gradient-to-br from-green-500 to-green-600"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
