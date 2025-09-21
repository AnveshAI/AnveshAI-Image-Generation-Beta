
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, ArrowLeft, FileText } from "lucide-react";

export default function TermsOfService() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="relative z-10 p-6 border-b border-gray-200/50 dark:border-gray-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Terms of Service</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Rules and guidelines for using AnveshAI</p>
              </div>
            </div>
          </div>
          
          <Button
            onClick={toggleTheme}
            variant="outline"
            size="icon"
            className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50"
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {/* Introduction */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle className="text-2xl gradient-text">Terms of Service</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Last updated: January 8, 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Welcome to AnveshAI! These Terms of Service ("Terms") govern your use of our AI image generation service. By using AnveshAI, you agree to these terms.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  <strong>Key Point:</strong> AnveshAI is completely free, requires no registration, and is provided "as-is" without warranties.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Acceptance of Terms */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                By accessing and using AnveshAI, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </CardContent>
          </Card>

          {/* Service Description */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>2. Service Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">AnveshAI provides:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>AI-powered image generation from text prompts</li>
                <li>Persistent storage of generated images</li>
                <li>Free access without registration requirements</li>
                <li>RESTful API for developers</li>
                <li>Web interface for easy image generation</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>3. User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">You agree to:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Use the service for lawful purposes only</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to overwhelm or abuse the service</li>
                  <li>Not use the service to generate harmful, illegal, or offensive content</li>
                  <li>Not reverse engineer or attempt to access the underlying AI models</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prohibited Content:</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Illegal, harmful, or offensive material</li>
                  <li>Content that violates others' privacy or rights</li>
                  <li>Spam or promotional content</li>
                  <li>Content that could harm minors</li>
                  <li>Copyrighted material without permission</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>4. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Your Generated Images</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>You retain rights to images generated from your prompts</li>
                  <li>You may use generated images for any lawful purpose</li>
                  <li>You may modify, distribute, or commercialize your generated images</li>
                  <li>Generated images include an AnveshAI watermark</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">AnveshAI Service</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>The AnveshAI platform and code are owned by the developers</li>
                  <li>You may not copy, modify, or redistribute the service itself</li>
                  <li>API access is provided for legitimate use only</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Service Availability */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>5. Service Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                AnveshAI is provided free of charge and "as available." We make no guarantees about:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Continuous service availability or uptime</li>
                <li>Speed or performance of image generation</li>
                <li>Quality or accuracy of generated images</li>
                <li>Permanent storage of generated content</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 mt-4">
                We reserve the right to modify, suspend, or discontinue the service at any time without notice.
              </p>
            </CardContent>
          </Card>

          {/* Privacy and Data */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>6. Privacy and Data</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Generated images are publicly accessible via unique URLs</li>
                <li>We do not collect personal information or require accounts</li>
                <li>Text prompts and generated images may be analyzed for service improvement</li>
                <li>We use third-party AI services that may have their own data policies</li>
                <li>See our Privacy Policy for detailed information</li>
              </ul>
            </CardContent>
          </Card>

          {/* Disclaimers and Limitations */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>7. Disclaimers and Limitations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Service Disclaimer</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  AnveshAI is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Limitation of Liability</h4>
                <p className="text-gray-700 dark:text-gray-300">
                  In no event shall AnveshAI or its developers be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>8. Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                AnveshAI relies on third-party AI services for image generation. These services have their own terms and policies:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>We are not responsible for the availability or performance of third-party services</li>
                <li>Third-party service outages may affect AnveshAI functionality</li>
                <li>Changes to third-party services may impact our service</li>
              </ul>
            </CardContent>
          </Card>

          {/* Termination */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>9. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                We may terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                You may discontinue use of the service at any time. Since no account is required, simply stop accessing the service.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>10. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </CardContent>
          </Card>

          {/* Governing Law */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>11. Governing Law</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                These Terms shall be interpreted and governed by the laws of the jurisdiction where the service is operated, without regard to conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms of Service, please contact us through the application or visit our GitHub repository.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  <strong>Remember:</strong> By using AnveshAI, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
