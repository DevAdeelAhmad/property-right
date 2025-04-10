import { Footer } from "@/app/_components/Footer"
import TestForm from './_components/test-form'

const UploadPage = () => {
  return (
    <main className="min-h-screen">
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              <span>Property Management</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Property Registration Portal</h1>
            <p className="text-lg text-muted-foreground">
              Register your property in our secure database to get started with PropertyRight{"'"}s comprehensive management tools.
            </p>
          </div>
          
          <TestForm />
          
          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              Need help with registration? <a href="#" className="text-primary hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default UploadPage
