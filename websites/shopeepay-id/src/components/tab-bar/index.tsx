import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "../../utils";

import { supportsViewTransitions } from "./utils/supportsViewTransitions";
import "./style.css";

type TabKey = string | number;

type TabBarProps = {
  header: { slot: string; label: string }[];
  defaultActiveTab?: TabKey;
  fullWidth?: boolean;
  center?: boolean;
  headerContainerClassName?: string;
  headerButtonClassName?: string;

  /**
   * This allows astro <slot> to be passed as props
   */
  [key: string]: any;
};

const TabBar = (props: TabBarProps) => {
  const { header, defaultActiveTab, fullWidth, center, headerContainerClassName, headerButtonClassName, ...rest } =
    props;
  const [active, setActive] = useState<TabKey>(defaultActiveTab ?? header[0].slot);
  const [activeTab, setActiveTab] = useState(rest[active]);
  const headerRef = useRef<HTMLDivElement>(null);

  const handleChangeTab = (tab: TabKey) => {
    if (supportsViewTransitions) {
      /** @ts-ignore */
      document.startViewTransition(() => {
        flushSync(() => {
          setActive(tab);
          setActiveTab(rest[tab]);
        });
      });
      return;
    }

    setActive(tab);
    setActiveTab(rest[tab]);
  };

  useEffect(() => {
    if (headerRef.current) {
      const activeTabElement = headerRef.current.querySelector(`button[data-value="${active}"]`);

      if (activeTabElement) {
        const activeTabElementRect = activeTabElement.getBoundingClientRect();
        const headerRect = headerRef.current.getBoundingClientRect();

        if (activeTabElementRect.left < headerRect.left) {
          const scrollLeft = activeTabElementRect.left - headerRect.left;
          headerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
        } else if (activeTabElementRect.right > headerRect.right) {
          const scrollLeft = activeTabElementRect.right - headerRect.right;
          headerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
        }
      }
    }
  }, [active]);

  return (
    <div>
      <div
        ref={headerRef}
        className={cn(
          "border-b border-gray-200 flex overflow-auto",
          { "justify-between": fullWidth },
          { "justify-center": center },
          headerContainerClassName,
        )}
      >
        {header?.map((item, index) => (
          <button
            key={index}
            data-value={item.slot}
            onClick={() => handleChangeTab(item.slot)}
            className={cn(
              { "py-2 px-4 hover:bg-gray-100 border-b-2 border-transparent ": true },
              { "transition-all duration-300 ease-in-out": true },
              { "whitespace-nowrap": true },
              { "border-primary text-primary": item.slot === active },
              { "w-full": fullWidth },
              headerButtonClassName,
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div style={{ viewTransitionName: "item" }}>{activeTab}</div>
    </div>
  );
};

export default TabBar;
