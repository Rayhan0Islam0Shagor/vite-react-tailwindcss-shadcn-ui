import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold tracking-tight">About</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Learn more about this boilerplate
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>About This Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                This is a modern boilerplate built with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Vite - Next generation frontend tooling</li>
                <li>React 19 - The latest version of React</li>
                <li>TypeScript - Type-safe JavaScript</li>
                <li>Tailwind CSS - Utility-first CSS framework</li>
                <li>shadcn/ui - Beautiful component library</li>
                <li>React Router - Client-side routing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

