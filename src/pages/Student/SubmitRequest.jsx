import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Input from "../../components/Input";
import PortalLayout from "../../components/PortalLayout";

const initialForm = {
  title: "",
  category: "IT Support",
  priority: "Normal",
  description: "",
};

function SubmitRequest() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await fetch("http://localhost:3001/requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          status: "Pending",
          submittedBy: "Student",
          createdAt: new Date().toISOString(),
        }),
      });

      setForm(initialForm);
      setMessage("Request submitted successfully.");
    } catch {
      setMessage("Could not submit request. Make sure the JSON server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PortalLayout
      role="student"
      title="Submit Request"
      subtitle="Send a clear request so the service team can resolve it faster."
    >
        <Card className="form-card bg-white rounded-xl shadow-xl border border-gray-200 p-8 dark:bg-gray-800 dark:border-gray-700">
         <form onSubmit={handleSubmit} className="request-form space-y-6">
           <div className="space-y-3">
             <Input
               label="Request Title"
               placeholder="Example: Hostel WiFi is not working"
               value={form.title}
               onChange={(event) => updateField("title", event.target.value)}
               required
             />
           </div>

           <div className="grid gap-4 sm:grid-cols-2">
             <div className="space-y-3">
               <label className="field">
                 <span className="block text-sm font-medium text-gray-700 mb-1">Category</span>
                 <select
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                   value={form.category}
                   onChange={(event) => updateField("category", event.target.value)}
                 >
                   <option>IT Support</option>
                   <option>Hostel</option>
                   <option>Library</option>
                   <option>Finance</option>
                   <option>Academics</option>
                 </select>
               </label>
             </div>

             <div className="space-y-3">
               <label className="field">
                 <span className="block text-sm font-medium text-gray-700 mb-1">Priority</span>
                 <select
                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                   value={form.priority}
                   onChange={(event) => updateField("priority", event.target.value)}
                 >
                   <option>Low</option>
                   <option>Normal</option>
                   <option>High</option>
                 </select>
               </label>
             </div>
           </div>

           <div className="space-y-3">
             <Input
               label="Description"
               multiline
               rows="6"
               placeholder="Explain what happened, where it happened, and anything already tried."
               value={form.description}
               onChange={(event) => updateField("description", event.target.value)}
               required
             />
           </div>

           {message && (
             <p className={`form-message px-4 py-3 rounded-md text-sm font-medium ${
               message.includes("successfully") 
                 ? "bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200" 
                 : "bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200"
             }`}>
               {message}
             </p>
           )}

           <div className="form-actions flex justify-end pt-4 space-x-3">
             <Button type="button" variant="secondary" onClick={() => navigate("/student/requests")}>
               View My Requests
             </Button>
             <Button type="submit" disabled={isSubmitting}>
               {isSubmitting ? (
                 <>
                   Submitting...
                   <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                   </svg>
                 </>
               ) : "Submit Request"}
             </Button>
           </div>
         </form>
       </Card>
    </PortalLayout>
  );
}

export default SubmitRequest;