import { QuotationSection } from '@/types/quotation'

interface QuotationSectionsProps {
  sections: QuotationSection[]
  totalMarketPrice: number
  totalAlliancePrice: number
}

export function QuotationSections({
  sections,
  totalMarketPrice,
  totalAlliancePrice,
}: QuotationSectionsProps) {
  return (
    <div className="bg-white sm:border-2 sm:rounded-2xl sm:shadow-xl px-3 py-3 sm:p-4 md:p-6 lg:p-8 border-neutral-200 overflow-x-hidden w-full max-w-full">
      {/* Título y resumen de valores por sección */}
      <div className="mb-3 sm:mb-8">
        <h2 className="text-base sm:text-2xl md:text-3xl lg:text-4xl font-black text-primary-800 mb-3 sm:mb-2 break-words tracking-tight">
          DESGLOSE DETALLADO POR PLATAFORMA
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-4 mt-3 sm:mt-4">
          <div className="bg-red-50 rounded-lg sm:rounded-2xl px-3 py-2 sm:p-3 border border-red-200 w-full sm:w-auto">
            <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
              Valor Original:
            </p>
            <p className="text-sm sm:text-lg font-bold text-red-700 break-words whitespace-nowrap">
              $35-40 por sección
            </p>
          </div>
          <div className="bg-primary-50 rounded-lg sm:rounded-2xl px-3 py-2 sm:p-3 border border-primary-200 w-full sm:w-auto">
            <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
              Valor de Oferta:
            </p>
            <p className="text-sm sm:text-lg font-bold text-primary-700 break-words whitespace-nowrap">
              $21-27 por sección
            </p>
          </div>
        </div>
      </div>

      {/* Lista de secciones - 2 columnas en todos los tamaños */}
      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-8">
        {sections.map((section) => (
          <div
            key={section.id}
            className="px-2 py-2.5 sm:p-4 bg-white sm:bg-neutral-50 rounded-lg border border-neutral-200 sm:hover:border-primary-300 sm:transition-all sm:hover:shadow-md w-full"
          >
            <div className="flex items-start gap-1 sm:gap-2">
              <span className="text-primary-700 font-bold text-xs sm:text-sm w-3 sm:w-5 flex-shrink-0">
                {section.id}.
              </span>
              <h3 className="text-neutral-800 font-medium text-xs sm:text-sm leading-tight break-words">
                {section.name}
              </h3>
            </div>
            <div className="mt-1 sm:mt-2 flex flex-col items-end gap-0.5">
              <span
                className="text-[0.7rem] sm:text-xs text-red-600 line-through whitespace-nowrap"
                style={{ textDecorationThickness: '1px' }}
              >
                ${section.marketPrice} USD
              </span>
              <span className="text-[0.6rem] sm:text-xs text-primary-700 font-medium whitespace-nowrap">
                Precio de Oferta:
              </span>
              <span className="text-[0.7rem] sm:text-sm text-primary-700 font-black whitespace-nowrap">
                ${section.alliancePrice} USD
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="bg-gradient-to-r from-primary-100 to-red-50 rounded-lg sm:rounded-xl px-3 py-3 sm:p-6 border-2 border-primary-300 mb-3 sm:mb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 sm:gap-4">
          <span className="text-sm sm:text-xl font-black text-primary-800 break-words">
            TOTAL {sections.length} URLs:
          </span>
          <div className="flex flex-col sm:flex-row items-start sm:items-end md:items-center gap-3 sm:gap-4">
            <div className="text-left sm:text-center md:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
                Valor Real:
              </p>
              <span
                className="text-red-600 line-through text-base sm:text-2xl font-bold break-words whitespace-nowrap"
                style={{ textDecorationThickness: '1px' }}
              >
                ${totalMarketPrice} USD
              </span>
            </div>
            <div className="text-left sm:text-center md:text-right">
              <p className="text-xs sm:text-sm text-neutral-600 mb-1 break-words">
                Valor de Oportunidad:
              </p>
              <span className="text-lg sm:text-3xl font-black text-primary-700 break-words whitespace-nowrap">
                ${totalAlliancePrice} USD
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Nota enmarcada en valle rojo */}
      <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg sm:rounded-xl px-3 py-2.5 sm:p-4 border-2 border-red-300">
        <p className="text-xs sm:text-sm text-neutral-700 text-center break-words leading-relaxed">
          <strong className="text-red-800">Nota:</strong> Esto representa pasar de pagar entre{' '}
          <strong className="text-red-700">$35 a $40 dólares por sección</strong> a un promedio de{' '}
          <strong className="text-primary-700">$21 a $27 por sección</strong> para la promoción{' '}
          <strong className="text-primary-800">Alianza 2x1</strong>.
        </p>
      </div>

      
    </div>
  )
}
