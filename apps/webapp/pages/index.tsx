import TabNav from './components/TabNav';

export function Index() {
  return (
    <div className="min-h-full">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <TabNav
          tabs={[
            { name: 'Details', href: '#pablo', current: true },
            { name: 'Location', href: '#pablo', current: false },
            { name: 'Acquisition', href: '#pablo', current: false },
            { name: 'Valuation', href: '#pablo', current: false },
            { name: 'Medium', href: '#pablo', current: false },
            { name: 'Images', href: '#pablo', current: false },
            { name: 'Documents', href: '#pablo', current: false },
            { name: 'Reference', href: '#pablo', current: false },
          ]}
        />
      </div>
    </div>
  );
}

export default Index;
