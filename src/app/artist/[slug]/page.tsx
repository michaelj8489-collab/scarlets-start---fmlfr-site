import { BrandedShell } from "@/components/ui/BrandedShell"

export default async function ArtistProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <BrandedShell
      eyebrow="Artist Profile"
      title={slug.replaceAll("-", " ")}
      description="This private artist profile route is ready for a premium artist hero, bio, top StarMaker links, social links, and feature history."
    />
  )
}
