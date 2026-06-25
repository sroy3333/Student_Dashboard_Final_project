"use client";

import {
  Home,
  Book,
  User,
  Menu
} from "lucide-react";

import {
  motion,
  AnimatePresence
} from "framer-motion";

import { useState } from "react";

const items = [
  { icon: Home, label: "Home" },
  { icon: Book, label: "Courses" },
  { icon: User, label: "Profile" }
];

export default function Sidebar() {

  const [active, setActive] =
    useState("Home");

  const [collapsed, setCollapsed] =
  useState(false);

  return (
    <motion.nav
      animate={{
        width: collapsed ? 80 : 260
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      className="
      border-r
    border-zinc-800
      p-4
      overflow-hidden
      "
    >
      <button
        onClick={() =>
          setCollapsed(!collapsed)
        }
        className="
        mb-6
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-lg
        text-zinc-400
        hover:bg-zinc-800
        "
      >
        <Menu size={20} />
      </button>
        
        {items.map((item) => {

          const Icon = item.icon;

          return (
            <button
              key={item.label}
              onClick={() =>
                setActive(item.label)
              }
              className={`
              relative
              flex
              w-full
              items-center
              rounded-xl
              p-3

              ${
                collapsed
                  ? "justify-center"
                  : "gap-3"
                }
                `}
            >
            
              {active === item.label && (
                <motion.div
                  layoutId="activeNav"
                  className="
                  absolute
                  inset-0
                  rounded-xl
                bg-zinc-800
                  "
                />
              )}

              <Icon
                className="relative z-10"
              />

              <AnimatePresence>

                {!collapsed && (

                  <motion.span
                    className="relative z-10"
                    initial={{
                      opacity: 0
                    }}
                    animate={{
                      opacity: 1
                    }}
                    exit={{
                      opacity: 0
                    }}
                    transition={{
                      duration: 0.15
                    }}
                  >
                    {item.label}
                  </motion.span>

                )}

              </AnimatePresence>

            </button>
          );
      
        })}
    </motion.nav>
  );
}