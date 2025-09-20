"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, Shield, CheckCircle } from "lucide-react"

export function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    businessName: "",
    businessAddress: "",
    owner: "",
    taxId: "",
    monthlyRevenue: "",
    requestedAmount: "",
    email: "",
    phone: "",
    signedApplication: null as File | null,
    bankStatements: null as File | null,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Handle form submission logic here
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Trust indicators */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          <span>Bank-level security</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle className="w-4 h-4 text-primary" />
          <span>Fast approval process</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="w-4 h-4 text-primary" />
          <span>Secure document upload</span>
        </div>
      </div>

      <Card className="shadow-lg border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">Loan Application</CardTitle>
          <CardDescription className="text-muted-foreground">
            Please fill out all required fields to process your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Business Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Business Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-foreground">
                    Business Name / DBA *
                  </Label>
                  <Input
                    id="businessName"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange("businessName", e.target.value)}
                    placeholder="Enter your business name"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="taxId" className="text-foreground">
                    Tax ID (EIN) *
                  </Label>
                  <Input
                    id="taxId"
                    value={formData.taxId}
                    onChange={(e) => handleInputChange("taxId", e.target.value)}
                    placeholder="XX-XXXXXXX"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessAddress" className="text-foreground">
                  Business Address *
                </Label>
                <Textarea
                  id="businessAddress"
                  value={formData.businessAddress}
                  onChange={(e) => handleInputChange("businessAddress", e.target.value)}
                  placeholder="Enter complete business address"
                  className="bg-input border-border focus:ring-primary min-h-[80px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="owner" className="text-foreground">
                  Business Owner / Primary Contact *
                </Label>
                <Input
                  id="owner"
                  value={formData.owner}
                  onChange={(e) => handleInputChange("owner", e.target.value)}
                  placeholder="Full name of business owner"
                  className="bg-input border-border focus:ring-primary"
                  required
                />
              </div>
            </div>

            {/* Financial Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                Financial Information
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="monthlyRevenue" className="text-foreground">
                    Monthly Revenue *
                  </Label>
                  <Input
                    id="monthlyRevenue"
                    type="number"
                    value={formData.monthlyRevenue}
                    onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)}
                    placeholder="0"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requestedAmount" className="text-foreground">
                    Requested Loan Amount *
                  </Label>
                  <Input
                    id="requestedAmount"
                    type="number"
                    value={formData.requestedAmount}
                    onChange={(e) => handleInputChange("requestedAmount", e.target.value)}
                    placeholder="0"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Contact Information</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your@email.com"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(555) 123-4567"
                    className="bg-input border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Document Upload Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Required Documents</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-foreground">Signed Application *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("signedApplication", e.target.files?.[0] || null)}
                      className="hidden"
                      id="signedApplication"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("signedApplication")?.click()}
                    >
                      Choose File
                    </Button>
                    {formData.signedApplication && (
                      <p className="text-xs text-primary mt-2">{formData.signedApplication.name}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-foreground">3 Months Bank Statements *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-2">Click to upload or drag and drop</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("bankStatements", e.target.files?.[0] || null)}
                      className="hidden"
                      id="bankStatements"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => document.getElementById("bankStatements")?.click()}
                    >
                      Choose File
                    </Button>
                    {formData.bankStatements && (
                      <p className="text-xs text-primary mt-2">{formData.bankStatements.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                size="lg"
              >
                Submit Application
              </Button>
              <p className="text-xs text-muted-foreground text-center mt-3">
                By submitting this application, you agree to our terms of service and privacy policy. Your information
                is encrypted and secure.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
