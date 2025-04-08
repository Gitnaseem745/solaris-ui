'use client';

const headData = ['Name', 'Type', 'Required', 'Default', 'Description'];

export default function PropsTable({ components }: { components: ComponentProps[] }) {
  return (
    <div>
      {components?.map((component, index) => (
        <div key={index} className="mb-8">
          {/* Component Name */}
          <h2 className="text-xl font-semibold my-6 text-foreground">{component.name} Props</h2>

          {/* Props Table */}
          <div className="overflow-x-auto rounded-md">
            <table className="min-w-full divide-y divide-[#2e3138c5] text-neutral-300">
              <thead className="bg-[#333a46] font-semibold">
                <tr>
                  {headData.map((data, i) => (
                    <th
                      key={i}
                      className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                    >
                      {data}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-[#282C34] divide-y divide-[#2e3138]">
                {component.props.map((prop, i) => (
                  <tr key={i}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {prop.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{prop.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{prop.required ? 'Yes' : 'No'}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">{prop.default}</td>
                    <td className="px-6 py-4 text-sm text-gray-300">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}

      {/* Fallback for no components */}
      {components.length === 0 && (
        <div className="text-4xl max-sm:text-2xl text-neutral-600 opacity-40 font-bold text-center content-center p-10 pointer-events-none">
          No props available.
        </div>
      )}
    </div>
  );
}
