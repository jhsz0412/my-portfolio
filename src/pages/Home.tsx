import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/index"
import { ModeToggle } from "@/components/mode-toggle"
import { AboutTab } from "./about-tab"
import { ProjectsTab } from "./projects-tab"
import { SkillsTab } from "./skills-tab"
import { ContactTab } from "./contact-tab"
import { Separator } from "@base-ui/react"

export default function Home() {

  return (
    <main className="relative flex min-h-screen justify-center px-4 py-8 sm:px-6 sm:py-12">
      <Tabs defaultValue="about" className="w-full max-w-4xl">
      <div className="sticky top-0 z-10 flex justify-center bg-background/10 py-2 backdrop-blur">
        <TabsList variant="line">
          <TabsTrigger value="about" className="px-2 text-xs sm:px-4 sm:text-sm">
            Home
          </TabsTrigger>
          <TabsTrigger value="projects" className="px-2 text-xs sm:px-4 sm:text-sm">
            Projects
          </TabsTrigger>
          <TabsTrigger value="skills" className="px-2 text-xs sm:px-4 sm:text-sm">
            Skills
          </TabsTrigger>
          <TabsTrigger value="contact" className="px-2 text-xs sm:px-4 sm:text-sm">
            Contact
          </TabsTrigger>
        </TabsList>
        <div className="absolute right-4">
        <ModeToggle />
      </div>
      </div> 

        <Separator className="my-3" />

        {/* ABOUT */}
        <TabsContent value="about">
          <AboutTab />
        </TabsContent>

        {/* PROJECTS */}
        <TabsContent value="projects">
          <ProjectsTab />
        </TabsContent>

        {/* SKILLS */}
        <TabsContent value="skills">
          <SkillsTab />
        </TabsContent>

        {/* CONTACT */}
        <TabsContent value="contact">
          <ContactTab />
        </TabsContent>


      </Tabs>
    </main>
  )
}