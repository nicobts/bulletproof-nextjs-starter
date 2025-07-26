import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { ArrowRight, Zap, Shield, Database, TestTube, Palette, Code2, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 dark:from-slate-950 dark:via-blue-950/30 dark:to-indigo-950/50">
      {/* Navigation */}
      <header className="relative border-b border-slate-200/50 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-900/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <Code2 className="h-4 w-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                NextJS Boilerplate
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#features"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                Features
              </a>
              <a
                href="#docs"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                Docs
              </a>
              <a
                href="#examples"
                className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                Examples
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Button variant="outline" size="sm">
                <SignInButton>Sign in</SignInButton>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                Get Started
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />

        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="mx-auto max-w-4xl text-center">
            {/* Announcement Badge */}
            <div className="mb-8 flex justify-center">
              <Badge
                variant="secondary"
                className="group cursor-pointer border border-slate-200/50 bg-slate-100/50 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-200/50 dark:border-slate-800/50 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-700/50 transition-all duration-200"
              >
                <Sparkles className="mr-2 h-3 w-3" />
                Now with Next.js 15 & React 19 support
                <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
              </Badge>
            </div>

            {/* Main Heading */}
            <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 dark:from-white dark:via-slate-100 dark:to-white bg-clip-text text-transparent">
                Production-ready
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                development stack
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-12 text-xl leading-relaxed text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              A comprehensive Next.js boilerplate with authentication, database integration, testing, and modern
              tooling. Everything you need to ship your next project without the setup hassle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 text-base font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Start building for free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group px-8 py-3 text-base font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200 bg-transparent"
              >
                View documentation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>

            {/* Feature Highlight */}
            <div className="flex items-center justify-center text-sm text-slate-500 dark:text-slate-400">
              <Zap className="mr-2 h-4 w-4 text-green-500" />
              Developer experience first. Save weeks of setup time with ready-made features.
            </div>
          </div>
        </div>
      </main>

      {/* Project Explanation Section */}
      <section className="relative py-24 bg-gradient-to-b from-white/50 to-slate-50/80 dark:from-slate-900/50 dark:to-slate-950/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                <span className="bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                  Everything you need to build modern web apps
                </span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Skip the boilerplate setup and focus on building your product. This starter includes all the tools and
                patterns you need for production-ready applications.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Authentication */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-blue-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Authentication Ready</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Complete auth system with Clerk integration. Social logins, MFA, user management, and passwordless
                    authentication out of the box.
                  </p>
                </div>
              </div>

              {/* Database */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-emerald-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Type-Safe Database</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    DrizzleORM with PostgreSQL support. Type-safe queries, migrations, and a beautiful database studio
                    for development.
                  </p>
                </div>
              </div>

              {/* Testing */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-purple-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-600">
                    <TestTube className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Testing Suite</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Comprehensive testing with Vitest for unit tests and Playwright for E2E. Coverage reports and CI/CD
                    ready configurations.
                  </p>
                </div>
              </div>

              {/* UI Components */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-orange-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-600">
                    <Palette className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Beautiful UI</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Shadcn/ui components with Tailwind CSS. Dark mode support, responsive design, and accessible
                    components by default.
                  </p>
                </div>
              </div>

              {/* Developer Experience */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-cyan-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                    <Code2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Developer Tools</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    ESLint, Prettier, Husky git hooks, TypeScript strict mode, and VS Code configurations for the best
                    development experience.
                  </p>
                </div>
              </div>

              {/* Performance */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200/50 bg-white/50 p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 dark:border-slate-800/50 dark:bg-slate-900/50 dark:hover:shadow-green-400/10">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-600">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Optimized Performance</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Built with Next.js 15 App Router, Server Components, and modern optimization techniques for
                    lightning-fast performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center rounded-full border border-slate-200/50 bg-white/50 px-6 py-3 backdrop-blur-sm dark:border-slate-800/50 dark:bg-slate-900/50">
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mr-3">
                  Ready to start building?
                </span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  Get started now
                  <ArrowRight className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
