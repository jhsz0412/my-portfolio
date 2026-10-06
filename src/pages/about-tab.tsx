import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/index"
import { MapPin, Download } from "lucide-react"
import { Separator } from "@base-ui/react"
import { Typewriter } from "@/components/typewriter"
import { contactLinks } from "@/data/contact"
import { experiences, education } from "@/data/experiences"
import { iconHelper, invertOnDark } from "@/data/icon-helper"
import { asset } from "@/lib/asset"

export function AboutTab() {
  return (
          <Card>
            <CardHeader className="justify-items-center text-center">
              <img
                src={asset("/me.jpg")}
                alt="My profile"
                className="mx-auto size-32 rounded-full border object-cover sm:size-40"
              />
              <CardTitle className="mt-4 text-xl font-bold sm:text-3xl">
                <Typewriter text="James Harold Saez" speed={100} />
              </CardTitle>
              <CardDescription>
                Technical Consultant <b>|</b> Full Stack Developer <b>|</b> Freelance Web Developer
              </CardDescription>

              {/* email and links */}
              <div className="mt-2 flex flex-wrap justify-center gap-2">
                {contactLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="size-4" />
                    {label}
                  </a>
                ))}
                <a
                  href={asset("/resume.pdf")}
                  download="James_Harold_Saez_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <Download className="size-4" />
                  Resume
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-sm text-muted-foreground">
              <p className="mx-auto max-w-2xl text-center">
                Technical Consultant and Full-Stack Developer focused on building business applications, HRIS solutions, and reporting systems. I work across backend development, system integration, databases, and frontend interfaces to turn business requirements into practical software.
              </p>

              {/* EXPERIENCE TIMELINE */}
            <div className="space-y-4">
              <h3 className="text-start text-base font-semibold text-foreground">
               Professional Experience
              </h3>

              <ol className="ml-3 border-l">
                {experiences.map((exp) => (
                  <li
                    key={`${exp.company}-${exp.period}`}
                    className="relative ml-6 pb-8 last:pb-0"
                  >
                    {/* timeline dot */}
                    <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary ring-2 ring-border" />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{exp.company}</h4>
                      <p className="text-xs">{exp.type}</p>
                      <p className="font-medium text-foreground">{exp.position}</p>
                      <p className="text-xs">
                        {exp.period} · {exp.duration}
                      </p>
                      {exp.location && (
                      <p className="flex items-center gap-1.5 text-xs">
                        <MapPin className="size-3.5" />
                        {exp.location}
                      </p>
                    )}
                      <p>{exp.description}</p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {exp.skills.map((skill) => {
                          const icon = iconHelper[skill]
                          return (
                            <Badge key={skill} variant="secondary" className="h-7 gap-2 px-3">
                              {icon && (
                                <img
                                  src={icon}
                                  alt=""
                                  className={`size-4 object-contain ${
                                    invertOnDark.has(skill) ? "dark:invert" : ""
                                  }`}
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                  }}
                                />
                              )}
                              {skill}
                            </Badge>
                          )
                        })}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <Separator></Separator>

              {/* EDUCATION TIMELINE */}
            <div className="space-y-4">
              <h3 className="text-start text-base font-semibold text-foreground">
               Education
              </h3>

              <ol className="ml-3 border-l">
                {education.map((edu) => (
                  <li
                    key={`${edu.school}-${edu.year}`}
                    className="relative ml-6 pb-8 last:pb-0"
                  >
                    {/* timeline dot */}
                    <span className="absolute -left-[29px] top-1.5 size-2.5 rounded-full border-2 border-background bg-primary ring-2 ring-border" />

                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground">{edu.school}</h4>
                      <p className="font-medium text-foreground">{edu.degree}</p>
                      <p className="text-xs">{edu.year}</p>
                      <p className="text-xs">
                        {edu.remarks}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            </CardContent>
          </Card>
    )
}