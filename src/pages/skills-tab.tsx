import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/index"
import { skillGroups } from "@/data/skills"
import { iconHelper, invertOnDark } from "@/data/icon-helper"

export function SkillsTab() {
  return (
          <Card>
            <CardHeader>
              <CardTitle>My Technical Proficiencies</CardTitle>
              <CardDescription>
                Languages, technologies, and tools I work with.
              </CardDescription>
            </CardHeader>
            <CardContent className="animate-in fade-in duration-1000 space-y-6">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-3">
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const icon = iconHelper[item]
                      return (
                        <Badge key={item} variant="outline" className="h-7 gap-2 px-3">
                          {icon && (
                            <img
                              src={icon}
                              alt=""
                              className={`size-4 object-contain ${
                                invertOnDark.has(item) ? "dark:invert" : ""
                              }`}
                              onError={(e) => {
                                e.currentTarget.style.display = "none"
                              }}
                            />
                          )}
                          {item}
                        </Badge>
                      )
                    })}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
    )
}