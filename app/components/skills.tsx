"use client";
import React, { useState } from "react";
import { SkillsType } from "../types/personalData";
type Data = {
  data: SkillsType | any;
};

function Skills({ data }: Data) {
  const [activeTab, setActiveTab] = useState("soft");
  const setBg = (active: string) =>
    activeTab === active ? "bg-yellow-300" : "bg-gray-200";

  const setTabAlignment = (tab: string) =>
    tab === "soft" ? "text-left" : "text-right";
  const tabs = (
    <div className="flex">
      {["soft", "hard"].map((ele) => (
        <button
          key={ele}
          type="button"
          className={`btn ${setBg(ele)} ${setTabAlignment(ele)}`}
          onClick={() => setActiveTab(ele)}
        >
          {" "}
          {ele} Skills{" "}
        </button>
      ))}
    </div>
  );
  const content = (
    <ul
      className={`flex ${
        activeTab === "soft" ? "justify-start" : "justify-end"
      } py-4 gap-2 list-none flex-wrap flex-row content-start`}
    >
      {data[activeTab].map(({ icon, text }: { icon: string; text: string }) => (
        <li key={text} className="skill">
          <span>{icon}</span>
          {text}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="">
      {tabs}
      {content}
    </div>
  );
}

export default Skills;
