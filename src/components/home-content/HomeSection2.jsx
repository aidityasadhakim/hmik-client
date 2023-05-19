import ImageDesc2 from "./ImageDesc2";
import { Department } from "@/constant/Department";

const HomeSection2 = () => {
  return (
    <div className="w-full bg-white flex flex-col h-full">
      {/* Internal */}
      <ImageDesc2
        name={Department.internal.name}
        position={Department.internal.position}
        image={Department.internal.image}
        groupImage={Department.internal.groupImage}
        text={Department.internal.text}
        title={Department.internal.title}
      />

      {/* Eksternal */}
      <ImageDesc2
        name={Department.eksternal.name}
        position={Department.eksternal.position}
        image={Department.eksternal.image}
        groupImage={Department.eksternal.groupImage}
        text={Department.eksternal.text}
        title={Department.eksternal.title}
        reverse={true}
      />
    </div>
  );
};

export default HomeSection2;
