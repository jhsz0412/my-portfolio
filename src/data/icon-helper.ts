const rawIcons: Record<string, string> = {
  // Frontend
  "React": "/tech-logos/react.png",
  "React JS": "/tech-logos/react.png",
  "HTML": "/tech-logos/html.png",
  "CSS": "/tech-logos/css.png",
  "TypeScript": "/tech-logos/typescript.png",
  "JavaScript": "/tech-logos/javascript.png",
  "Vite": "/tech-logos/vite.png",
  "Tailwind CSS": "/tech-logos/tailwind.png",
  "ShadCN": "/tech-logos/shadcn.png",
  "Bootstrap5": "/tech-logos/bootstrap.png",
  "Material UI": "/tech-logos/materialui.png",
  "ESLint": "/tech-logos/eslint.png",
  "Prettier": "/tech-logos/prettier.png",

  // Backend
  "C#": "/tech-logos/csharp.png",
  "Python": "/tech-logos/python.png",
  "ASP.NET Core": "/tech-logos/aspnetcore.png",
  "ASP.NET Core Web API": "/tech-logos/aspnetcore.png",
  "Node.js": "/tech-logos/nodejs.png",
  "FastAPI": "/tech-logos/fastapi.png",
  "PHP": "/tech-logos/php.png",
  "RestAPI": "/tech-logos/restapi.png",
  "REST API": "/tech-logos/restapi.png",
  "WebSocket": "/tech-logos/websocket.png",
  "JWT": "/tech-logos/jwt.png",
  "MS SQL": "/tech-logos/mssql.png",
  "MySQL": "/tech-logos/mysql.png",

  // Security | Identity
  "OAuth 2.0": "/tech-logos/oauth.png",

  // DevOps | Cloud
  "Azure": "/tech-logos/azure.png",
  "Cloudflare": "/tech-logos/cloudflare.png",
  "Github Actions": "/tech-logos/github.png",
  "GitLab CI": "/tech-logos/gitlab.png",

  // CMS & No-Code
  "WordPress": "/tech-logos/wordpress.png",
  "Odoo ERP": "/tech-logos/odoo.png",
  "n8n": "/tech-logos/n8n.png",

  // AI
  "OpenAI": "/tech-logos/openai.png",
  "Codex": "/tech-logos/codex.png",
  "Anthropic": "/tech-logos/anthropic.png",
  "Claude Code": "/tech-logos/claudecode.png",

  // Developer Tools
  "Git": "/tech-logos/git.png",
  "Github": "/tech-logos/github.png",
  "GitLab": "/tech-logos/gitlab.png",
  "VS Code": "/tech-logos/vscode.png",
  "Visual Studio": "/tech-logos/visualstudio.png",
  "SQL Server Management Studio": "/tech-logos/mssql.png",
  "Jasper Studio": "/tech-logos/jasper.png",
  "Jira": "/tech-logos/jira.png",
  "Lark": "/tech-logos/lark.png",
  "Teams": "/tech-logos/teams.png",

  // Other
  "Figma": "/tech-logos/figma.png",
  "Canva": "/tech-logos/canva.png",
  "Linux Ubuntu": "/tech-logos/linux.png",
  "Docker": "/tech-logos/docker.png",
  "Kubernetes": "/tech-logos/kubernetes.png",
}

const withBase = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`

export const iconHelper: Record<string, string> = Object.fromEntries(
  Object.entries(rawIcons).map(([name, path]) => [name, withBase(path)])
)

// Logos that are black and disappear in dark mode. Add any name that looks invisible.
export const invertOnDark = new Set(["ShadCN", "Github", "OpenAI", "Codex", "JWT"])