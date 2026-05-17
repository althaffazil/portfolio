import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef()

  const [toast, setToast] = useState({
    show: false,
    message: '',
    success: true,
  })

  if (!isOpen && !toast.show) return null

  const showToast = (message, success = true) => {
    setToast({
      show: true,
      message,
      success,
    })

    setTimeout(() => {
      setToast({
        show: false,
        message: '',
        success: true,
      })
    }, 3000)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_jdxo2ph',
        'template_1bh1k6a',
        form.current,
        'ns6eHXDRdbsqVg28g'
      )
      .then(
        () => {
          form.current.reset()

          onClose()

          showToast('Message sent successfully.', true)
        },
        () => {
          onClose()

          showToast('Failed to send message.', false)
        }
      )
  }

  return (
    <>
      {/* Success / Error Popup */}
      {toast.show && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">

          <div
            className={`w-full max-w-md rounded-2xl border p-8 text-center shadow-2xl ${
              toast.success
                ? 'bg-zinc-950 border-green-500'
                : 'bg-zinc-950 border-red-500'
            }`}
          >

            <div
              className={`text-5xl mb-4 ${
                toast.success
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {toast.success ? '✓' : '✕'}
            </div>

            <h3
              className={`text-2xl font-bold mb-3 ${
                toast.success
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {toast.success ? 'Success' : 'Error'}
            </h3>

            <p className="text-gray-300 text-lg">
              {toast.message}
            </p>

          </div>

        </div>
      )}

      {/* Contact Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">

          <div className="bg-zinc-950 border border-gray-800 rounded-2xl w-full max-w-lg p-8 relative">

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>

            {/* Header */}
            <h2 className="text-3xl font-bold text-white mb-2">
              Contact Me
            </h2>

            <p className="text-gray-400 mb-8">
              Let's discuss opportunities, projects, or collaborations.
            </p>

            {/* Form */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500"
              />

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                required
                className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white outline-none focus:border-purple-500 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition cursor-pointer"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  )
}

export default ContactModal