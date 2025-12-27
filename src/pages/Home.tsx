import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Zap, Shield, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: <Rocket className="h-6 w-6 text-primary" />,
    title: 'Lightning Fast',
    description:
      'Built with Vite and React for the fastest development experience and production builds.',
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: 'Modern UI',
    description:
      'Beautiful, responsive components built with shadcn/ui and Tailwind CSS.',
  },
  {
    icon: <Shield className="h-6 w-6 text-primary" />,
    title: 'Type Safe',
    description:
      'Full TypeScript support for better developer experience and fewer bugs.',
  },
  {
    icon: <Code2 className="h-6 w-6 text-primary" />,
    title: 'Developer Friendly',
    description:
      'Pre-configured with ESLint, Prettier, and all the tools you need to build amazing apps.',
  },
];

export default function Home() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Build <span className="text-primary">amazing</span> web apps
              faster
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A modern, opinionated boilerplate for building web applications
              with Vite, React, TypeScript, and shadcn/ui.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2" asChild>
                <Link to="/about">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Everything you need to build fast
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our boilerplate comes with all the modern tools and libraries you
              need to build amazing web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Ready to get started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start building your next project with our modern boilerplate
              today.
            </p>
            <Button size="lg" className="gap-2" asChild>
              <Link to="/about">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
