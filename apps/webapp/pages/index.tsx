import TabNav from './components/TabNav';

export function Index() {
  return (
    <div id="tailwind-root">
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
  );
}

export default Index;
