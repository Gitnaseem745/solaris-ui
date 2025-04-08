import { Heading, Text } from "@/components/ui/typography";

export default function TypographyDemo() {
  return (
      <div className="space-y-8 w-full">
        <Heading level="h3">1. Heading Levels</Heading>
        <div className="space-y-4">
          <Heading level="h1">Heading 1</Heading>
          <Heading level="h2">Heading 2</Heading>
          <Heading level="h3">Heading 3</Heading>
          <Heading level="h4">Heading 4</Heading>
          <Heading level="h5">Heading 5</Heading>
          <Heading level="h6">Heading 6</Heading>
        </div>

        <Heading level="h3">2. Alignment</Heading>
        <div className="space-y-4">
          <Heading level="h3" align="left">
            Left Aligned
          </Heading>
          <Heading level="h3" align="center">
            Center Aligned
          </Heading>
          <Heading level="h3" align="right">
            Right Aligned
          </Heading>
        </div>

        <Heading level="h3">3. Weights</Heading>
        <div className="space-y-4">
          <Heading level="h3" weight="light">
            Light Weight
          </Heading>
          <Heading level="h3" weight="normal">
            Normal Weight
          </Heading>
          <Heading level="h3" weight="medium">
            Medium Weight
          </Heading>
          <Heading level="h3" weight="semibold">
            Semibold Weight
          </Heading>
          <Heading level="h3" weight="bold">
            Bold Weight
          </Heading>
          <Heading level="h3" weight="extrabold">
            Extrabold Weight
          </Heading>
        </div>

        <Heading level="h3">1. Text Variants</Heading>
        <div className="space-y-4">
          <Text>Default text with normal weight and size.</Text>
          <Text size="xs">Extra small text size.</Text>
          <Text size="sm">Small text size.</Text>
          <Text size="base">Base text size (default).</Text>
          <Text size="lg">Large text size.</Text>
          <Text size="xl">Extra large text size.</Text>
        </div>

        <Heading level="h3">2. Styles</Heading>
        <div className="space-y-4">
          <Text variant="default">Default text style.</Text>
          <Text variant="muted">Muted text style for less important content.</Text>
          <Text variant="accent">Accent text style for highlighting.</Text>
          <Text variant="destructive">Destructive text style for warnings or errors.</Text>
        </div>

        <Heading level="h3">3. Weights and Leading</Heading>
        <div className="space-y-4">
          <Text weight="light">Light weight text.</Text>
          <Text weight="normal">Normal weight text.</Text>
          <Text weight="medium">Medium weight text.</Text>
          <Text weight="semibold">Semibold weight text.</Text>
          <Text weight="bold">Bold weight text.</Text>

          <Text leading="tight" className="max-w-md">
            This text has tight line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
            risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </Text>

          <Text leading="relaxed" className="max-w-md">
            This text has relaxed line height. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
          </Text>
        </div>
      </div>
    )
  }
