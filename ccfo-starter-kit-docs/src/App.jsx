import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { ScrollArea } from '@/components/ui/scroll-area.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { FileText, Code, Database, CreditCard, Users, Settings, Rocket, BookOpen, Download, ExternalLink } from 'lucide-react'
import ccfoLogo from './assets/clan_culture_logo_v1.png'
import './App.css'

function App() {
  const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleDateString())

  const features = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Next.js Framework",
      description: "Modern React framework with server-side rendering and static site generation"
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Payment System",
      description: "Integrated Stripe payment processing for subscriptions, one-time payments, and investments"
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Database Integration",
      description: "Robust database setup with CockroachDB for scalable data management"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Authentication & Login",
      description: "Secure user authentication with role-based access control"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "UI Components",
      description: "Pre-built, customizable UI components following CCFO brand guidelines"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Deployment Ready",
      description: "Configured for Cloudflare Pages deployment with CI/CD integration"
    }
  ]

  const documentationSections = [
    {
      id: "overview",
      title: "Project Overview",
      content: `The CCFO Boilerplate Starter Kit is a comprehensive foundation for launching diverse online ventures under the Clan Culture Family Office umbrella. It combines a Shopify headless storefront with a custom Shopify app, leveraging Cloudflare infrastructure for optimal performance and scalability.

Key Components:
• Shopify Headless Storefront (Frontend) - Built with Next.js
• Custom Shopify App (Backend/Logic) - Handles business logic and integrations
• Cloudflare Infrastructure - For global CDN performance and deployment

This starter kit enables rapid deployment of:
• Investor Opportunity Pages
• B2B SaaS Product Pages  
• B2C Service Pages`
    },
    {
      id: "architecture",
      title: "System Architecture",
      content: `The CCFO Boilerplate follows a headless commerce architecture with two main applications:

1. Shopify Headless Storefront (Frontend)
   - Technology: Next.js with React
   - Deployment: Cloudflare Pages
   - API Integration: Shopify Storefront API
   - Features: Dynamic landing pages, investor portals, SaaS product pages

2. Custom Shopify App (Backend)
   - Development: Shopify CLI in cloud-based IDE
   - Hosting: Serverless platform (Cloudflare Workers)
   - API Integration: Shopify Admin API
   - Key Modules: Investor Relations Hub, Stripe Integration, Webhook Management

Supporting Infrastructure:
• Cloud-based development environment (GitHub Codespaces/Gitpod)
• GitHub for version control and CI/CD
• CockroachDB for backend data storage
• Secure API key and environment variable management`
    },
    {
      id: "features",
      title: "Core Features",
      content: `Investor Relations Hub (Critical First Feature):
• Data ingestion from Shopify orders/paid webhooks
• Investor CRM integration and management
• Equity tracking and cap table management
• Compliance automation and document generation
• Real-time notifications and reporting

Payment Processing:
• Stripe integration for multiple payment types
• Support for one-time payments, subscriptions, and investments
• Secure checkout flows with Shopify Buy Button JS SDK

Multi-Venture Management:
• Associate transactions and users with specific ventures
• Shopify metafields for venture-specific data storage
• Global platform settings management

Branding & UI/UX:
• CCFO brand guidelines implementation
• Consistent typography (Georgia/Garamond for headings, Helvetica Neue for body)
• Brand color palette (#A6C5DD primary, #E7A9A0 secondary)
• Professional UI components for all user types`
    },
    {
      id: "setup",
      title: "Setup Instructions",
      content: `Development Environment Setup:
1. Set up cloud-based IDE (GitHub Codespaces or Gitpod)
2. Install Node.js runtime and necessary dependencies
3. Configure Shopify CLI for app development

Project Initialization:
1. Create new Shopify app project using Shopify CLI
2. Initialize Next.js project for headless storefront
3. Set up GitHub repositories for version control

Configuration:
1. Configure Shopify Storefront API access
2. Set up Stripe payment integration
3. Configure essential Shopify webhooks
4. Implement CCFO branding elements

Deployment:
1. Deploy Next.js storefront to Cloudflare Pages
2. Deploy custom Shopify app to serverless platform
3. Configure continuous deployment from GitHub`
    },
    {
      id: "deployment",
      title: "Deployment Guide",
      content: `Cloudflare Pages Deployment:
1. Connect GitHub repository to Cloudflare Pages
2. Configure build settings for Next.js
3. Set up environment variables for API keys
4. Enable automatic deployments on Git push

Custom Shopify App Deployment:
1. Choose serverless hosting platform (Cloudflare Workers recommended)
2. Configure API endpoints for Investor Relations Hub
3. Set up webhook endpoints for Shopify integration
4. Implement security measures (API key validation, HTTPS)

Testing & Validation:
1. Test Shopify Storefront API integration
2. Validate webhook processing
3. Test payment flows with Stripe
4. Verify investor relations functionality

Monitoring & Maintenance:
1. Set up error logging and monitoring
2. Configure backup and recovery procedures
3. Implement security auditing processes
4. Plan for regular updates and feature additions`
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <img src={ccfoLogo} alt="Clan Culture Family Office" className="h-12 w-auto" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                  CCFO Boilerplate Starter Kit
                </h1>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                  Documentation & Resources
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary">v1.0.0</Badge>
              <Badge variant="outline">Last Updated: {lastUpdated}</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Georgia, serif' }}>
            Everything You Need to Launch Your Family Office Ventures
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
            A comprehensive Next.js repository with payment systems, database integration, authentication, 
            UI components, and detailed documentation to help you build and launch fast.
          </p>
          <div className="flex justify-center space-x-4">
            <Button 
              className="text-white border-[#A6C5DD]" 
              style={{ backgroundColor: '#A6C5DD', borderColor: '#A6C5DD' }}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Starter Kit
            </Button>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" />
              View Documentation
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-lg" style={{ backgroundColor: '#A6C5DD', color: 'white' }}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg" style={{ fontFamily: 'Georgia, serif' }}>
                    {feature.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Documentation Tabs */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl" style={{ fontFamily: 'Georgia, serif' }}>
              Documentation
            </CardTitle>
            <CardDescription style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              Comprehensive guides to help you set up, customize, and deploy your CCFO boilerplate.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                {documentationSections.map((section) => (
                  <TabsTrigger key={section.id} value={section.id} className="text-sm">
                    {section.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {documentationSections.map((section) => (
                <TabsContent key={section.id} value={section.id}>
                  <ScrollArea className="h-96 w-full rounded-md border p-4">
                    <div style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
                      <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                        {section.title}
                      </h3>
                      <div className="whitespace-pre-line text-sm leading-relaxed">
                        {section.content}
                      </div>
                    </div>
                  </ScrollArea>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <Card>
          <CardHeader>
            <CardTitle style={{ fontFamily: 'Georgia, serif' }}>Quick Links & Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Development Resources</h4>
                <div className="space-y-1">
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Shopify CLI Documentation
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Next.js Documentation
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Cloudflare Pages Guide
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold" style={{ fontFamily: 'Georgia, serif' }}>Integration Guides</h4>
                <div className="space-y-1">
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Stripe Integration Setup
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    Shopify Webhook Configuration
                  </a>
                  <a href="#" className="flex items-center text-sm text-blue-600 hover:underline">
                    <ExternalLink className="mr-2 h-3 w-3" />
                    GitHub Codespaces Setup
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-gray-200" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              © 2025 Clan Culture Family Office | clanculture.org
            </p>
            <p className="text-sm mt-2 opacity-75" style={{ fontFamily: 'Helvetica Neue, sans-serif' }}>
              CCFO Boilerplate Starter Kit - Built for rapid venture deployment
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



// Function to simulate loading documentation content dynamically
// In a real application, this would fetch content from a CMS, database, or markdown files
const loadDocumentationContent = async (sectionId) => {
  // This is a placeholder. In a real app, you'd fetch from a source.
  // For now, we'll use the hardcoded content in documentationSections.
  return documentationSections.find(section => section.id === sectionId)?.content || "Content not found.";
};


