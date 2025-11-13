import QRCode from "./qr-code"

function WhatsappSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">¿Listo para empezar?</h2>
        <p className="text-lg text-center text-gray-700 mb-4">
          Contáctanos vía WhatsApp para solicitar un demo personalizado de BOLT Gerente AI.
        </p>

        <div className="text-center">
          <div className="bg-white p-4 rounded-lg inline-block mb-4">
            <QRCode
              value="https://wa.me/56979540471?text=Hola, me interesa solicitar un demo de BOLT Gerente AI"
              size={160}
            />
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://wa.me/56979540471?text=Hola, me interesa solicitar un demo de BOLT Gerente AI"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Chatea con nosotros en WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhatsappSection
