
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { Sun, Moon, ArrowLeft, Shield } from "lucide-react";

export default function PrivacyPolicy() {
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
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">Privacy Policy</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">How we protect your information</p>
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
              <CardTitle className="text-2xl gradient-text">Privacy Policy</CardTitle>
              <p className="text-gray-600 dark:text-gray-400">Last updated: January 8, 2025</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                AnveshAI is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our AI image generation service.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  <strong>Key Point:</strong> AnveshAI does not require user registration and does not collect personal information.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Information You Provide</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Text prompts you submit for image generation</li>
                  <li>Generated images and their metadata</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Information Automatically Collected</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Basic usage analytics (page views, API requests)</li>
                  <li>Technical information (browser type, device type, IP address)</li>
                  <li>Error logs for debugging purposes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Information We Do NOT Collect</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Personal identification information (name, email, phone number)</li>
                  <li>Account credentials or passwords</li>
                  <li>Payment information (service is completely free)</li>
                  <li>Cookies for tracking or advertising</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Operation:</strong> To generate AI images based on your prompts</li>
                <li><strong>Storage:</strong> To store your generated images and make them accessible to you</li>
                <li><strong>Service Improvement:</strong> To analyze usage patterns and improve our AI models</li>
                <li><strong>Technical Support:</strong> To debug issues and maintain service quality</li>
                <li><strong>Security:</strong> To prevent abuse and ensure service availability</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Storage and Security */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Data Storage and Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Data Storage</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Generated images are stored on secure servers</li>
                  <li>Images are publicly accessible via unique URLs</li>
                  <li>No personal information is linked to stored images</li>
                  <li>Data is stored indefinitely to ensure persistent access</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Security Measures</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Industry-standard encryption for data transmission</li>
                  <li>Regular security updates and monitoring</li>
                  <li>Limited access to stored data</li>
                  <li>No sensitive personal information is collected or stored</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                AnveshAI uses third-party AI services to generate images. These services may have their own privacy policies:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                <li>Pollinations.ai - AI image generation service</li>
                <li>Hugging Face - AI model hosting platform</li>
                <li>Replit - Application hosting platform</li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300">
                We recommend reviewing the privacy policies of these services if you have concerns about how your prompts are processed.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">Since we don't collect personal information, traditional data rights don't apply. However:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Access:</strong> All generated images are accessible via the application interface</li>
                <li><strong>No Account Required:</strong> You can use the service without providing any personal information</li>
                <li><strong>Image Ownership:</strong> You retain rights to images generated from your prompts</li>
                <li><strong>Service Discontinuation:</strong> You can stop using the service at any time</li>
              </ul>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                Our service is not directed to children under 13. We do not knowingly collect personal information from children under 13. Since we don't require registration or collect personal information, this policy inherently protects children's privacy.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Privacy Policy */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-xl border border-gray-200/50 dark:border-gray-700/50">
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us through the application or visit our GitHub repository for more information.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  <strong>Remember:</strong> AnveshAI is designed with privacy in mind - no accounts, no personal data collection, and completely free to use.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
