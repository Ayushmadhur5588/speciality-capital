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
    taxId: "",
    monthlyRevenue: "",
    requestedAmount: "",
    email: "",
    phone: "",
    salutation: "",
    firstName: "",
    lastName: "",
    ownerSSN: "",
    bankStatements: null as File | null,
  })

  const [loading, setLoading] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (file: File | null) => {
    setFormData((prev) => ({ ...prev, bankStatements: file }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.bankStatements) {
      alert("Please upload 3 months bank statement")
      return
    }

    setLoading(true)

    try {
     
      const recordResponse = await fetch(
        "https://bangmetricllcdemo2.service-now.com/api/bangm/speciality_captital/create_record",

        
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("ashish.sharma:Ashu@123"),
          },
          body: JSON.stringify({
            business_name: formData.businessName,
            tax_id: formData.taxId,
            business_address: formData.businessAddress,
            first_name: formData.firstName,
            last_name: formData.lastName,
            owner_ssn: formData.ownerSSN,
            monthly_revenue: Number(formData.monthlyRevenue),
            requested_loan_amount: Number(formData.requestedAmount),
            email_address: formData.email,
            phone_number: formData.phone,
          }),
        }
      )



      if (!recordResponse.ok) throw new Error(`Error creating record: ${recordResponse.status}`)

      const recordResult = await recordResponse.json()
      const sysId = recordResult.result?.sys_id
      if (!sysId) throw new Error("sys_id missing in response")

      console.log("✅ Record created, sys_id:", sysId)
      console.log(recordResult);
      console.log(recordResult.result?.reference_number);

      
      const file = formData.bankStatements
      const fileUploadUrl = `https://bangmetricllcdemo2.service-now.com/api/now/attachment/file?table_name=x_bangm_business_f_funding_request&table_sys_id=${sysId}&file_name=${encodeURIComponent(file?.name || "BankStatement.pdf")}`

      const fileForm = new FormData()
      fileForm.append("file", file as File)

      const fileResponse = await fetch(fileUploadUrl, {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa("ashish.sharma:Ashu@123"),
        },
        body: fileForm,
      })

      if (!fileResponse.ok) throw new Error(`Error uploading file: ${fileResponse.status}`)

      const fileResult = await fileResponse.json()
      console.log("✅ File uploaded:", fileResult)
      

      alert("Application submitted successfully! Sys ID: " + sysId)

     
      setFormData({
        businessName: "",
        businessAddress: "",
        taxId: "",
        monthlyRevenue: "",
        requestedAmount: "",
        email: "",
        phone: "",
        salutation: "",
        firstName: "",
        lastName: "",
        ownerSSN: "",
        bankStatements: null,
      })
    } catch (err: any) {
      console.error(err)
      alert("Failed to submit application. " + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="shadow-lg border-border">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-foreground">Request Financing</CardTitle>
          <CardDescription className="text-muted-foreground">
            Please fill out all required fields to process your application
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Business Name *</Label>
                <Input value={formData.businessName} onChange={(e) => handleInputChange("businessName", e.target.value)} required />
              </div>
              <div>
                <Label>Tax ID *</Label>
                <Input value={formData.taxId} onChange={(e) => handleInputChange("taxId", e.target.value)} required />
              </div>
            </div>

            <div>
              <Label>Business Address *</Label>
              <Textarea value={formData.businessAddress} onChange={(e) => handleInputChange("businessAddress", e.target.value)} required />
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Email *</Label>
                <Input type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} required />
              </div>
              <div>
                <Label>Phone *</Label>
                <Input type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} required />
              </div>
            </div>

        
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Monthly Revenue *</Label>
                <Input type="number" value={formData.monthlyRevenue} onChange={(e) => handleInputChange("monthlyRevenue", e.target.value)} required />
              </div>
              <div>
                <Label>Requested Amount * </Label>
                <Input type="number" value={formData.requestedAmount} onChange={(e) => handleInputChange("requestedAmount", e.target.value)} required />
              </div>
            </div>

           
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>First Name *</Label>
                <Input value={formData.firstName} onChange={(e) => handleInputChange("firstName", e.target.value)} required />
              </div>
              <div>
                <Label>Last Name *</Label>
                <Input value={formData.lastName} onChange={(e) => handleInputChange("lastName", e.target.value)} required />
              </div>
            </div>

            <div>
              <Label>Owner SSN *</Label>
              <Input value={formData.ownerSSN} onChange={(e) => handleInputChange("ownerSSN", e.target.value)} required />
            </div>

            <div>
              <Label>3 Months Bank Statement *</Label>
              <div className="border-2 border-dashed p-4 text-center rounded">
                <input
                  type="file"
                  id="bankStatements"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
                />
                <Button type="button" variant="outline" onClick={() => document.getElementById("bankStatements")?.click()}>
                  <Upload className="w-4 h-4 mr-2" /> Choose File
                </Button>
                {formData.bankStatements && <p className="mt-2 text-sm">{formData.bankStatements.name}</p>}
              </div>
            </div>

            <Button type="submit" disabled={loading} className="w-full">
              {loading ? "Submitting..." : "Submit Application"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
