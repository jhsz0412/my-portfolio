import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/index"
import { projects } from "@/data/projects"
import { iconHelper, invertOnDark } from "@/data/icon-helper"
import { asset } from "@/lib/asset"

export function ProjectsTab() {
  return (
          <Card>
            <CardHeader>
              <CardTitle>Featured Projects</CardTitle>
              <CardDescription>A selection of things I've built.</CardDescription>
            </CardHeader>
            <CardContent className="animate-in fade-in duration-1000 grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="overflow-hidden rounded-lg border"
                >
                  {/* CAROUSEL (replaces the old <img>) */}
                  <Carousel className="w-full">
                    <CarouselContent className="ml-0">
                      {project.images.map((src, index) => (
                        <CarouselItem key={src} className="pl-0">
                          <img
                            src={asset(src)}
                            alt={`${project.title} screenshot ${index + 1}`}
                            className="aspect-video w-full object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {project.images.length > 1 && (
                      <>
                      <CarouselPrevious className="left-2 border-0 bg-black/60 text-white hover:bg-black/80 hover:text-white dark:bg-black/60 dark:hover:bg-black/80" />
                      <CarouselNext className="right-2 border-0 bg-black/60 text-white hover:bg-black/80 hover:text-white dark:bg-black/60 dark:hover:bg-black/80" />
                      </>
                    )}
                  </Carousel>

                  <div className="space-y-3 p-4">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => {
                        const icon = iconHelper[t]
                        return (
                          <Badge key={t} variant="secondary" className="h-7 gap-2 px-3">
                            {icon && (
                              <img
                                src={icon}
                                alt=""
                                className={`size-4 object-contain ${
                                  invertOnDark.has(t) ? "dark:invert" : ""
                                }`}
                                onError={(e) => {
                                  e.currentTarget.style.display = "none"
                                }}
                              />
                            )}
                            {t}
                          </Badge>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
    )
}