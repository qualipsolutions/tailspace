import React from 'react';
import classnames from 'classnames';

export interface TabNavItem {
  name: string;
  current: boolean;
  href?: string;
}

export interface TabNavProps {
  tabs: TabNavItem[];
}

const TabNav = ({ tabs = [] }: TabNavProps) => (
  <div>
    <div className="sm:hidden">
      <label htmlFor="tabs" className="sr-only">
        Select a tab
      </label>
      {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
      <select
        id="tabs"
        name="tabs"
        className="form-select appearance-none
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding bg-no-repeat
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        defaultValue={tabs.find((tab) => tab.current)?.name}
      >
        {tabs.map((tab) => (
          <option key={tab.name}>{tab.name}</option>
        ))}
      </select>
    </div>
    <div className="hidden sm:block">
      <nav
        className="relative z-0 rounded-lg shadow flex divide-x divide-gray-200"
        aria-label="Tabs"
      >
        {tabs.map((tab, tabIdx) => (
          <a
            key={tab.name}
            href={tab.href}
            className={classnames(
              tab.current
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10'
            )}
            aria-current={tab.current ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <span>{tab.name}</span>
            <span
              aria-hidden="true"
              className={classnames(
                tab.current ? 'bg-indigo-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5'
              )}
            />
          </a>
        ))}
      </nav>
    </div>
  </div>
);
export default TabNav;
