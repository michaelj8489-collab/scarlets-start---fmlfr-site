import { BrandedShell } from "@/components/ui/BrandedShell"

export default async function ShowPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <BrandedShell
      eyebrow="Show"
      title={slug.replaceAll("-", " ")}
      description="This private show route is prepared for host information, schedule details, featured artists, chat links, and listen actions."
    />
  )
}
