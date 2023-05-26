import React from "react";
import MemberContent from "./MemberContent";

const MemberList = ({ members }) => {
  console.log(members.length);
  return (
    <>
      {members.map((member, key) => {
        return (
          <MemberContent
            className={`${
              key == 0 ? "mt-[100px] mb-[-50px]  md:mb-[-100px]" : ""
            } ${key + 1 == members.length ? "" : " md:mb-[-100px]"}`}
            reverse={key % 2 == 0 ? false : true}
            name={member.name}
            position={member.position}
            description={member.description}
            imgUrl={member.imgUrl}
            github={member.github}
            instagram={member.instagram}
            linkedin={member.linkedin}
          />
        );
      })}
    </>
  );
};

export default MemberList;
